export default {
    title: 'Internal Link with Text',
    name: 'internalLinkWithText',
    type: 'object',
    fields: [
        {
            name: 'linkText',
            type: 'string',
            title: 'Text',
            validation: Rule => Rule.required(),
        },
        {
            name: 'linkUrl',
            type: 'internalLink',
            title: 'URL',
            validation: Rule => Rule.required(),
        },
    ],
};
