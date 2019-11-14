import { MdFavoriteBorder as icon } from 'react-icons/md';

export default {
    name: 'whatWeDoPage',
    title: 'What We Do Page',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Page title',
            type: 'string',
        },
        {
            name: 'blurb',
            title: 'Blurb',
            type: 'text',
        },
        {
            name: 'highlightedMinistries',
            title: 'Highlighted Ministries',
            type: 'array',
            of: [{ type: 'highlightedMinistry' }],
        },
        {
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'seoDescription',
        },
    ],
    preview: {
        select: { title: 'title' },
    },
};
