import { FaDonate as icon } from 'react-icons/fa';

export default {
    title: 'REACH Page',
    name: 'reachPage',
    type: 'document',
    icon,
    fields: [
        {
            title: 'Page TItle',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            title: 'Content',
            name: 'content',
            type: 'richText',
            validation: Rule => Rule.required(),
        },
        {
            name: 'seoDescription',
            type: 'seoDescription',
            title: 'SEO Description',
        },
    ],
    preview: {
        select: { title: 'title' },
    },
};
