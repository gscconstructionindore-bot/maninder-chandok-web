import { defineField, defineType } from 'sanity'

export const product = defineType({
    name: 'product',
    title: 'Digital Product',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.required().min(1),
            description: 'List key features of the product (e.g. "120+ Pages", "PDF Format", "Lifetime Updates")',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Price (INR)',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'originalPrice',
            title: 'Original Price (for discount display)',
            type: 'number',
            description: 'If set higher than Price, it will show as a crossed-out price.',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'file',
            title: 'Digital File',
            type: 'file',
            description: 'The secure file that users will download after purchase.',
            validation: (Rule) => Rule.required(),
        }),
    ],
})
