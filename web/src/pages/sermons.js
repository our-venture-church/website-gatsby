import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PageIntro from '../components/PageIntro';
import SEO from '../components/seo';
import { getLayoutTransitionFor } from '../utils/styles';
import Series from '../components/Series';

const StyledSeriesList = styled.ul`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;

    ${getLayoutTransitionFor('padding')}

    @media (min-width: 500px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    > li {
    }
`;

const SermonsPage = props => {
    const data = useStaticQuery(graphql`
        query SermonsPageQuery {
            sanityWatchListenPage {
                pageIntro {
                    title
                    tag
                    seoDescription
                }
            }
            allSanitySeries(
                sort: { fields: startDate, order: DESC }
                limit: 6
            ) {
                nodes {
                    id
                    title
                    startDate(formatString: "MMM YYYY")
                    endDate(formatString: "MMM YYYY")
                    slug {
                        current
                    }
                    artwork {
                        asset {
                            _id
                        }
                    }
                }
            }
        }
    `);

    const { nodes: series } = data.allSanitySeries;
    const { title, tag, seoDescription } = data.sanityWatchListenPage.pageIntro;

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />

            <PageIntro title={title} tag={tag} />

            <StyledSeriesList>
                {series.map(node => {
                    return (
                        <li key={node.id}>
                            <Series {...node} />
                        </li>
                    );
                })}
            </StyledSeriesList>
        </Layout>
    );
};

SermonsPage.propTypes = {};

export default SermonsPage;
