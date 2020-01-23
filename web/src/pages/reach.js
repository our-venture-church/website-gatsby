import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';
import styled from 'styled-components';
import { getDefaultPadding } from '../utils/styles';
import colors from '../theme/tokens/colors';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';

const getMobileBackgroundImageStyles = url => `
    background-image: url('${url}')
`;

const getDesktopBackgroundImageStyles = url => `
    @media (min-width: 820px) {
        background-image: url('${url}')
    }
`;

const StyledIntroBlock = styled.div`
    ${getDefaultPadding()}
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-bottom: 1px solid ${colors.ventureYellow};
    padding-bottom: 4rem;
    padding-top: 3rem;

    ${props =>
        props.mobileImage && getMobileBackgroundImageStyles(props.mobileImage)}

    ${props =>
        props.desktopImage &&
        getDesktopBackgroundImageStyles(props.desktopImage)}
`;

const ReachPage = props => {
    const data = useStaticQuery(graphql`
        query ReachPageQuery {
            sanityReachPage {
                title
                seoDescription
                _rawContent
            }
        }
    `);

    const { title, seoDescription, _rawContent } = data.sanityReachPage;

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />
            <StyledIntroBlock>
                <h1>{title}</h1>
            </StyledIntroBlock>
            <NarrowPageWrapper includePadding={true}>
                <BlockContent blocks={_rawContent} />
            </NarrowPageWrapper>
        </Layout>
    );
};

ReachPage.propTypes = {};

export default ReachPage;
