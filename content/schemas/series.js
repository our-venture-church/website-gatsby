import icon from 'react-icons/lib/io/ios-browsers';

export default {
    name: 'series',
    title: 'Sermon Series',
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
            name: 'artwork',
            title: 'Artwork',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
    preview: {
        select: { title: 'title', media: 'image' },
    },
};
