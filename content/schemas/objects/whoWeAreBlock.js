export default {
    title: 'Blocks',
    name: 'whoWeAreBlock',
    type: 'object',
    fields: [
        {
            title: 'Section title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            title: 'Text',
            name: 'text',
            type: 'text',
            validation: Rule => Rule.required(),
        },
        {
            title: 'Link',
            name: 'link',
            type: 'blockLink',
        },
    ],
};
