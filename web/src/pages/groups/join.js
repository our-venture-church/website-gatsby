import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BasicPageIntro from '../../components/BasicPageIntro';
import BlockContent from '../../components/block-content';
import LinkAsButton from '../../components/LinkAsButton';
import { getDefaultPadding } from '../../utils/styles';

const StyledContainer = styled.div`
    ${getDefaultPadding()}
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 1rem;

    @media (min-width: 839px) {
        grid-gap: 4rem;
    }
`;

const StyledStationList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;

    li {
        padding: 0 1rem 0 0;
    }
`;

const Prayer = props => {
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
                    _rawDescription
                }
            }
        }
    `);

    const { nodes: groups } = data.allSanityGroup;
    console.log(groups);

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
                        <div>Filter by Day of the week (Coming soon)</div>
                        <p></p>
                        <StyledStationList>
                            {groups.map(group => {
                                const groupUrl = `/groups/join/${group.slug.current}`;
                                return (
                                    <li key={group.id}>
                                        <h2>
                                            <Link to={groupUrl}>
                                                {group.title}
                                            </Link>
                                        </h2>
                                        <BlockContent
                                            blocks={group._rawDescription}
                                        />
                                        <LinkAsButton
                                            to={groupUrl}
                                            aria-label="Get details or join"
                                        >
                                            Join
                                        </LinkAsButton>
                                    </li>
                                );
                            })}
                        </StyledStationList>
                    </div>
                )}
            </StyledContainer>
        </Layout>
    );
};

Prayer.propTypes = {};

export default Prayer;
