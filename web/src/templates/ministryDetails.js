import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';
import BlockContent from '../components/block-content';

export const query = graphql`
    query MinistryTemplateQuery($id: String!) {
        sanityMinistry(id: { eq: $id }) {
            id
            name
            email
            _rawOverview
            phone
            socialLinks {
                type
                url
            }
            leader {
                name
                honorific
            }
        }
    }
`;

const MinistryDetailsTemplate = props => {
    const { data } = props;
    const { name, email, _rawOverview, phone, socialLinks, leader } =
        data && data.sanityMinistry;
    console.log(socialLinks, leader);
    return (
        <Layout>
            <SEO title={`${name}`} description="" />
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
            <BlockContent blocks={_rawOverview} />
        </Layout>
    );
};

export default MinistryDetailsTemplate;
