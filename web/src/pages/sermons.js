import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PageIntro from '../components/PageIntro';
import SEO from '../components/seo';
import { getLayoutTransitionFor } from '../utils/styles';

const StyledCampusList = styled.ul`
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    padding-left: 1rem;
    padding-right: 1rem;

    ${getLayoutTransitionFor('padding')}

    @media (min-width: 500px) {
        padding-left: 2rem;
        padding-right: 2rem;
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
                    startDate
                    slug {
                        current
                    }
                    endDate
                    _rawDescription
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

            <StyledCampusList>
                {series.map(node => {
                    return <li key={node.id}>{node.title}</li>;
                })}
            </StyledCampusList>
        </Layout>
    );
};

SermonsPage.propTypes = {};

export default SermonsPage;
