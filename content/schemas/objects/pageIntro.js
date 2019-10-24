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
            type: 'text',
            title: 'SEO Description',
            description:
                "Optional: 1 or 2 sentences shown on Google's search page.",
        },
    ],
};
