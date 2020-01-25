import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';

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
            <NarrowPageWrapper includePadding={true}>
                <h1>{title}</h1>
                <BlockContent blocks={_rawContent} />
            </NarrowPageWrapper>
        </Layout>
    );
};

ReachPage.propTypes = {};

export default ReachPage;
