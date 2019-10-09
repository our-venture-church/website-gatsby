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
            description: 'Sermon Title',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            description: 'When was the sermon?',
        },
        {
            name: 'series',
            title: 'Series',
            type: 'reference',
            to: [{ type: 'series' }],
            description: 'Which series is this part of',
        },
        {
            name: 'speaker',
            title: 'Speaker',
            type: 'reference',
            to: [{ type: 'person' }],
        },
        {
            name: 'artwork',
            title: 'Artwork',
            type: 'image',
            options: {
                hotspot: true,
            },
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
