import { MdLiveTv as icon } from 'react-icons/md';

export default {
    name: 'liveStreamPage',
    title: 'Live Stream Page',
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
            name: 'welcome',
            title: 'Welcome',
            type: 'richText',
        },
        {
            name: 'facebookStreamingLink',
            title: 'Facebook Streaming Link',
            type: 'string',
        },
        {
            name: 'youtubeStreamingLink',
            title: 'YouTube Streaming Link',
            type: 'string',
        },
    ],
    preview: {
        select: { title: 'pageIntro.title' },
    },
};
