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
        // {
        //     name: 'mainNav',
        //     title: 'Main Navigation',
        //     type: 'array',
        //     of: [
        //         { type: 'reference', name: 'ref1', to: { type: 'homePage' } },
        //         { type: 'reference', name: 'ref2', to: { type: 'page' } },
        //     ],
        // },
    ],
};
