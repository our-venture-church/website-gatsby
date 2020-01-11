import React from 'react';
import {
    createHistory,
    LocationProvider,
    Router,
    globalHistory,
} from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

import JoinGroupPage from '../../components/JoinGroupPage';

let history = createHistory(window);

const Join = props => {
    const data = useStaticQuery(graphql`
        query GroupsQuery {
            allSanityCampus {
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

    return (
        <Router>
            <JoinGroupPage default data={data} />
        </Router>
    );
};

Join.propTypes = {};

export default Join;
