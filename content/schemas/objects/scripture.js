export default {
    title: 'Scripture',
    name: 'scripture',
    type: 'object',
    fields: [
        {
            name: 'reference',
            type: 'string',
            title: 'Reference',
            description: 'e.g. 1 Corinthians 3:17',
        },
        {
            name: 'text',
            type: 'text',
            title: 'Text',
        },
    ],
};
