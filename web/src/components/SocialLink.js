import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Facebook from './icons/facebook';
import Instagram from './icons/instagram';
import YouTube from './icons/youtube';
import Email from './icons/email';

const StyledSocialLink = styled.a`
    border: none;
`;

const SocialLink = ({ title, url, text }) => {
    const getIcon = title => {
        let icon;
        switch (title.toLowerCase()) {
            case 'facebook':
                icon = <Facebook aria-hidden="true" />;
                break;
            case 'instagram':
                icon = <Instagram aria-hidden="true" />;
                break;
            case 'youtube':
                icon = <YouTube aria-hidden="true" />;
                break;
            case 'email':
                icon = <Email aria-hidden="true" />;
                break;
            default:
                icon = <span>{title}</span>;
                break;
        }
        return icon;
    };
    return (
        <StyledSocialLink href={url} aria-label={text || title}>
            {getIcon(title)}
        </StyledSocialLink>
    );
};

SocialLink.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
};

SocialLink.defaultProps = {
    text: null,
};

export default SocialLink;
