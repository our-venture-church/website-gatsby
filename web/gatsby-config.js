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
                href: '/staff',
                // subLinks: [
                //     {
                //         text: 'Staff',
                //         href: '/who-we-are/staff',
                //     },
                //     {
                //         text: 'REACH Initiative',
                //         href: '/who-we-are/reach',
                //     },
                //     {
                //         text: 'History',
                //         href: '/who-we-are/history',
                //     },
                //     {
                //         text: 'Beliefs',
                //         href: '/who-we-are/beliefs',
                //     },
                // ],
            },
            {
                text: 'What we do',
                href: '/what-we-do',
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
                background_color: `#ffe534`,
                theme_color: `#ffe534`,
                display: `minimal-ui`,
                icon: `src/images/venture-favicon.png`, // This path is relative to the root of the site.
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
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/markdown-pages`,
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-6542831-3',
            },
        },
        'gatsby-plugin-netlify',
    ],
};
