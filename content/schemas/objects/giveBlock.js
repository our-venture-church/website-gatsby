export default {
    title: 'Blocks',
    name: 'giveBlock',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Sub-Title',
            validation: Rule => Rule.required(),
        },
        {
            name: 'text',
            type: 'richText',
            title: 'Text',
            validation: Rule => Rule.required(),
        },
        {
            name: 'linkText',
            type: 'string',
            title: 'Link Text',
        },
        {
            name: 'quote',
            type: 'text',
            title: 'Quote',
        },
    ],
};
