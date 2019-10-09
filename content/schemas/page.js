export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Title of the page',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
    ],
};
