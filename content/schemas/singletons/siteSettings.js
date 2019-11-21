import { MdSettings as icon } from 'react-icons/md';

export default {
    name: 'siteSettings',
    title: 'Sitewide Settings',
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
            name: 'email',
            title: 'Contact Email',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Mailing Address',
            type: 'text',
        },
        {
            name: 'mainNav',
            title: 'Main Navigation',
            type: 'array',
            of: [{ type: 'navItem' }],
        },
        {
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [{ type: 'socialLink' }],
        },
        {
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'seoDescription',
        },
    ],
};
