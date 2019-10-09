export default {
    name: 'campus',
    title: 'Campus',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'E.g.: Central, Everett, Mill Creek, etc.',
        },
        {
            name: 'published',
            title: 'Published',
            type: 'boolean',
            description: 'Set to published when this campus should be visible on a the website',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'geopoint',
            description: 'Where will the screening take place?',
        },
        {
            name: 'serviceTimes',
            title: 'Service Times',
            type: 'string',
            description: 'When does the event start?',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'capusPastor',
            title: 'Campus Pastor',
            type: 'reference',
            to: [{ type: 'person' }],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
    },
};
