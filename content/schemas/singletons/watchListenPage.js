import { TiDocument as icon } from 'react-icons/ti';

export default {
    name: 'watchListenPage',
    title: 'Watch & Listen Page',
    type: 'document',
    icon,
    fields: [
        {
            name: 'pageIntro',
            title: 'Page Intro',
            type: 'basicPageIntro',
            validation: Rule => Rule.required(),
        },
    ],
    preview: {
        select: { title: 'pageIntro.title' },
    },
};
