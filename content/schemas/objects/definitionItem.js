export default {
    title: 'Definition Item',
    name: 'definitionItem',
    type: 'object',
    fields: [
        {
            title: 'Term',
            name: 'term',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            title: 'Definition',
            name: 'definition',
            type: 'text',
            validation: Rule => Rule.required(),
        },
    ],
};
