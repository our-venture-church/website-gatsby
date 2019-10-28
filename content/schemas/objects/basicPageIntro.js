export default {
    title: 'Page Intro',
    name: 'basicPageIntro',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required(),
        },
        {
            name: 'seoDescription',
            type: 'seoDescription',
            title: 'SEO Description',
        },
    ],
};
