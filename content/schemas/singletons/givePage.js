import { FaDonate as icon } from 'react-icons/fa';

export default {
    name: 'givePage',
    title: 'Give Page',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Page TItle',
            validation: Rule => Rule.required(),
        },
        {
            name: 'bannerImage',
            type: 'bannerImage',
            title: 'Banner Image',
        },
        {
            name: 'intro',
            type: 'text',
            title: 'Intro',
            validation: Rule => Rule.required(),
        },
        {
            name: 'contentBlock',
            type: 'array',
            title: 'Content',
            of: [{ type: 'giveBlock' }],
        },
        {
            name: 'giveLink',
            type: 'string',
            title: 'Link to the Giving portal',
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
