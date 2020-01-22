import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import Layout from '../components/layout';
import BlockContent from '../components/block-content';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';
import SocialLink from '../components/SocialLink';
import { SocialLinkList } from '../theme/components';
import LinkAsButton from '../components/LinkAsButton';
import EmailLink from '../components/EmailLink';
import PhoneNumber from '../components/PhoneNumber';

const StyledNarrowPageWrapper = styled(NarrowPageWrapper)`
    position: relative;
`;

const StyledBtnGroup = styled.div`
    span {
        display: none;
        @media (min-width: 360px) {
            display: inline;
        }
    }

    @media (min-width: 620px) {
        position: absolute;
        top: 2rem;
        right: 1rem;
    }
    margin-bottom: 2rem;
`;

const StyledLinkAsButton = styled(LinkAsButton)`
    display: block;
    margin-bottom: 0.75em;

    @media (min-width: 360px) {
        display: inline-block;
    }
`;

const StyledSocialLinksHeading = styled.h3`
    display: inline-block;
    font-size: 1rem;
    margin-bottom: 0.5em;
    margin-right: 0.5em;
    text-transform: uppercase;
`;

const StyledSocialLinkList = styled(SocialLinkList)`
    display: inline-block;
    vertical-align: top;
`;

export const query = graphql`
    query MinistryTemplateQuery($id: String!) {
        sanityMinistry(id: { eq: $id }) {
            id
            name
            email
            _rawOverview
            phone
            socialLinks {
                type
                url
            }
            leader {
                name
                honorific
            }
        }
    }
`;

const getContactText = (phone, email) => {
    if (phone && email) {
        return (
            <p>
                For more information, contact us at{' '}
                <EmailLink emailAddress={email} /> or{' '}
                <PhoneNumber>{phone}</PhoneNumber>.
            </p>
        );
    } else if (phone && !email) {
        return (
            <p>
                For more information, contact us at{' '}
                <PhoneNumber>{phone}</PhoneNumber>.
            </p>
        );
    } else if (email && !phone) {
        return (
            <p>
                For more information, contact us at{' '}
                <EmailLink emailAddress={email} />.
            </p>
        );
    } else {
        return null;
    }
};

const MinistryDetailsTemplate = props => {
    const { data } = props;
    const { name, email, _rawOverview, phone, socialLinks, leader } =
        data && data.sanityMinistry;
    console.log(leader);
    return (
        <Layout>
            <SEO title={`${name}`} description="" />
            <StyledNarrowPageWrapper includePadding={true}>
                <h1>{name}</h1>
                {name === 'Groups' && (
                    <StyledBtnGroup>
                        <StyledLinkAsButton to="/groups/join">
                            Join a Group
                        </StyledLinkAsButton>{' '}
                        <span>or</span>{' '}
                        <StyledLinkAsButton to="/groups/start">
                            Start a Group
                        </StyledLinkAsButton>
                    </StyledBtnGroup>
                )}
                <BlockContent blocks={_rawOverview} />
                <h2>Contact Us</h2>
                {(phone || email) && getContactText(phone, email)}
                {socialLinks.length > 0 && (
                    <React.Fragment>
                        <StyledSocialLinksHeading>
                            Social Media:
                        </StyledSocialLinksHeading>
                        <StyledSocialLinkList>
                            {socialLinks.map(link => (
                                <li key={link.type}>
                                    <SocialLink
                                        url={link.url}
                                        title={link.type}
                                    />
                                </li>
                            ))}
                        </StyledSocialLinkList>
                    </React.Fragment>
                )}
            </StyledNarrowPageWrapper>
        </Layout>
    );
};

export default MinistryDetailsTemplate;
