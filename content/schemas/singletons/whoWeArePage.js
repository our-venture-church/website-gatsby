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
            title: 'Staff Photos',
            name: 'staffPhotos',
            description: 'Photos that go in the "Staff" section.',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },
        {
            title: 'History Timeline',
            name: 'historyTimeline',
            description: 'Timeline that goes in the "History" section.',
            type: 'array',
            of: [
                {
                    type: 'timelineItem',
                },
            ],
        },
        {
            title: 'Beliefs Background',
            name: 'beliefsBg',
            description: 'Background image for the "Beliefs" section.',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            title: 'Lingo Words',
            name: 'lingoWords',
            description: 'Quoted words show in the "Lingo" section',
            type: 'array',
            of: [
                {
                    type: 'string',
                },
            ],
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
