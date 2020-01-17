import { MdInsertLink as icon } from 'react-icons/md';

export default {
    title: 'Tag',
    name: 'tag',
    type: 'object',
    icon,
    fields: [
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Day of the week', value: 'dayOfTheWeek' },
                    { title: 'Kid Friendly', value: 'facebook' },
                    { title: 'Other', value: 'other' },
                ],
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'url',
            title: 'URL or Email address',
            type: 'string',
            validation: Rule => Rule.required(),
        },
    ],
};
