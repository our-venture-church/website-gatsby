export default {
    title: 'Hero Block',
    name: 'heroBlock',
    type: 'object',
    fields: [
        {
            name: 'text',
            type: 'string',
            title: 'Text',
        },
        {
            name: 'textPosition',
            type: 'string',
            title: 'Text Position',
            options: {
                list: [
                    { title: 'Default', value: 'default' },
                    { title: 'Top - Centered', value: 'topCenter' },
                ],
            },
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
