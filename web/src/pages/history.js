import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';

const HistoryPage = props => {
    const data = useStaticQuery(graphql`
        query HistoryPageQuery {
            sanityHistoryPage {
                title
                seoDescription
                _rawContent
            }
        }
    `);
    console.log(data);

    const { title, seoDescription, _rawContent } = data.sanityHistoryPage;

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

HistoryPage.propTypes = {};

export default HistoryPage;
