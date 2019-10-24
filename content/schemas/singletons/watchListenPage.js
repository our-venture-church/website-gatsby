import icon from 'react-icons/lib/ti/document';

export default {
    name: 'watchListenPage',
    title: 'Watch & Listen Page',
    type: 'document',
    icon,
    fields: [
        {
            name: 'pageIntro',
            title: 'Page Intro',
            type: 'pageIntro',
            validation: Rule => Rule.required(),
        },
    ],
    preview: {
        select: { title: 'pageIntro.title' },
    },
};
