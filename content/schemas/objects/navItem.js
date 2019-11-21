export default {
    title: 'Nav Item',
    name: 'navItem',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'text',
            type: 'string',
            description: 'e.g. What We Do',
            validation: Rule => Rule.required(),
        },
        {
            title: 'Pathname for the link',
            name: 'href',
            type: 'string',
            description: 'e.g. /what-we-do',
            validation: Rule => Rule.required(),
        },
    ],
};
