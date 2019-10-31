/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createSermonSeriesPages(graphql, actions, reporter) {
    const { createPage } = actions;
    const result = await graphql(`
        {
            allSanitySeries(filter: { slug: { current: { ne: null } } }) {
                edges {
                    node {
                        id
                        title
                        startDate
                        endDate
                        _rawDescription
                        artwork {
                            asset {
                                _id
                            }
                        }
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) throw result.errors;

    const postEdges = (result.data.allSanitySeries || {}).edges || [];

    postEdges.forEach(edge => {
        const { id, slug = {} } = edge.node;
        const path = `/sermon/series/${slug.current}/`;

        reporter.info(`Creating sermon series page: ${path}`);

        createPage({
            path,
            component: require.resolve('./src/templates/sermonSeries.js'),
            context: { id },
        });
    });
}

async function createPersonPages(graphql, actions, reporter) {
    const { createPage } = actions;
    const result = await graphql(`
        {
            allSanityPerson(
                filter: {
                    slug: { current: { ne: null } }
                    personType: { ne: "formerStaff" }
                }
            ) {
                edges {
                    node {
                        id
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) throw result.errors;

    const eventEdges = (result.data.allSanityPerson || {}).edges || [];

    eventEdges.forEach(edge => {
        const id = edge.node.id;
        const slug = edge.node.slug.current;
        const path = `/who-we-are/staff/${slug}/`;

        reporter.info(`Creating staff details page: ${path}`);

        createPage({
            path,
            component: require.resolve('./src/templates/staffDetails.js'),
            context: { id },
        });
    });
}

async function createPrayerStationPages(graphql, actions, reporter) {
    const { createPage } = actions;
    const result = await graphql(`
        {
            sanityPrayerVenture {
                _rawStations
            }
        }
    `);

    if (result.errors) throw result.errors;

    const prayerStations = result.data.sanityPrayerVenture._rawStations || [];

    prayerStations.forEach((station, index) => {
        const slug = station.slug.current;
        const path = `/prayer/station/${slug}/`;
        let nextPage = null;
        let prevPage = null;

        if (index < prayerStations.length - 1) {
            nextPage = {
                path: `/prayer/station/${prayerStations[index + 1].slug.current}`,
                title: prayerStations[index + 1].title,
            };
        }

        if (index > 0) {
            prevPage = {
                path: `/prayer/station/${prayerStations[index - 1].slug.current}`,
                title: prayerStations[index - 1].title,
            };
        }

        reporter.info(`Creating prayer station page: ${path}`);

        createPage({
            path,
            component: require.resolve('./src/templates/prayerStation.js'),
            context: {
                ...station,
                nextPage,
                prevPage,
            },
        });
    });
}

async function createEventPages(graphql, actions, reporter) {
    const { createPage } = actions;
    const result = await graphql(`
        {
            allSanityEvent(
                filter: {
                    slug: { current: { ne: null } }
                    published: { ne: false }
                }
            ) {
                edges {
                    node {
                        id
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) throw result.errors;

    const eventEdges = (result.data.allSanityEvent || {}).edges || [];

    eventEdges.forEach(edge => {
        const id = edge.node.id;
        const slug = edge.node.slug.current;
        const path = `/event/${slug}/`;

        reporter.info(`Creating event details page: ${path}`);

        createPage({
            path,
            component: require.resolve('./src/templates/eventDetails.js'),
            context: { id },
        });
    });
}

async function createGroupPages(graphql, actions, reporter) {
    const { createPage } = actions;
    const result = await graphql(`
        {
            allSanityGroup(
                filter: {
                    slug: { current: { ne: null } }
                    status: { ne: "hidden" }
                }
            ) {
                edges {
                    node {
                        id
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) throw result.errors;

    const groupEdges = (result.data.allSanityGroup || {}).edges || [];

    groupEdges.forEach(edge => {
        const id = edge.node.id;
        const slug = edge.node.slug.current;
        const path = `/groups/join/${slug}/`;

        reporter.info(`Creating group details page: ${path}`);

        createPage({
            path,
            component: require.resolve('./src/templates/groupDetails.js'),
            context: { id },
        });
    });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    await createSermonSeriesPages(graphql, actions, reporter);
    await createPersonPages(graphql, actions, reporter);
    await createPrayerStationPages(graphql, actions, reporter);
    await createEventPages(graphql, actions, reporter);
    await createGroupPages(graphql, actions, reporter);
};
