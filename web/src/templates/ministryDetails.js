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
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import { getDefaultPadding } from '../utils/styles';
import colors from '../theme/tokens/colors';

const StyledNarrowPageWrapper = styled(NarrowPageWrapper)`
    position: relative;
`;

const getMobileBackgroundImageStyles = url => `
    background-image: url('${url}')
`;

const getDesktopBackgroundImageStyles = url => `
    @media (min-width: 820px) {
        background-image: url('${url}')
    }
`;

const StyledIntroBlock = styled.div`
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-bottom: 1px solid ${colors.ventureYellow};

    > div {
        ${getDefaultPadding()}
        margin: auto;
        max-width: 800px;
        position: relative;
        padding-bottom: 4rem;
        padding-top: 3rem;
    }

    h1 {
        span {
            background: ${colors.ventureYellow};
            color: ${colors.charcoalBlack};
            box-decoration-break: clone;
            box-shadow: 0.5rem 0 0 ${colors.ventureYellow},
                -0.5rem 0 0 ${colors.ventureYellow};
            line-height: 1.6;
        }
    }

    ${props =>
        props.mobileImage && getMobileBackgroundImageStyles(props.mobileImage)}

    ${props =>
        props.desktopImage &&
        getDesktopBackgroundImageStyles(props.desktopImage)}
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
            bannerImage {
                desktopSize {
                    asset {
                        _id
                    }
                }
                mobileSize {
                    asset {
                        _id
                    }
                }
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
    const { name, email, _rawOverview, phone, socialLinks, bannerImage } =
        data && data.sanityMinistry;

    const bgImages = {};
    let desktopImage;
    let mobileImage;

    if (bannerImage) {
        const { desktopSize, mobileSize } = bannerImage;

        if (desktopSize && desktopSize.asset) {
            desktopImage = imageUrlFor(buildImageObj(desktopSize))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit('crop')
                .auto('format')
                .url();
        }

        if (mobileSize && mobileSize.asset) {
            mobileImage = imageUrlFor(buildImageObj(mobileSize))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit('crop')
                .auto('format')
                .url();
        }

        if (mobileImage) {
            bgImages.mobileImage = mobileImage;
            if (desktopImage) {
                bgImages.desktopImage = desktopImage;
            }
        } else if (desktopImage) {
            bgImages.mobileImage = desktopImage;
        }
    }

    return (
        <Layout>
            <SEO title={`${name}`} description="" />
            <StyledIntroBlock {...bgImages}>
                <div>
                    <h1>
                        <span>{name}</span>
                    </h1>
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
                </div>{' '}
            </StyledIntroBlock>
            <StyledNarrowPageWrapper includePadding={true}>
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
