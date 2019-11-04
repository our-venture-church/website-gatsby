import { MdPeople as icon } from 'react-icons/md';

export default {
    name: 'staffPage',
    title: 'Staff Page',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'leadTeam',
            type: 'array',
            ttile: 'Lead Team',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'person' }],
                },
            ],
        },
        {
            name: 'campusPastors',
            type: 'array',
            ttile: 'Campus Pastors',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'person' }],
                },
            ],
        },
        {
            name: 'staff',
            type: 'array',
            ttile: 'Staff',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'person' }],
                },
            ],
        },
    ],
    preview: {
        select: { title: 'title' },
    },
};
