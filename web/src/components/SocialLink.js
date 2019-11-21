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
                icon = <Facebook />;
                break;
            case 'instagram':
                icon = <Instagram />;
                break;
            case 'youtube':
                icon = <YouTube />;
                break;
            case 'email':
                icon = <Email />;
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
