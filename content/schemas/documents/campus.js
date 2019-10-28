import { TiLocation as icon } from 'react-icons/ti';

export default {
    name: 'campus',
    title: 'Campus',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'E.g.: Central, Everett, Mill Creek, etc.',
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description:
                'Required. This is used to build the URL for this campus',
            options: {
                source: 'title',
                maxLength: 100,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'published',
            title: 'Published',
            type: 'boolean',
            description:
                'Set to published when this campus should be visible on a the website',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'location',
        },
        {
            name: 'serviceTimes',
            title: 'Service Times',
            type: 'string',
            description: 'When does the event start?',
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
            name: 'campusPastor',
            title: 'Campus Pastor',
            type: 'reference',
            to: [{ type: 'person' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
    },
};
