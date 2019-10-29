import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { getDefaultPadding } from '../utils/styles';
import colors from '../theme/tokens/colors';

const FooterStyled = styled.footer`
    background: ${colors.charcoalBlack};
    color: ${colors.cloudGray};
    ${getDefaultPadding()}
`;

const StyledCopyright = styled.p`
    color: ${colors.cloudGray};
    font-size: 0.75rem;
    padding-top: 1rem;
    text-align: center;
`;

const StyledNoBreak = styled.span`
    white-space: nowrap;
`;

const getSocialLink = ({ title, url, text }) => (
    <li key={title}>
        <a href={url} aria-label={text || title}>
            {title}
        </a>
    </li>
);

const Footer = ({ phoneNumber, siteTitle, socialLinks }) => (
    <FooterStyled>
        <h3>Connect with us:</h3>
        <ul className="social-links">
            {socialLinks.map(item => getSocialLink(item))}
        </ul>
        <StyledCopyright>
            © {new Date().getFullYear()} {siteTitle}. All rights reserved.{' '}
            <StyledNoBreak>{phoneNumber}</StyledNoBreak>
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
