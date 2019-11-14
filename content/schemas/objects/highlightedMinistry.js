export default {
    title: 'Highlighted Ministry',
    name: 'highlightedMinistry',
    type: 'object',
    fields: [
        {
            name: 'ministry',
            type: 'reference',
            title: 'Choose a Ministry',
            to: [{ type: 'ministry' }],
        },
        {
            name: 'blurb',
            type: 'text',
            title: 'Short Blurb',
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
            title: 'ministry.name',
            media: 'image',
        },
    },
};
