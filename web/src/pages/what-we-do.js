import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const WhatWeDoPage = props => {
    const data = useStaticQuery(graphql`
        query WhatWeDoPageQuery {
            sanityWhatWeDoPage {
                title
                seoDescription
                blurb
                highlightedMinistries {
                    ministry {
                        _id
                        name
                        slug {
                            current
                        }
                    }
                    blurb
                    image {
                        asset {
                            _id
                        }
                    }
                }
            }
            allSanityMinistry {
                nodes {
                    slug {
                        current
                    }
                    name
                    _id
                }
            }
        }
    `);

    const {
        title,
        seoDescription,
        blurb,
        highlightedMinistries,
    } = data.sanityWhatWeDoPage;
    const ministries =
        data && data.allSanityMinistry && data.allSanityMinistry.nodes;

    const highlightedMinistryIds = highlightedMinistries.map(
        entry => entry.ministry._id
    );

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />
            <h1>{title}</h1>
            <p>{blurb}</p>
            {highlightedMinistries && (
                <ul>
                    {highlightedMinistries.map(highlightedMinistry => (
                        <li key={highlightedMinistry.ministry._id}>
                            <h2>
                                <Link
                                    to={`/what-we-do/${highlightedMinistry.ministry.slug.current}`}
                                >
                                    {highlightedMinistry.ministry.name}
                                </Link>
                            </h2>
                            <p>{highlightedMinistry.blurb}</p>
                            {highlightedMinistry.image.asset._id}
                        </li>
                    ))}
                </ul>
            )}
            <h2>Other Ministries</h2>
            {ministries && (
                <ul>
                    {ministries
                        .filter(
                            ministry =>
                                !highlightedMinistryIds.includes(ministry._id)
                        )
                        .map(ministry => (
                            <li key={ministry._key}>
                                <Link
                                    to={`/what-we-do/${ministry.slug.current}`}
                                >
                                    {ministry.name}
                                </Link>
                            </li>
                        ))}
                </ul>
            )}
        </Layout>
    );
};

WhatWeDoPage.propTypes = {};

export default WhatWeDoPage;
