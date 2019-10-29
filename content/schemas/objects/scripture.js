export default {
    title: 'Scripture',
    name: 'scripture',
    type: 'object',
    fields: [
        {
            name: 'reference',
            type: 'string',
            title: 'Reference',
            description: 'e.g. John 11:35',
        },
        {
            name: 'text',
            type: 'text',
            title: 'Text',
            description: 'Jesus wept.',
        },
    ],
};
