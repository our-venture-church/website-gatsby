import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';

const StaffDetailPage = ({ bio, name, profilePhoto }) => (
    <Layout>
        <SEO title="Home" />
        <h1>{name}</h1>
        {profilePhoto}
        {bio}
    </Layout>
);

StaffDetailPage.propTypes = {
    bio: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string.isRequired,
};

export default StaffDetailPage;
