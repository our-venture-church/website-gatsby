import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import Layout from '../components/layout';
import BlockContent from '../components/block-content';
import JoinGroupForm from '../components/JoinGroupForm';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';
import { getDefaultPadding } from '../utils/styles';
import colors from '../theme/tokens/colors';

export const query = graphql`
    query GroupDetailsTemplateQuery($id: String!) {
        group: sanityGroup(id: { eq: $id }) {
            title
            _rawDescription
            signupId
            status
            slug {
                current
            }
        }
    }
`;

const StyledGroupContainer = styled.div`
    ${getDefaultPadding()};
`;

const StyledGroupHeader = styled.h1`
    margin-top: 2rem;
`;

const StyledGroupDetails = styled.div`
    @media (min-width: 700px) {
        display: grid;
        grid-gap: 3rem;
        grid-template-columns: 1fr 300px;
    }
`;

const StyledClosed = styled.b`
    color: ${colors.mintBlue};
    text-transform: uppercase;
`;

const GroupDetailsTemplate = props => {
    const { data } = props;
    const group = data && data.group;
    return (
        <Layout>
            <SEO title={group.title} description="" />
            <NarrowPageWrapper>
                <StyledGroupContainer>
                    <StyledGroupHeader>{group.title}</StyledGroupHeader>

                    <StyledGroupDetails>
                        {group._rawDescription && (
                            <BlockContent blocks={group._rawDescription} />
                        )}

                        {group.status === 'closed' ? (
                            <p>
                                This group is{' '}
                                <StyledClosed>closed</StyledClosed> and not
                                accepting new registrations.
                            </p>
                        ) : (
                            <JoinGroupForm
                                groupName={group.title}
                                groupNumber={group.signupId}
                                groupPageUrl={`https://ourventure.church/groups/join/${group.slug.current}`}
                            />
                        )}
                    </StyledGroupDetails>
                </StyledGroupContainer>
            </NarrowPageWrapper>
        </Layout>
    );
};

export default GroupDetailsTemplate;
