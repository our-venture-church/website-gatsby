import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { getDefaultPadding } from '../utils/styles';
import colors from '../theme/tokens/colors';
import Facebook from './icons/facebook';
import Instagram from './icons/instagram';
import YouTube from './icons/youtube';

const FooterStyled = styled.footer`
    background: ${colors.charcoalBlack};
    color: ${colors.cloudGray};
    ${getDefaultPadding()}
    padding-top: 1.5rem;
`;

const StyledSocialList = styled.ul`
    list-style: none;
    margin: 0 0 0.5em;
    text-align: center;
`;

const StyledSocialItem = styled.li`
    display: inline-block;
    margin: 0;
`;

const StyledSocialLink = styled.a`
    border: 0;
    font-size: 1.5rem;
    padding: 0 0.25em;
`;

const StyledCopyright = styled.p`
    color: ${colors.cloudGray};
    font-size: 0.75rem;
    margin: 0;
    padding-bottom: 1.25em;
    text-align: center;
`;

const StyledNoBreak = styled.span`
    white-space: nowrap;
`;

const getSocialLink = ({ title, url, text }) => {
    const getIcon = title => {
        let icon;
        console.log(title);
        switch (title) {
            case 'Facebook':
                icon = <Facebook />;
                break;
            case 'Instagram':
                icon = <Instagram />;
                break;
            case 'YouTube':
                icon = <YouTube />;
                break;
            default:
                icon = <span>{title}</span>;
                break;
        }
        return icon;
    };
    return (
        <StyledSocialItem key={title}>
            <StyledSocialLink href={url} aria-label={text || title}>
                {getIcon(title)}
            </StyledSocialLink>
        </StyledSocialItem>
    );
};

const Footer = ({ phoneNumber, siteTitle, socialLinks }) => (
    <FooterStyled>
        <StyledSocialList>
            {socialLinks.map(item => getSocialLink(item))}
        </StyledSocialList>
        <StyledCopyright>
            © {new Date().getFullYear()} {siteTitle}. All rights reserved.{' '}
            <StyledNoBreak aria-label="Phone number">
                {phoneNumber}
            </StyledNoBreak>
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
