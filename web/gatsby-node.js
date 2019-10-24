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
            allSanityPerson(filter: { slug: { current: { ne: null } } }) {
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

    const personEdges = (result.data.allSanityPerson || {}).edges || [];

    personEdges.forEach(edge => {
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

// async function createProjectPages(graphql, actions, reporter) {
//     const { createPage } = actions;
//     const result = await graphql(`
//         {
//             allSanityProject(filter: { slug: { current: { ne: null } } }) {
//                 edges {
//                     node {
//                         id
//                         slug {
//                             current
//                         }
//                     }
//                 }
//             }
//         }
//     `);

//     if (result.errors) throw result.errors;

//     const projectEdges = (result.data.allSanityProject || {}).edges || [];

//     projectEdges.forEach(edge => {
//         const id = edge.node.id;
//         const slug = edge.node.slug.current;
//         const path = `/project/${slug}/`;

//         reporter.info(`Creating project page: ${path}`);

//         createPage({
//             path,
//             component: require.resolve('./src/templates/project.js'),
//             context: { id },
//         });
//     });
// }

exports.createPages = async ({ graphql, actions, reporter }) => {
    await createSermonSeriesPages(graphql, actions, reporter);
    await createPersonPages(graphql, actions, reporter);
    // await createProjectPages(graphql, actions, reporter);
};
