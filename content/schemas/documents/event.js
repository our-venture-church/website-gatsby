import { TiCalendar as icon } from 'react-icons/ti';

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
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Used to build a link to the event page.',
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
                'Set to published when this event should be visible on a the website',
        },
        {
            name: 'beginAt',
            title: 'Starts at',
            type: 'datetime',
            description: 'When does the event start?',
            options: {
                dateFormat: 'dddd, MMMM Do, YYYY',
                timeFormat: 'h:mm A',
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'allDay',
            title: 'All day event?',
            type: 'boolean',
            description:
                'Check this when the event does not have a start time.',
        },
        {
            name: 'endAt',
            title: 'Ends at',
            type: 'datetime',
            description: 'When does the event end?',
            options: {
                dateFormat: 'dddd, MMMM Do, YYYY',
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
            validation: Rule => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'richText',
            validation: Rule => Rule.required(),
        },
        {
            name: 'link',
            title: 'Link for more info',
            type: 'internalLink',
            description:
                'Use if the link should go somewhere outside the ordinary.',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
    },
};
