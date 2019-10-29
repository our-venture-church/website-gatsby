import { FaPray as icon } from 'react-icons/fa';

export default {
    name: 'prayerVenture',
    title: 'Prayer Venture',
    type: 'document',
    icon,
    fields: [
        {
            name: 'intro',
            title: 'Intro',
            type: 'basicPageIntro',
        },
        {
            name: 'blurb',
            title: 'Intro Blurb',
            type: 'richText',
        },
        {
            name: 'stations',
            title: 'Stations',
            type: 'array',
            of: [{ type: 'prayerStations' }],
        },
    ],
    preview: {
        select: { title: 'intro.title' },
    },
};
