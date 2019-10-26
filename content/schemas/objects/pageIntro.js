export default {
    title: 'Page Intro',
    name: 'pageIntro',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required(),
        },
        {
            name: 'tag',
            type: 'string',
            title: 'Tag',
            validation: Rule => Rule.required(),
        },
        {
            name: 'seoDescription',
            type: 'seoDescription',
            title: 'SEO Description',
        },
    ],
};
