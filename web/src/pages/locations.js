import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PageIntro from '../components/PageIntro';
import Campus from '../components/Campus';
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

const LocationsPage = props => {
    const data = useStaticQuery(graphql`
        query LocationsPageQuery {
            sanityLocationsPage {
                pageIntro {
                    title
                    tag
                    seoDescription
                }
            }
            allSanityCampus(
                sort: { fields: _createdAt, order: ASC }
                filter: { published: { eq: true } }
            ) {
                nodes {
                    location {
                        address
                        location {
                            lat
                            lng
                        }
                    }
                    title
                    serviceTimes
                    image {
                        asset {
                            _id
                        }
                    }
                    campusPastor {
                        title
                    }
                }
            }
        }
    `);

    const { nodes: locations } = data.allSanityCampus;
    const { title, tag, seoDescription } = data.sanityLocationsPage.pageIntro;

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />

            <PageIntro title={title} tag={tag} />

            <StyledCampusList>
                {locations.map(node => {
                    return (
                        <li key={node.id}>
                            <Campus {...node} />
                        </li>
                    );
                })}
            </StyledCampusList>
        </Layout>
    );
};

LocationsPage.propTypes = {};

export default LocationsPage;
