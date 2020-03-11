export default {
    title: 'Update',
    name: 'update',
    type: 'object',
    fields: [
        {
            name: 'date',
            type: 'date',
            title: 'Date',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'text',
            type: 'text',
            title: 'Text',
            validation: Rule => Rule.required(),
        },
    ],
};
