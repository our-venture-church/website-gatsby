import { FaRegHandshake as icon } from 'react-icons/fa';

export default {
    name: 'whoWeArePage',
    title: 'Who We Are Page',
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
            title: 'Blurb',
            name: 'blurb',
            type: 'richText',
            validation: Rule => Rule.required(),
        },
        {
            title: 'Content',
            name: 'contentBlock',
            type: 'array',
            of: [{ type: 'whoWeAreBlock' }],
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
