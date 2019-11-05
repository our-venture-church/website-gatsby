export default {
    title: 'Banner Image',
    name: 'bannerImage',
    type: 'object',
    fields: [
        {
            name: 'desktopSize',
            type: 'image',
            title: 'Desktop-sized image',
            options: {
                hotspot: true,
            },
            description: 'This image will be cropped to be short and wide',
        },
        {
            name: 'mobileSize',
            type: 'image',
            title: 'Mobile-sized Image',
            options: {
                hotspot: true,
            },
            description:
                'This image will be cropped to be more like a regular photograph',
        },
    ],
};
