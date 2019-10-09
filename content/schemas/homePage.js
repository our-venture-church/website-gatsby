import icon from 'react-icons/lib/ti/document';

export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    icon,
    fields: [
        {
            name: 'heroContentType',
            title: '',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Current Sermon Series',
                        value: 'currentSeries',
                        default: true,
                    },
                    { title: 'Service Times', value: 'serviceTimes' },
                    { title: 'Custom', value: 'custom' },
                ],
                layout: 'radio',
            },
        },
        {
            name: 'heroCustomText',
            type: 'text',
            title: 'Hero Text',
        },
        {
            name: 'heroCustomImage',
            type: 'image',
            title: 'Hero image',
        },
        {
            name: 'heroCustomLink',
            type: 'string',
            title: 'Hero Link',
        },
        {
            name: 'aboutText',
            type: 'string',
            title: 'About Text',
        },
        {
            name: 'aboutImage',
            type: 'image',
            title: 'About image',
        },
    ],
};
