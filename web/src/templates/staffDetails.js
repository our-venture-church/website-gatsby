import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

export const query = graphql`
    query PersonDetailsTemplateQuery($id: String!) {
        person: sanityPerson(id: { eq: $id }) {
            id
            name
            title
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
    const person = data && data.person;
    return (
        <div>
            <SEO title={`${person.name} - ${person.title}`} description="" />

            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
        </div>
    );
};

export default PersonDetailsTemplate;
