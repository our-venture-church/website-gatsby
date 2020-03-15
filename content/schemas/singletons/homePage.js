import { FaHome as icon } from 'react-icons/fa';

export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    icon,
    fields: [
        {
            name: 'customHero',
            type: 'heroBlock',
            title: 'Custom Hero Image',
        },
        {
            name: 'welcome',
            type: 'titleMessage',
            title: 'Welcome',
        },
        {
            name: 'events',
            type: 'array',
            title: 'Events',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'event' }],
                },
            ],
        },
        {
            name: 'liveStream',
            type: 'string',
            title: 'Live Stream Text',
            description: "On Sunday's the home page upsells the live stream.",
        },
    ],
    preview: {
        select: { title: 'welcome.title' },
    },
};
