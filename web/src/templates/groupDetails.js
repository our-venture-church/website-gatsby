import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import SEO from '../components/seo';
import Layout from '../components/layout';
import BlockContent from '../components/block-content';
import JoinGroupForm from '../components/JoinGroupForm';
import MediumPageWrapper from '../layouts/MediumPageWrapper';
import { getDefaultPadding } from '../utils/styles';
import colors from '../theme/tokens/colors';
import { Button } from '../theme/components';
import GroupMeta from '../components/GroupMeta';
import Modal from '../components/Modalv2';

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
            gender
            kids
            day
            time
            city
            age
            campus {
                title
            }
            meetingFrequency
            leader
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
    @media (min-width: 1000px) {
        display: grid;
        grid-gap: 3rem;
        grid-template-columns: 1fr 400px;
    }
`;

const StyledClosed = styled.b`
    color: ${colors.mintBlue};
    text-transform: uppercase;
`;

const StickyButtonWrapper = styled.div`
    background: ${colors.charcoalBlack};
    border-color: rgba(255, 255, 255, 0.25);
    border-style: solid;
    border-width: 1px 0;
    bottom: 0;
    display: flex;
    flex-direction: row-reverse;
    padding: 1rem 0;
    position: sticky;
`;

const GroupDetailsTemplate = props => {
    const [formOpen, setFormOpen] = useState(false);
    const wideScreen = useMediaQuery('(min-width:1000px)');

    const { data } = props;
    const group = data && data.group;

    let groupForm = (
        <Modal
            isOpen={formOpen}
            closeModal={() => {
                setFormOpen(false);
            }}
            title="Sign up"
            maxWidth="380px"
        >
            <JoinGroupForm
                noBox={true}
                groupName={group.title}
                groupNumber={group.signupId}
                groupPageUrl={`https://ourventure.church/groups/join/${group.slug.current}`}
            />
        </Modal>
    );

    if (wideScreen) {
        groupForm = (
            <JoinGroupForm
                title="Sign up"
                groupName={group.title}
                groupNumber={group.signupId}
                groupPageUrl={`https://ourventure.church/groups/join/${group.slug.current}`}
            />
        );
    }

    return (
        <Layout>
            <SEO title={group.title} description="" />
            <MediumPageWrapper>
                <StyledGroupContainer>
                    <StyledGroupHeader>{group.title}</StyledGroupHeader>

                    <StyledGroupDetails>
                        <div>
                            {group._rawDescription && (
                                <BlockContent blocks={group._rawDescription} />
                            )}
                            {group.leader && <p>Led by {group.leader}</p>}
                            <GroupMeta {...group} />
                        </div>

                        {group.status === 'closed' ? (
                            <p>
                                This group is{' '}
                                <StyledClosed>closed</StyledClosed> and not
                                accepting new registrations.
                            </p>
                        ) : (
                            groupForm
                        )}
                    </StyledGroupDetails>
                    {group.status !== 'closed' && !wideScreen && (
                        <StickyButtonWrapper>
                            <Button
                                type="button"
                                aria-haspopup="true"
                                aria-expanded={formOpen}
                                onClick={() => {
                                    setFormOpen(true);
                                }}
                            >
                                Sign up
                            </Button>
                        </StickyButtonWrapper>
                    )}
                </StyledGroupContainer>
            </MediumPageWrapper>
        </Layout>
    );
};

export default GroupDetailsTemplate;
