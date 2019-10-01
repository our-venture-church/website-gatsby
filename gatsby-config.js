module.exports = {
    siteMetadata: {
        title: `Venture Church - formerly known as Canyon Creek Church`,
        description: `TODO Add a description.`,
        author: `Jim Arment`,
        contactInfo: {
            phone: '(425) 582-2366',
            social: [
                {
                    title: 'Facebook',
                    url: 'http://facebook.com',
                    text: 'Like us on Facebook',
                },
                {
                    title: 'Instagram',
                    url: 'http://instagram.com',
                    text: 'Follow us on Instagram',
                },
                {
                    title: 'YouTube',
                    url: 'http://youtube.com',
                    text: 'Subscribe to our YouTube channel',
                },
            ],
        },
        homepage: {
            hero: {
                image: 'blah.jpg',
                text: 'Sunday Services: 9am and 10:30am',
                type: 'CURRENT_SERIES', // CURRENT_SERIES | SERVICE_TIMES
            },
            welcomeMessage: {
                title: 'Welcome to Venture Church',
                text:
                    'We are a diverse community, gathered across many locations, made up of all kinds of cultures, races and socio-economic backgrounds. But we are united in what counts: We are a family of believers who rally around the mission of Jesus Christ, participate in community, and lead lives of generosity that make a difference.',
            },
            announcements: [
                {
                    title: 'Current series: Becoming Venture',
                    text: `We're in the middle of our series "Becoming Venture". Catch up on the Podcast.`,
                    link: 'http://ov.c/series',
                },
                {
                    title: 'Get your brick',
                    text: `Today's the last day to buy your brick.`,
                    link: 'http://ov.c/new-building',
                },
            ],
            events: [
                {
                    title: `Owner's meeting`,
                    date: 'August 25th, 2019',
                    link: 'http://ov.c/event/slug',
                },
                {
                    title: 'Golf Tournament',
                    date: 'August 31st, 2019',
                    link: 'http://ov.c/event/slug1',
                },
                {
                    title: 'Day at the Lake',
                    date: 'September 7th, 2019',
                    link: 'http://ov.c/event/slug2',
                },
            ],
        },
        navigation: [
            {
                text: "I'm New",
                href: '/im-new',
            },
            {
                text: 'Locations',
                href: '/locations',
                subLinks: [
                    {
                        text: 'Mill Creek',
                        href: '/locations/mill-creek',
                    },
                    {
                        text: 'Everett',
                        href: '/locations/everett',
                    },
                    {
                        text: 'Palouse',
                        href: '/locations/palouse',
                    },
                ],
            },
            {
                text: 'Who we are',
                href: '/who-we-are',
                subLinks: [
                    {
                        text: 'Staff',
                        href: '/who-we-are/staff',
                    },
                    {
                        text: 'REACH Initiative',
                        href: '/who-we-are/reach',
                    },
                    {
                        text: 'History',
                        href: '/who-we-are/history',
                    },
                    {
                        text: 'Beliefs',
                        href: '/who-we-are/beliefs',
                    },
                ],
            },
            {
                text: 'What we do',
                href: '/what-we-do',
                subLinks: [
                    {
                        text: 'Adult Ministry',
                        href: '/what-we-do/something',
                    },
                    {
                        text: 'Celebrate Recovery',
                        href: '/what-we-do/something',
                    },
                    {
                        text: 'Counseling',
                        href: '/what-we-do/something',
                    },
                    {
                        text: 'Groups',
                        href: '/what-we-do/something',
                    },
                    {
                        text: 'Her Choice to Heal',
                        href: '/what-we-do/something',
                    },
                    {
                        text: 'Kids',
                        href: '/what-we-do/something',
                    },
                    {
                        text: 'Marriage Ministry',
                        href: '/what-we-do/something',
                    },
                    {
                        text: 'Men’s Ministry',
                        href: '/what-we-do/something',
                    },
                    {
                        text: 'MOPS',
                        href: '/what-we-do/something',
                    },
                    {
                        text: 'School of Ministry & Leadership',
                        href: '/what-we-do/something',
                    },
                    {
                        text: 'Seattle Singles',
                        href: '/what-we-do/something',
                    },
                    {
                        text: 'Women’s Ministry',
                        href: '/what-we-do/something',
                    },
                    {
                        text: 'Worship Ministry',
                        href: '/what-we-do/something',
                    },
                    {
                        text: 'Young Adults',
                        href: '/what-we-do/something',
                    },
                    {
                        text: 'Youth',
                        href: '/what-we-do/something',
                    },
                ],
            },
            {
                text: 'Watch & Listen',
                href: '/sermons',
            },
            {
                text: 'Give',
                href: '/give',
            },
        ],
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#fde164`,
                theme_color: `#fde164`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-styled-components`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
