import { MdPerson as icon } from 'react-icons/md';

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
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'honorific',
            title: 'Name Prefix',
            type: 'string',
            description: 'Displayed with the person\'s name. e.g. Pastor, Dr., Knight, etc.'
        },
        {
            name: 'title',
            title: 'Position',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'email',
            title: 'Email Address',
            type: 'email',
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
                    { title: 'Guest Speaker', value: 'guestSpeaker' },
                    { title: 'Former Staff', value: 'formerStaff' },
                ],
            },
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'blockContent',
        },
        {
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [{ type: 'socialMediaLink' }],
        },
    ],
    preview: {
        select: { title: 'name', media: 'image', subtitle: 'title' },
    },
};
