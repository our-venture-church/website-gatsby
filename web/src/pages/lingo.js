import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';

const LingoPage = props => {
    const data = useStaticQuery(graphql`
        query LingoPageQuery {
            sanityLingoPage {
                title
                seoDescription
                _rawBlurb
                dictionary {
                    definition
                    term
                }
            }
        }
    `);

    const {
        title,
        seoDescription,
        _rawBlurb,
        dictionary,
    } = data.sanityLingoPage;

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />
            <NarrowPageWrapper includePadding={true}>
                <h1>{title}</h1>
                <BlockContent blocks={_rawBlurb} />
                <dl>
                    {dictionary.map(item => (
                        <React.Fragment>
                            <dt>{item.term}</dt>
                            <dd>{item.definition}</dd>
                        </React.Fragment>
                    ))}
                </dl>
            </NarrowPageWrapper>
        </Layout>
    );
};

LingoPage.propTypes = {};

export default LingoPage;
