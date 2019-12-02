import { TiCalendar as icon } from 'react-icons/ti';
import TimePicker from 'react-time-picker';

const getSubtitle = date => {
    return new Date(date).toLocaleString('default', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
};

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
        // {
        //     name: 'beginTime',
        //     title: 'What time does the event start?',
        //     type: 'string',
        //     inputComponent: TimePicker,
        // },
        // {
        //     name: 'endTime',
        //     title: 'What time does the event end?',
        //     type: 'richDate',
        //     options: {
        //         timeFormat: 'h:mm A',
        //         timeStep: 30,
        //         inputDate: false,
        //     },
        // },
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
            name: 'email',
            title: 'Contact Email',
            type: 'email',
            description: 'A contact email address to be included.',
        },
        {
            name: 'link',
            title: 'Link for more info',
            type: 'internalLink',
            description:
                'Use if the link should go somewhere outside the ordinary.',
        },
    ],
    initialValue: {
        published: true,
    },
    preview: {
        select: {
            title: 'title',
            subtitle: 'beginAt',
            media: 'image',
        },
        prepare(selection) {
            return {
                title: selection.title,
                media: selection.media,
                subtitle: getSubtitle(selection.subtitle),
            };
        },
    },
    orderings: [
        {
            title: 'Date',
            name: 'beginAtDesc',
            by: [{ field: 'beginAt', direction: 'desc' }],
        },
    ],
};
