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

const StyledNarrowPageWrapper = styled(NarrowPageWrapper)`
    position: relative;
`;

const StyledLinkAsButton = styled(LinkAsButton)`
    margin-bottom: 2rem;

    @media (min-width: 380px) {
        position: absolute;
        top: 2rem;
        right: 1rem;
    }

    @media (min-width: 500px) {
        right: 2rem;
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

const getEmailLink = emailAddress => {
    return <a href={`mailto:${emailAddress}`}>{emailAddress}</a>;
};

// TODO make phone numbers not wrap
// TODO make email addresses links
const getContactText = (phone, email) => {
    let contactText = 'For more information, contact us at';
    if (phone && email) {
        contactText += ` ${email} or ${phone}.`;
    } else if (phone && !email) {
        contactText += ` ${phone}.`;
    } else if (email && !phone) {
        contactText += ` ${email}.`;
    } else {
        return '';
    }
    return <p>{contactText}</p>;
};

const MinistryDetailsTemplate = props => {
    const { data } = props;
    const { name, email, _rawOverview, phone, socialLinks, leader } = data && data.sanityMinistry;
    console.log(leader);
    return (
        <Layout>
            <SEO title={`${name}`} description="" />
            <StyledNarrowPageWrapper includePadding={true}>
                <h1>{name}</h1>
                {name === 'Groups' && (
                    <StyledLinkAsButton to="/groups/join">Join a Group</StyledLinkAsButton>
                )}
                <BlockContent blocks={_rawOverview} />
                <h2>Contact Us</h2>
                {(phone || email) && getContactText(phone, email)}
                {socialLinks.length > 0 && (
                    <React.Fragment>
                        <StyledSocialLinksHeading>Social Media:</StyledSocialLinksHeading>
                        <StyledSocialLinkList>
                            {socialLinks.map(link => (
                                <li key={link.type}>
                                    <SocialLink url={link.url} title={link.type} />
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
