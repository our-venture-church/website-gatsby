import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const StaffPage = () => {
    const data = useStaticQuery(graphql`
        query StaffPageQuery {
            allSanityPerson(filter: { personType: { ne: "volunteer" } }) {
                nodes {
                    id
                    name
                    personType
                    title
                    slug {
                        current
                    }
                    image {
                        asset {
                            _id
                        }
                    }
                }
            }
        }
    `);

    const { nodes: staffMembers } = data.allSanityPerson;

    return (
        <Layout>
            <SEO title="Staff" />
            <ul>
                {staffMembers.map(staffObj => {
                    return (
                        <li key={staffObj.id}>
                            <h3>{staffObj.name}</h3>
                            <h4>{staffObj.title}</h4>
                            <Link
                                to={`/who-we-are/staff/${staffObj.slug.current}`}
                            >
                                More info
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Layout>
    );
};

StaffPage.propTypes = {
    bio: PropTypes.node,
    name: PropTypes.string,
    profilePhoto: PropTypes.string,
};

export default StaffPage;
