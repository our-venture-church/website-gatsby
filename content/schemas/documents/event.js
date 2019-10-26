import { Calendar as icon } from 'react-icons/ti';

export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'E.g.: Golf Tournament',
        },
        {
            name: 'published',
            title: 'Published',
            type: 'boolean',
            description:
                'Set to published when this event should be visible on a the website',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'geopoint',
            description: 'Where will the screening take place?',
        },
        {
            name: 'beginAt',
            title: 'Starts at',
            type: 'datetime',
            description: 'When does the event start?',
            options: {
                dateFormat: 'dddd, MMMM Do YYYY',
                timeFormat: 'h:mm A',
            },
        },
        {
            name: 'endAt',
            title: 'Ends at',
            type: 'datetime',
            description: 'When does the event end?',
            options: {
                dateFormat: 'dddd, MMMM Do YYYY',
                timeFormat: 'h:mm A',
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
            name: 'description',
            title: 'Description',
            type: 'richText',
        },
        {
            name: 'link',
            title: 'Link for more info',
            type: 'internalLink',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
    },
};
