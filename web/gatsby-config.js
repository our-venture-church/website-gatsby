require('dotenv').config();
// TODO make this work
// const {
//     api: { projectId, dataset },
// } = requireConfig('../content/sanity.json');
const projectId = '3deuluc8';
const dataset = 'prod';

module.exports = {
    siteMetadata: {
        navigation: [
            {
                text: "I'm New",
                href: '/im-new',
            },
            {
                text: 'Locations',
                href: '/locations',
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
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId,
                dataset,
                // To enable preview of drafts, copy .env-example into .env,
                // and add a token with read permissions
                token: process.env.SANITY_TOKEN,
                watchMode: true,
                overlayDrafts: true,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
