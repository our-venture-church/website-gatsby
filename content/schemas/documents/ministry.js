export default {
    name: 'ministry',
    title: 'ministry',
    type: 'document',
    fields: [
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
            type: 'array',
            of: [{ type: 'person' }],
            description: 'Who leads this ministry?',
        },
        {
            name: 'contactEmail',
            title: 'Contact email address',
            type: 'string',
            description: 'Who can be contacted for more information?',
        },
        {
            name: 'overview',
            title: 'Overview',
            type: 'blockContent',
        },
    ],
    preview: {
        select: { title: 'title', media: 'artwork' || 'series.artwork', subtitle: 'series.title' },
    },
};
