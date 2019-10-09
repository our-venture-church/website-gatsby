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
            site {
                siteMetadata {
                    title
                    author
                    contactInfo {
                        phone
                        social {
                            title
                            url
                            text
                        }
                    }
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
        title,
        contactInfo: { phone, social },
        navigation,
    } = data.site.siteMetadata;

    return (
        <>
            <SkipLink />
            <Header siteTitle={title} navigation={navigation} />
            <div
                style={{
                    margin: `0 auto`,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                }}
            >
                <main role="main" id="main-content">
                    {children}
                </main>
            </div>
            <Footer
                phoneNumber={phone}
                siteTitle={title}
                socialLinks={social}
            />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
