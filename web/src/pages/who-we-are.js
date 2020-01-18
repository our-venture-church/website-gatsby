import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';
import PageIntroWithText from '../components/PageIntroWithText';
import MediumPageWrapper from '../layouts/MediumPageWrapper';

const StyledSection = styled.div`
    padding: 2rem;

    h2,
    p {
        margin-bottom: 0.5rem;
    }
`;

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
                {contentBlock.map(({ text, title, link }) => (
                    <StyledSection>
                        <h2>{title}</h2>
                        <p>{text}</p>
                        <Link to={link.href}>{link.text}</Link>
                    </StyledSection>
                ))}
            </MediumPageWrapper>
        </Layout>
    );
};

WhoWeArePage.propTypes = {};

export default WhoWeArePage;
