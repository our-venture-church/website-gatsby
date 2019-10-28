export default {
    name: 'ministry',
    title: 'Ministry',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'leader',
            title: 'Leader',
            type: 'reference',
            to: [{ type: 'person' }],
            description: 'Who leads this ministry?',
        },
        {
            name: 'overview',
            title: 'Overview',
            type: 'blockContent',
        },
    ],
};
