import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { getDefaultPadding } from '../utils/styles';
import colors from '../theme/tokens/colors';
import SocialLink from './SocialLink';
import { SocialLinkList } from '../theme/components';

const FooterStyled = styled.footer`
    color: ${colors.cloudGray};
    ${getDefaultPadding()}
    padding-top: 1.5rem;
`;

const StyledSocialLinkList = styled(SocialLinkList)`
    font-size: 1.5rem;
    margin-bottom: 0.5em;
    text-align: center;
`;

const StyledSocialItem = styled.li`
    display: inline-block;
    margin: 0;
`;

const StyledCopyright = styled.p`
    color: ${colors.cloudGray};
    font-size: 0.75rem;
    margin: 0;
    padding-bottom: 1.25em;
    text-align: center;
`;

const StyledPhoneLink = styled.a`
    white-space: nowrap;
`;

const Footer = ({ phoneNumber, siteTitle, socialLinks }) => (
    <FooterStyled>
        <StyledSocialLinkList>
            {socialLinks.map(item => (
                <StyledSocialItem key={item.title}>
                    <SocialLink
                        url={item.url}
                        text={item.text}
                        title={item.title}
                    />
                </StyledSocialItem>
            ))}
        </StyledSocialLinkList>
        <StyledCopyright>
            © {new Date().getFullYear()} {siteTitle}. All rights reserved.{' '}
            <StyledPhoneLink
                href={`tel:${phoneNumber}`}
                aria-label="Phone number"
            >
                {phoneNumber}
            </StyledPhoneLink>
        </StyledCopyright>
    </FooterStyled>
);

Footer.propTypes = {
    phoneNumber: PropTypes.string,
    siteTitle: PropTypes.string,
    socialLinks: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            text: PropTypes.string,
        })
    ),
};

Footer.defaultProps = {
    phoneNumber: ``,
    siteTitle: ``,
    socialLinks: [],
};

export default Footer;
