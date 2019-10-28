import { TiDocument as icon } from 'react-icons/ti';

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
