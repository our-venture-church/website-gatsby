import icon from 'react-icons/lib/ti/document';

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
    ],
    preview: {
        select: { title: 'welcome.title' },
    },
};
