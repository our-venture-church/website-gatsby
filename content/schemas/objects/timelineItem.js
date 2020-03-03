export default {
    title: 'Timeline Item',
    name: 'timelineItem',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Text',
        },
        {
            name: 'text',
            type: 'text',
            title: 'Text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
};
