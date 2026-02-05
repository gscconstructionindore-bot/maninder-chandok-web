import { createClient } from 'next-sanity'
import fs from 'fs'
import path from 'path'

// Load .env manually to avoid extra dependencies
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf-8');
    envConfig.split('\n').forEach(line => {
        const [key, val] = line.split('=');
        if (key && val) {
            process.env[key.trim()] = val.trim().replace(/^["']|["']$/g, '');
        }
    });
}

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
    apiVersion: '2024-01-01'
});

async function migrate() {
    console.log('Starting migration...');

    // Fetch posts with defined category to check for strings
    const posts = await client.fetch(`*[_type == "blog" && defined(category)]`);

    console.log(`Found ${posts.length} posts.`);

    for (const post of posts) {
        console.log(`Inspecting post "${post.title}": category type is "${typeof post.category}", value is:`, JSON.stringify(post.category));

        if (typeof post.category !== 'string') {
            console.log(`Skipping post "${post.title}" - category is not a string (already migrated?)`);
            continue;
        }

        const categoryName = post.category;
        console.log(`Processing post "${post.title}" with category "${categoryName}"`);

        // Check if category exists
        let categoryId;
        const existingCategory = await client.fetch(`*[_type == "category" && title == $title][0]`, { title: categoryName });

        if (existingCategory) {
            console.log(`  Found existing category: ${existingCategory.title} (${existingCategory._id})`);
            categoryId = existingCategory._id;
        } else {
            console.log(`  Creating new category: ${categoryName}`);
            const slug = categoryName.toLowerCase().replace(/\s+/g, '-').slice(0, 96);
            const newCategory = await client.create({
                _type: 'category',
                title: categoryName,
                slug: { _type: 'slug', current: slug }
            });
            categoryId = newCategory._id;
            console.log(`  Created category ID: ${categoryId}`);
        }

        // Patch the post
        console.log(`  Patching post...`);
        await client.patch(post._id)
            .unset(['category'])
            .set({
                category: {
                    _type: 'reference',
                    _ref: categoryId
                }
            })
            .commit();

        console.log(`  Done.`);
    }

    console.log('Migration complete.');
}

migrate().catch(err => {
    console.error('Migration failed:', err);
    process.exit(1);
});
