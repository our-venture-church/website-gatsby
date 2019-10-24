/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import SkipLink from './skipLink';
import '../styles/reset.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteInfoQuery {
            sanitySiteSettings {
                name
                phoneNumber
                socialLinks {
                    url
                    title
                    text
                }
            }
            site {
                siteMetadata {
                    title
                    navigation {
                        text
                        href
                        subLinks {
                            text
                            href
                        }
                    }
                }
            }
        }
    `);

    const {
        name: siteName,
        phoneNumber: phone,
        socialLinks: social,
    } = data.sanitySiteSettings;
    const { navigation } = data.site.siteMetadata;

    return (
        <>
            <SkipLink />
            <Header siteTitle={siteName} navigation={navigation} />
            <main role="main" id="main-content">
                {children}
            </main>
            <Footer
                phoneNumber={phone}
                siteTitle={siteName}
                socialLinks={social}
            />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
