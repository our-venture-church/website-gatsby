import icon from 'react-icons/lib/fa/map-o';

export default {
    name: 'locationsPage',
    title: 'Locations Page',
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
