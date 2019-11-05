import { FaPrayingHands as icon } from 'react-icons/fa';

export default {
    name: 'ministry',
    title: 'Ministry',
    type: 'document',
    icon,
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
            name: 'phone',
            title: 'Phone number',
            type: 'phone',
            description: 'e.g. (425) 485-3085',
        },
        {
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [{ type: 'socialMediaLink' }],
        },
    ],
};
