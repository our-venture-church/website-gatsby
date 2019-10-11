import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
    background: #b7b7b4;
    color: #423f3b;
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
        <div className="copyright">
            {`© ${new Date().getFullYear()} ${siteTitle}. All rights reserved. ${phoneNumber}`}
        </div>
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
