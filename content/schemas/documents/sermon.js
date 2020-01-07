import { MdPlayCircleFilled as icon } from 'react-icons/md';

export default {
    name: 'sermon',
    title: 'Sermon',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Required. Sermon Title',
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description:
                'Required. This is used to build the URL for this sermon',
            options: {
                source: 'title',
                maxLength: 100,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            description: 'Required. When was the sermon?',
            validation: Rule => Rule.required(),
        },
        {
            name: 'speaker',
            title: 'Speaker',
            type: 'reference',
            to: [{ type: 'person' }],
        },
        {
            name: 'series',
            title: 'Series',
            type: 'reference',
            to: [{ type: 'series' }],
            description: 'Which series is this part of',
        },
        {
            name: 'video',
            title: 'Video',
            type: 'youtube',
            description: 'Link to the YouTube video',
        },
        {
            name: 'audio',
            title: 'Podcast URL',
            type: 'string',
            description:
                'Link to the podcast URL (e.g. https://spreaker.com/blahblahblah',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'series.artwork',
            subtitle: 'series.title',
        },
    },
    orderings: [
        {
            title: 'Date',
            name: 'startDateDesc',
            by: [{ field: 'date', direction: 'desc' }],
        },
    ],
};
