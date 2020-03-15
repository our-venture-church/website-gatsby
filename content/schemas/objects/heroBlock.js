export default {
    title: 'Hero Block',
    name: 'heroBlock',
    type: 'object',
    fields: [
        {
            name: 'text',
            type: 'text',
            title: 'Text',
            description:
                'If not providing text, please add alt text below for the image.',
        },
        {
            name: 'link',
            type: 'string',
            title: 'Link',
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
            name: 'altText',
            type: 'text',
            title: 'Alt Text',
            description:
                "If not passing text at the top, include text here that describes what is in the image (including any text that's that is visible). This is for people who cannot see the page.",
        },
    ],
};
