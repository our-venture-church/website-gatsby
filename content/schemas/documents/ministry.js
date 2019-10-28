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
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'overview',
            title: 'Overview',
            type: 'blockContent',
        },
        {
            name: 'leader',
            title: 'Leader',
            type: 'reference',
            to: [{ type: 'person' }],
            description: 'Who leads this ministry?',
        },
        {
            name: 'email',
            title: 'Email Address',
            type: 'email',
        },
        {
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [{ type: 'socialMediaLink' }],
        },
    ],
};
