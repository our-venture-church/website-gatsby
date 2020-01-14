import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import JoinGroupPage from '../../components/JoinGroupPage';

const Join = props => {
    const data = useStaticQuery(graphql`
        query GroupsQuery {
            allSanityCampus(sort: { order: ASC, fields: _createdAt }) {
                nodes {
                    title
                    id
                }
            }
            allSanityGroup(
                filter: {
                    status: { ne: "hidden" }
                    slug: { current: { ne: null } }
                }
            ) {
                nodes {
                    title
                    time
                    status
                    slug {
                        current
                    }
                    signupId
                    leader
                    kids
                    id
                    gender
                    day
                    city
                    age
                    campus {
                        title
                        id
                    }
                    blurb
                    meetingFrequency
                }
            }
        }
    `);

    return <JoinGroupPage data={data} />;
};

Join.propTypes = {};

export default Join;
