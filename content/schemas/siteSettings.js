import icon from 'react-icons/lib/md/settings';

export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Title of the Site',
        },
        {
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
        },
        {
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [{ type: 'socialLink' }],
        },
    ],
};
