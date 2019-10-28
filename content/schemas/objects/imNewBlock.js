export default {
    title: 'Blocks',
    name: 'imNewBlock',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required(),
        },
        {
            name: 'text',
            type: 'richText',
            title: 'Text',
            validation: Rule => Rule.required(),
        },
        {
            name: 'link',
            type: 'internalLinkWithText',
            title: 'Link (Optional)',
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
