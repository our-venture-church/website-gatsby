import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BasicPageIntro from '../components/BasicPageIntro';
import BlockContent from '../components/block-content';
import LinkAsButton from '../components/LinkAsButton';
import { getDefaultPadding } from '../utils/styles';

const StyledContainer = styled.div`
    ${getDefaultPadding()}
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 1rem;

    @media (min-width: 839px) {
        grid-gap: 4rem;
    }
`;

const StyledStationList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;

    li {
        padding: 0 1rem 0 0;
    }
`;

const Prayer = props => {
    const data = useStaticQuery(graphql`
        query PrayerQuery {
            sanityPrayerVenture {
                stations {
                    _key
                    title
                    slug {
                        current
                    }
                }
                _rawBlurb
                intro {
                    title
                    seoDescription
                }
            }
        }
    `);

    const { stations, intro, _rawBlurb } = data.sanityPrayerVenture;

    return (
        <Layout>
            <SEO title="Prayer" description={intro.seoDescription} />
            <BasicPageIntro title={intro.title} />
            <StyledContainer>
                <div>
                    <BlockContent blocks={_rawBlurb} />
                </div>
                {stations && (
                    <div>
                        <p>
                            <LinkAsButton
                                to={`/prayer/station/${stations[0].slug.current}`}
                                aria-label="Get started on the Prayer Journey"
                                fullSize={true}
                            >
                                Get started
                            </LinkAsButton>
                        </p>
                        <div>
                            <b>Or checkout all the stations:</b>
                            <br />
                            <StyledStationList>
                                {stations.map(station => (
                                    <li key={station._key}>
                                        <Link
                                            to={`/prayer/station/${station.slug.current}`}
                                        >
                                            {station.title}
                                        </Link>
                                    </li>
                                ))}
                            </StyledStationList>
                        </div>
                    </div>
                )}
            </StyledContainer>
        </Layout>
    );
};

Prayer.propTypes = {};

export default Prayer;
