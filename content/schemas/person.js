import icon from 'react-icons/lib/md/person';

export default {
    name: 'person',
    title: 'Person',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Please use "Firstname Lastname" format',
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
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'personType',
            title: 'What role does this person serve in?',
            description: 'Select all that apply',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Pastor', value: 'pastor' },
                    { title: 'Staff', value: 'staff' },
                    { title: 'Lead Team Member', value: 'leadTeam' },
                    { title: 'Volunteer', value: 'volunteer' },
                ],
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email Address',
            type: 'email',
        },
    ],
    preview: {
        select: { title: 'name', media: 'image', subtitle: 'title' },
    },
};
