export default {
    name: 'group',
    title: 'Group',
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
            name: 'location',
            title: 'Location',
            type: 'geopoint',
            description: 'Where will the group meet?',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
    },
};
