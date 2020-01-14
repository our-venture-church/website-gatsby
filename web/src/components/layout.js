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
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    .ReactModal__Body--open {
        overflow: hidden;
    }
`;

let currentPath;

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
                mainNav {
                    text
                    href
                }
            }
            allSanityMinistry {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);

    const {
        name: siteName,
        phoneNumber: phone,
        socialLinks: social,
        mainNav: navigation,
    } = data.sanitySiteSettings;
    const { nodes: ministries } = data.allSanityMinistry;

    const whatWeDoIndex = navigation.findIndex(
        ({ href }) => href === '/what-we-do'
    );
    navigation[whatWeDoIndex].subLinks = ministries
        .map(({ name, slug }) => ({
            text: name,
            href: `/${slug.current}`,
        }))
        .sort((a, b) => {
            const nameA = a.text.toUpperCase();
            const nameB = b.text.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

    let pathChanged = false;

    if (typeof window !== 'undefined') {
        const newPath = window.location.pathname;
        if (newPath !== currentPath) {
            pathChanged = true;
            currentPath = newPath;
        }
    }

    return (
        <React.Fragment>
            <SkipLink />
            <Header
                siteTitle={siteName}
                navigation={navigation}
                pathChanged={pathChanged}
            />
            <main role="main" id="main-content">
                {children}
            </main>
            <Footer
                phoneNumber={phone}
                siteTitle={siteName}
                socialLinks={social}
            />
            <GlobalStyle />
        </React.Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
