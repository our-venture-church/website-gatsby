import icon from 'react-icons/lib/io/ios-book';

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
        },
        {
            name: 'audio',
            title: 'Audio',
            type: 'string',
            description: 'The name of the sermon audio file uploaded.',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'artwork' || 'series.artwork',
            subtitle: 'series.title',
        },
    },
};
