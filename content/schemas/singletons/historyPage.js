import { FaRegHandshake as icon } from 'react-icons/fa';

export default {
    title: 'History Page',
    name: 'historyPage',
    type: 'document',
    icon,
    fields: [
        {
            title: 'Page title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            title: 'Content',
            name: 'content',
            type: 'richText',
        },
        {
            title: 'SEO Description',
            name: 'seoDescription',
            type: 'seoDescription',
        },
    ],
    preview: {
        select: { title: 'title' },
    },
};
