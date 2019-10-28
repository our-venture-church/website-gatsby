import { MdInsertLink as icon } from 'react-icons/md';

export default {
    title: 'Social Media Link',
    name: 'socialMediaLink',
    type: 'object',
    icon,
    fields: [
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Instagram', value: 'instagram' },
                    { title: 'Facebook', value: 'facebook' },
                    { title: 'Other', value: 'other' },
                ],
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'url',
            title: 'URL',
            type: 'string',
            validation: Rule => Rule.required(),
        },
    ],
};
