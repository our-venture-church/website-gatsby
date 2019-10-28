import { TiDocument as icon } from 'react-icons/ti';

export default {
    name: 'imNewPage',
    title: "I'm New Page",
    type: 'document',
    icon,
    fields: [
        {
            name: 'pageIntro',
            title: 'Page Intro',
            type: 'pageIntro',
            validation: Rule => Rule.required(),
        },
        {
            name: 'blocks',
            title: 'Content Blocks',
            type: 'array',
            of: [{ type: 'imNewBlock' }],
        },
    ],
    preview: {
        select: { title: 'pageIntro.title' },
    },
};
