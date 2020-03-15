import { FiAlertTriangle as icon } from 'react-icons/fi';

export default {
    name: 'announcement',
    title: 'Announcement',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Used to build a link to the page.',
            options: {
                source: 'title',
                maxLength: 100,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'content',
            title: 'Content',
            type: 'richText',
        },
        {
            name: 'updates',
            title: 'Updates',
            type: 'array',
            of: [{ type: 'update' }],
        },
    ],
    preview: {
        select: { title: 'title' },
    },
};
