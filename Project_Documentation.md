# Website Project Documentation

Welcome to the documentation for your new website. This guide provides a comprehensive overview of what has been implemented, the pages available, how the blogging system operates, and how to use the built-in Content Management System (CMS) to update your website's content.

## 1. Implemented Pages

The following pages and routes have been successfully implemented and are live on the website:

- **Home (`/`)**: The main landing page introducing you and your services.
- **About (`/about`)**: Detailed information about Maninder Chandok.
- **Journey (`/journey`)**: A visual or chronological representation of your journey.
- **Blogs (`/blogs`)**: The central hub for all your published articles and blog posts.
- **Gallery (`/gallery`)**: A visual showcase of photos, categorized for easy viewing.
- **Products (`/products`)**: Displays the products you have available for your users.
- **GSC Pharma (`/gsc-pharma`)**: Dedicated page for GSC Pharma related information.
- **Homestay (`/homestay`)**: Dedicated page detailing homestay services or information.
- **Contact (`/contact`)**: A functional contact form for visitors to reach out to you directly.
- **Profile (`/profile`)**: A user dashboard for logged-in users to manage their accounts.
- **Privacy Policy (`/privacy`)**: Legal privacy information.
- **Terms & Conditions (`/terms`)**: Terms of use for the website.

## 2. Key Features & Technologies

- **Authentication**: Secure user login and registration system.
- **Payments**: Integrated with **Razorpay** to handle transactions for products or services.
- **Contact Forms**: Integrated with **EmailJS** to ensure messages submitted via the contact form are delivered straight to your inbox.
- **SEO Optimized**: Each page, especially blog posts, is optimized for search engines with dynamic meta tags, OpenGraph sharing images (for social media previews), and JSON-LD structured data.

## 3. How the Blog System Works

The website features a modern, high-performance blogging engine:

- **Blog Listing (`/blogs`)**: Displays all published blog posts in chronological order (newest first). It shows the cover image, title, category, and a short excerpt.
- **Individual Posts (`/blogs/[slug]`)**: Clicking on a blog opens the full article. The URLs are clean and SEO-friendly (e.g., `yourwebsite.com/blogs/my-first-post`).
- **Rich Media Support**: Blog posts support rich text formatting, images, and embedded content.
- **Automated SEO**: When you publish a blog, the website automatically generates the necessary metadata so that when someone shares your blog link on WhatsApp, LinkedIn, or Twitter, it displays a beautiful preview card with the title and cover image.

## 4. How to Manage Content via the `/studio` Panel

You have full control over the website's content without needing to touch any code. This is managed through the built-in Sanity Studio.

### Accessing the Studio
You can access the content management panel by navigating to:
**`yourwebsite.com/studio`**

### What You Can Manage
Inside the Studio, you will see a clean dashboard with several sections on the left-hand menu. Here is what you can do:

1. **Blogs**
   - **Create New Blogs**: Write new articles using a rich text editor.
   - **Fields Available**: You can set the Title, Slug (the URL), Cover Image, Category, Excerpt (short description), and the Main Content.
   - **Publishing**: You can draft blogs and publish them when they are ready.

2. **Blog Categories**
   - Create categories (e.g., "Technology", "Business", "Health") to organize your blog posts.

3. **Gallery Photos & Categories**
   - Upload new images to your website's Gallery page.
   - Create Gallery Categories to group photos together for easy browsing.

4. **Products & Orders**
   - **Products**: Add new products, update pricing, descriptions, and product images.
   - **Orders**: View and track customer orders placed through the website.

5. **Users**
   - View and manage registered users on your platform.

### How to Write a Blog Post (Step-by-Step)
1. Go to `/studio` and log in.
2. Click on **Blog** from the left-hand menu.
3. Click the **"Add new"** button (usually a pencil icon or `+` sign at the top).
4. Fill in the **Title**.
5. Click "Generate" next to the **Slug** field to automatically create a web-friendly URL based on your title.
6. Upload a **Cover Image**.
7. Write a short **Excerpt**.
8. Use the editor to write your **Content**. You can format text, add links, and insert images directly into the content.
9. Once finished, click the green **Publish** button at the bottom right. Your blog is now live on the website!

---
*Note: If you make changes in the `/studio`, they are reflected on the live website almost instantly.*
