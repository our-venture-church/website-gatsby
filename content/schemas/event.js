export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'E.g.: Golf Tournament',
        },
        {
            name: 'published',
            title: 'Published',
            type: 'boolean',
            description: 'Set to published when this event should be visible on a the website',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'geopoint',
            description: 'Where will the screening take place?',
        },
        {
            name: 'beginAt',
            title: 'Starts at',
            type: 'datetime',
            description: 'When does the event start?',
        },
        {
            name: 'endAt',
            title: 'Ends at',
            type: 'datetime',
            description: 'When does the event end?',
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
