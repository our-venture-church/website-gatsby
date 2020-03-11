export default {
    title: 'Hero Block',
    name: 'heroBlock',
    type: 'object',
    fields: [
        {
            name: 'text',
            type: 'text',
            title: 'Text',
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
