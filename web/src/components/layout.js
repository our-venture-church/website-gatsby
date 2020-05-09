/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import SkipLink from './skipLink';
import '../styles/reset.css';
import { createGlobalStyle } from 'styled-components';
import { reducer, initialState } from '../utils/headerReducer';
import LayoutContext from '../utils/LayoutContext';
import DispatchContext from '../utils/DispatchContext';

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
            sanityWhoWeArePage {
                contentBlock {
                    title
                    link {
                        href
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
    const { contentBlock: whoWeAreSubPages } = data.sanityWhoWeArePage;
    const [state, dispatch] = useReducer(reducer, initialState);

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

    const whoWeAreIndex = navigation.findIndex(
        ({ href }) => href === '/who-we-are'
    );
    if (whoWeAreIndex > 0) {
        navigation[whoWeAreIndex].subLinks = whoWeAreSubPages.map(
            whoWeAreSubPage => ({
                text: whoWeAreSubPage.title,
                href: whoWeAreSubPage.link.href,
            })
        );
    }

    let pathChanged = false;

    if (typeof window !== 'undefined') {
        const newPath = window.location.pathname;
        if (newPath !== currentPath) {
            pathChanged = true;
            currentPath = newPath;
        }
    }

    return (
        <DispatchContext.Provider value={dispatch}>
            <LayoutContext.Provider value={state}>
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
            </LayoutContext.Provider>
        </DispatchContext.Provider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
