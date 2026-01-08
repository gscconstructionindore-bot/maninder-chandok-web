import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'likes',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name: 'comments',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'comment',
              type: 'text',
              validation: Rule => Rule.required(),
            },
            {
              name: 'date',
              type: 'datetime',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
})
