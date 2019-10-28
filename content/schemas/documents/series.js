import { IoIosBrowsers as icon } from 'react-icons/io';

const getSubtitle = ({ startDate, endDate }) => {
    const startingDate = new Date(startDate).toLocaleString('default', {
        month: 'short',
        year: 'numeric',
    });
    const endingDate = new Date(endDate).toLocaleString('default', {
        month: 'short',
        year: 'numeric',
    });

    if (startingDate === endingDate) {
        return startingDate;
    }

    return `${startingDate} – ${endingDate}`;
};

export default {
    name: 'series',
    title: 'Sermon Series',
    type: 'document',
    initialValue: () => ({
        hide: false,
        startDate: new Date().toISOString(),
    }),
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Sermon Title',
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description:
                'Required. This is used to build the URL for this sermon series',
            options: {
                source: 'title',
                maxLength: 100,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'hide',
            title: 'Hide this Series',
            type: 'boolean',
            description:
                "Check this box if you'd like to hide this Sermon Series on the site. Maybe it hasn't launched yet.",
        },
        {
            name: 'description',
            title: 'Description',
            type: 'richText',
            validation: Rule => Rule.required(),
        },
        {
            name: 'artwork',
            title: 'Series Artwork',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'startDate',
            title: 'Day the series starts',
            type: 'date',
            options: {
                dateFormat: 'M/D/YYYY',
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'endDate',
            title: 'Day the series ends',
            type: 'date',
            options: {
                dateFormat: 'M/D/YYYY',
            },
            validation: Rule => Rule.required(),
        },
        {
            title: 'SEO Description',
            name: 'seoDescription',
            type: 'seoDescription',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'artwork',
            startDate: 'startDate',
            endDate: 'endDate',
        },
        prepare(selection) {
            return {
                title: selection.title,
                media: selection.media,
                subtitle: getSubtitle(selection),
            };
        },
    },
    orderings: [
        {
            title: 'Start Date',
            name: 'startDateDesc',
            by: [{ field: 'startDate', direction: 'desc' }],
        },
    ],
};
