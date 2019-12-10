import { FaRegHandshake as icon } from 'react-icons/fa';

export default {
    title: 'Lingo Page',
    name: 'lingoPage',
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
        },
        {
            title: 'Dictionary',
            name: 'dictionary',
            type: 'array',
            of: [{ type: 'definitionItem' }],
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
