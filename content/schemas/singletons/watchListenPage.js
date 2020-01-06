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
        {
            name: 'appleMusicLink',
            tiyle: 'Apple Music Link',
            type: 'string',
        },
        {
            name: 'spotifyLink',
            tiyle: 'Spotify Link',
            type: 'string',
        },
    ],
    preview: {
        select: { title: 'pageIntro.title' },
    },
};
