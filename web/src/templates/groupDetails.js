import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';
import BlockContent from '../components/block-content';
import JoinGroupForm from '../components/JoinGroupForm';

export const query = graphql`
    query GroupDetailsTemplateQuery($id: String!) {
        group: sanityGroup(id: { eq: $id }) {
            title
            _rawDescription
            signupId
            slug {
                current
            }
        }
    }
`;

const GroupDetailsTemplate = props => {
    const { data } = props;
    const group = data && data.group;
    return (
        <Layout>
            <SEO title={group.title} description="" />
            <h1>{group.title}</h1>

            {group._rawDescription && (
                <BlockContent blocks={group._rawDescription} />
            )}

            <JoinGroupForm
                groupName={group.title}
                groupNumber={group.signupId}
                groupPageUrl={`/groups/join/${group.slug.current}`}
            />
        </Layout>
    );
};

export default GroupDetailsTemplate;
