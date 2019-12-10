export default {
    title: 'Link',
    name: 'blockLink',
    type: 'object',
    fields: [
        {
            title: 'Link text',
            name: 'text',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            title: 'Link address',
            name: 'href',
            type: 'internalLink',
            validation: Rule => Rule.required(),
        },
        {
            title: 'Link type',
            name: 'type',
            type: 'string',
            options: {
                list: [
                    { title: 'Standard', value: 'standard' },
                    { title: 'Button', value: 'button' },
                    { title: 'Inverted Button', value: 'invertedButton' },
                ],
            },
            validation: Rule => Rule.required(),
        },
    ],
};
