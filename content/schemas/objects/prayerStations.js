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
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100,
            },
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
