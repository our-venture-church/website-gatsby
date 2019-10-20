import icon from 'react-icons/lib/io/ios-browsers';

export default {
    name: 'series',
    title: 'Sermon Series',
    type: 'document',
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
    ],
    preview: {
        select: {
            title: 'title',
            media: 'artwork',
            subtitle: 'startDate',
        },
        // TODO customize the subtitle to have the start and end date
        // prepare(entry) {
        //     return {
        //         title: entry.title,
        //         media: entry.artwork,
        //         subTitle: `${entry.startDate} - ${entry.endDate}`,
        //     };
        // },
    },
};
