import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';
import PageIntroWithText from '../components/PageIntroWithText';
import MediumPageWrapper from '../layouts/MediumPageWrapper';
import LinkAsButton from '../components/LinkAsButton';

const StyledSection = styled.div`
    padding: 2rem;

    h2,
    p {
        margin-bottom: 0.5rem;
    }
`;

const WhoWeAreSection = ({ text, title, link, index }) => {
    return (
        <StyledSection>
            <h2>{title}</h2>
            <p>{text}</p>
            {index === 1 ? (
                <Link to={link.href}>{link.text}</Link>
            ) : (
                <LinkAsButton to={link.href}>{link.text}</LinkAsButton>
            )}
        </StyledSection>
    );
};

const WhoWeArePage = props => {
    const data = useStaticQuery(graphql`
        query WhoWeArePageQuery {
            sanityWhoWeArePage {
                title
                _rawBlurb
                seoDescription
                contentBlock {
                    text
                    title
                    link {
                        href
                        text
                        type
                    }
                }
            }
        }
    `);

    const {
        title,
        seoDescription,
        _rawBlurb,
        contentBlock,
    } = data.sanityWhoWeArePage;

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />

            <PageIntroWithText title={title}>
                <BlockContent blocks={_rawBlurb} />
            </PageIntroWithText>
            <MediumPageWrapper includeSidePadding={true}>
                {contentBlock.map((block, index) => (
                    <WhoWeAreSection {...block} index={index} />
                ))}
            </MediumPageWrapper>
        </Layout>
    );
};

WhoWeArePage.propTypes = {};

export default WhoWeArePage;
