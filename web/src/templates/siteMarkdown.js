import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';
export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;
    return (
        <Layout>
            <NarrowPageWrapper includeSidePadding includeTopPadding>
                <h1>{frontmatter.title}</h1>
                <p>Last updated on {frontmatter.lastUpdate}</p>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </NarrowPageWrapper>
        </Layout>
    );
}
export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                lastUpdate(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`;
