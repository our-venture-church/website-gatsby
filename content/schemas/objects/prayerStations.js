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
        },
        {
            name: 'scripture',
            type: 'scripture',
            title: 'Scripture',
        },
        {
            name: 'content',
            type: 'richText',
            title: 'Story',
            validation: Rule => Rule.required(),
        },
    ],
};
