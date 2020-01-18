import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';

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
            <h1>{title}</h1>
            <BlockContent blocks={_rawBlurb} />
            {contentBlock.map(({ text, title, link }) => (
                <div>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <Link to={link.href}>{link.text}</Link>
                </div>
            ))}
        </Layout>
    );
};

WhoWeArePage.propTypes = {};

export default WhoWeArePage;
