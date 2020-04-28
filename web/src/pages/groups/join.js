import React, { Fragment, useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../../components/seo';
import Layout from '../../components/layout';
import BasicPageIntro from '../../components/BasicPageIntro';
import LinkAsButton from '../../components/LinkAsButton';
import FilterGroupsModal from '../../components/FilterGroupsModal';
import { parseQueryParamString } from '../../lib/groups';
import { getDefaultPadding } from '../../utils/styles';
import Grid from '../../layouts/Grid';
import colors from '../../theme/tokens/colors';
import { Button } from '../../theme/components';
import GroupMeta from '../../components/GroupMeta';
import {
    GROUPS_DAY,
    GROUPS_GENDER,
    GROUPS_AGE,
    GROUPS_KID_FRIENDLY,
} from '../../constants';

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

const StyledButton = styled(Button)`
    margin-bottom: 2rem;
`;

const StyledFilteredEntries = styled.span`
    margin-left: 1rem;
`;

const getInitialFilterState =
    typeof window !== 'undefined' && window.location
        ? parseQueryParamString(window.location.hash)
        : [];

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

    const [showFilters, setShowFilters] = useState(false);
    const [filterState, setFilterState] = useState(getInitialFilterState);

    useEffect(() => {
        window.onhashchange = e => {
            setFilterState(parseQueryParamString(window.location.hash));
        };
    }, []);

    const openFilterDialog = () => {
        setShowFilters(true);
    };

    const closeFilterDialog = () => {
        setShowFilters(false);
    };

    const { nodes: groups } = data.allSanityGroup;
    const { nodes: campuses } = data.allSanityCampus;

    const filters = [
        {
            title: 'Day of the week',
            type: 'checkbox',
            nameAttr: 'day',
            options: GROUPS_DAY,
        },
        {
            title: 'Gender',
            type: 'checkbox',
            nameAttr: 'gender',
            options: GROUPS_GENDER,
        },
        {
            title: 'Age',
            type: 'checkbox',
            nameAttr: 'age',
            options: GROUPS_AGE,
        },
        {
            title: 'Kids',
            type: 'checkbox',
            nameAttr: 'kids',
            options: GROUPS_KID_FRIENDLY,
        },
        {
            title: 'Campus',
            type: 'checkbox',
            nameAttr: 'campus',
            options: campuses.map(campus => ({
                title: campus.title,
                value: campus.id,
            })),
        },
    ];

    const exclusionFilters = filterState;

    const filteredGroups = groups.filter(group => {
        return !exclusionFilters.some(filter => {
            return filter.value.some(val => {
                if (filter.key === 'campus' && group[filter.key]) {
                    return val === group[filter.key].id;
                }
                return val === group[filter.key];
            });
        });
    });

    return (
        <Layout>
            <SEO
                title="Join a Group"
                description="Find a group to live life with. We have groups all over the area."
            />
            <BasicPageIntro title="Join a Group" />
            <StyledContainer>
                {filteredGroups && filteredGroups.length > 0 ? (
                    <div>
                        <StyledButton onClick={openFilterDialog}>
                            Filter Results
                        </StyledButton>
                        <StyledFilteredEntries>
                            {filteredGroups.length} group
                            {filteredGroups.length !== 1 && 's'} found
                        </StyledFilteredEntries>
                        <Grid>
                            {filteredGroups.map(group => {
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
                ) : (
                    <Fragment>
                        <p>There are no groups that match your filters.</p>
                        <Button
                            onClick={() => {
                                window.location.hash = '';
                            }}
                        >
                            Reset Filters
                        </Button>
                    </Fragment>
                )}
            </StyledContainer>
            <FilterGroupsModal
                isOpen={showFilters}
                closeModal={closeFilterDialog}
                allFilters={filters}
                setFilters={filterState}
            />
        </Layout>
    );
};

Join.propTypes = {};

export default Join;
