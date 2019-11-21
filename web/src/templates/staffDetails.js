import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

export const query = graphql`
    query PersonDetailsTemplateQuery($id: String!) {
        person: sanityPerson(id: { eq: $id }) {
            id
            name
            title
            honorific
            image {
                asset {
                    _id
                }
            }
        }
    }
`;

const PersonDetailsTemplate = props => {
    const { data } = props;
    const { honorific, name, title } = data && data.person;
    const displayName = honorific ? `${honorific} ${name}` : name;
    return (
        <div>
            <SEO
                title={`${displayName} - ${title}`}
                description={`${displayName} serves as ${title} for Venture Church.`}
            />

            <h1>{displayName}</h1>
            <h2>{title}</h2>
        </div>
    );
};

export default PersonDetailsTemplate;
