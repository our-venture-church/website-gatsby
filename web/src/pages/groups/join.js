import React, { Fragment } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BasicPageIntro from '../../components/BasicPageIntro';
import LinkAsButton from '../../components/LinkAsButton';
import { getDefaultPadding } from '../../utils/styles';
import Grid from '../../layouts/Grid';
import colors from '../../theme/tokens/colors';
import GroupMeta from '../../components/GroupMeta';

const StyledContainer = styled.div`
    ${getDefaultPadding()}
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 1rem;

    @media (min-width: 839px) {
        grid-gap: 4rem;
    }
`;

const StyledClosed = styled.b`
    color: ${colors.mintBlue};
    text-transform: uppercase;
`;

const Join = props => {
    const data = useStaticQuery(graphql`
        query GroupsQuery {
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
                    }
                    blurb
                    meetingFrequency
                }
            }
        }
    `);

    const { nodes: groups } = data.allSanityGroup;

    return (
        <Layout>
            <SEO
                title="Join a Group"
                description="Find a group to live life with. We have groups all over the area."
            />
            <BasicPageIntro title="Join a Group" />
            <StyledContainer>
                {groups && (
                    <div>
                        <Grid>
                            {groups.map(group => {
                                const groupUrl = `/groups/join/${group.slug.current}`;
                                return (
                                    <li key={group.id}>
                                        <h2>
                                            <Link to={groupUrl}>
                                                {group.title}
                                            </Link>
                                        </h2>
                                        <p>{group.blurb}</p>
                                        {group.status === 'closed' ? (
                                            <p>
                                                This group is{' '}
                                                <StyledClosed>
                                                    closed
                                                </StyledClosed>{' '}
                                                and not accepting new
                                                registrations.
                                            </p>
                                        ) : (
                                            <Fragment>
                                                <GroupMeta {...group} />
                                                <LinkAsButton
                                                    to={groupUrl}
                                                    aria-label="Get details or join"
                                                >
                                                    Join
                                                </LinkAsButton>
                                            </Fragment>
                                        )}
                                    </li>
                                );
                            })}
                        </Grid>
                    </div>
                )}
            </StyledContainer>
        </Layout>
    );
};

Join.propTypes = {};

export default Join;
