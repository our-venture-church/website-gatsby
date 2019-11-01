import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';
import Layout from '../components/layout';
import LinkAsButton from '../components/LinkAsButton';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';
import { getDefaultPadding } from '../utils/styles';

const PadMe = styled.div`
    padding-top: 2rem;
    ${getDefaultPadding};
`;

const StyledYear = styled.span`
    float: right;
    font-size: 0.75em;
    font-weight: normal;
`;

const StyledNavList = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0;
`;

const StyledNavItem = styled.li`
    list-style: none;
`;

const prayerStationTemplate = ({ pageContext }) => {
    const { title, year, scripture, content, nextPage, prevPage } = pageContext;

    const prayerIndexLink = {
        path: '/prayer',
        title: 'Intro',
    };
    const nextPageLink = nextPage || prayerIndexLink;
    const prevPageLink = prevPage || prayerIndexLink;

    return (
        <Layout>
            <SEO
                title={`${title}`}
                description={`${title} station on the Venture prayer journey.`}
            />
            <NarrowPageWrapper>
                <PadMe>
                    <h1>
                        {title}
                        {year && <StyledYear> {year}</StyledYear>}
                    </h1>

                    <div>
                        {scripture && (
                            <p>
                                <b>{scripture.reference}</b> {scripture.text}
                            </p>
                        )}

                        <BlockContent blocks={content} />
                    </div>
                    <StyledNavList>
                        <StyledNavItem>
                            <LinkAsButton to={prevPageLink.path}>
                                {prevPageLink.title}
                            </LinkAsButton>
                        </StyledNavItem>
                        <StyledNavItem>
                            <LinkAsButton to={nextPageLink.path}>
                                {nextPageLink.title}
                            </LinkAsButton>
                        </StyledNavItem>
                    </StyledNavList>
                </PadMe>
            </NarrowPageWrapper>
        </Layout>
    );
};

export default prayerStationTemplate;
