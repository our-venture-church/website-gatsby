import icon from 'react-icons/lib/ti/document';

export default {
    name: 'whoWeArePage',
    title: 'Who We Are Page',
    type: 'document',
    icon,
    fields: [
        {
            name: 'heroType',
            title: 'What type of hero image should be displayed',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Current Sermon Series',
                        value: 'currentSeries',
                        default: true,
                    },
                    { title: 'Service Times', value: 'serviceTimes' },
                    { title: 'Custom (Use fields below)', value: 'custom' },
                ],
                layout: 'radio',
            },
        },
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
    ],
    preview: {
        select: { title: 'welcome.title' },
    },
};
