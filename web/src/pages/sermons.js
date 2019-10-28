import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import BasicPageIntro from '../components/BasicPageIntro';
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
    padding: 0;
    ${getLayoutTransitionFor('padding')}

    @media (min-width: 620px) {
        padding: 0 calc(2rem - 10px);
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
                    seoDescription
                }
            }
            allSanitySeries(
                sort: { fields: startDate, order: DESC }
                limit: 8
                filter: { hide: { ne: true } }
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
    const { title, seoDescription } = data.sanityWatchListenPage.pageIntro;

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />

            <BasicPageIntro title={title} />

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
