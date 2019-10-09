import icon from 'react-icons/lib/md/people';

export default {
    name: 'group',
    title: 'Group',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "Mom's Night Out",
        },
        {
            name: 'location',
            title: 'Location',
            type: 'geopoint',
            description: 'Where will the group meet?',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent',
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
            name: 'day',
            title: 'Day of the week',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Sunday', value: 'sun' },
                    { title: 'Monday', value: 'mon' },
                    { title: 'Tuesday', value: 'tue' },
                    { title: 'Wednesday', value: 'wed' },
                    { title: 'Thursday', value: 'thur' },
                    { title: 'Friday', value: 'fri' },
                    { title: 'Saturday', value: 'sat' },
                ],
            },
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
    },
};
