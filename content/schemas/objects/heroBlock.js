export default {
    title: 'Hero Block',
    name: 'heroBlock',
    type: 'object',
    fields: [
        {
            name: 'text',
            type: 'string',
            title: 'Texr',
        },
        {
            name: 'link',
            type: 'string',
            title: 'Link',
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
};
