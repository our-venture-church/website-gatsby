export default {
    title: 'Prayer Stations',
    name: 'prayerStations',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required(),
        },
        {
            name: 'year',
            type: 'string',
            title: 'Year',
            validation: Rule => Rule.required(),
        },
        {
            name: 'scripture',
            type: 'scripture',
            title: 'Scripture',
            validation: Rule => Rule.required(),
        },
        {
            name: 'content',
            type: 'richText',
            title: 'Content',
            validation: Rule => Rule.required(),
        },
    ],
};
