export default {
    title: 'Location',
    name: 'location',
    type: 'object',
    fields: [
        {
            name: 'address',
            title: 'Address',
            type: 'text',
            validation: Rule => Rule.required(),
        },
        {
            name: 'location',
            title: 'On the map',
            type: 'geopoint',
            validation: Rule => Rule.required(),
        },
    ],
};
