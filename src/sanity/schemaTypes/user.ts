import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'string',
        }),
        defineField({
            name: 'emailVerified',
            title: 'Email Verified',
            type: 'datetime',
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        }),
        defineField({
            name: 'password',
            title: 'Password',
            type: 'string',
            hidden: true,
        }),
    ],
})
