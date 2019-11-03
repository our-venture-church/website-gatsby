import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import BasicPageIntro from '../components/BasicPageIntro';
import SEO from '../components/seo';
import { getLayoutTransitionFor } from '../utils/styles';
import Series from '../components/Series';
import colors from '../theme/tokens/colors';

const StyledTopSection = styled.div`
    position: relative;
    > a {
        background: ${colors.ventureYellow};
        border: 1px solid ${colors.ventureYellow};
        border-radius: 3px;
        color: ${colors.charcoalBlack};
        display: inline-block;
        font-size: 0.75rem;
        padding: 0.4em 0.65em;
        text-align: center;
        text-decoration: none;

        &:hover,
        &:focus {
            background-color: ${colors.charcoalBlack};
            border-color: ${colors.ventureYellow};
            color: ${colors.ventureYellow};
        }

        position: absolute;
        right: 16px;
        top: 9px;

        @media (min-width: 500px) {
            right: 32px;
            top: 25px;
        }
    }
`;

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
            sanitySiteSettings {
                socialLinks {
                    url
                    title
                    text
                }
            }

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
    const facebookLink = data.sanitySiteSettings.socialLinks.filter(
        item => item.title === 'Facebook'
    )[0];

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />

            <StyledTopSection>
                <BasicPageIntro title={title} />
                <a href={facebookLink.url}>Stream Service</a>
            </StyledTopSection>

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
