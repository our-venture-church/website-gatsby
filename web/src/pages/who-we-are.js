import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';
import PageIntroWithText from '../components/PageIntroWithText';
import LinkAsButton from '../components/LinkAsButton';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import colors from '../theme/tokens/colors';
import { getDefaultPadding } from '../utils/styles';

const StyledSection = styled.div`
    align-items: center;
    background: ${props => (props.odd ? 'rgba(0,0,0,0.2)' : 'transparent')};
    min-height: 65vh;

    display: ${props => (props.flex ? 'flex' : 'block')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${getDefaultPadding()};
    padding-bottom: 40px;
    padding-top: 40px;
    text-align: ${props => (props.centeredText ? 'center' : 'left')};

    ${props =>
        props.staffSection &&
        `
        display: flex;
        flex-direction: row;
        margin: auto;
        max-width: 1150px;

        > div:first-child {
            display: flex;
            flex: 1 0;
            flex-direction: column;
            justify-content: center;
            margin: auto;
            padding-right: 40px;
        }
        `}

    > div:first-child {
        margin: 0 auto;
        max-width: 550px;
        /* padding: 40px; */
    }

    h2 {
        margin-bottom: 0.5rem;
    }

    p {
        margin-bottom: 0.75rem;
    }
`;

const StaffPhotos = styled.div`
    display: none;

    @media (min-width: 620px) {
        display: block;
        position: relative;
        width: 25%;
    }

    @media (min-width: 800px) {
        height: 515px;
        transform: scale(0.75);
        width: 50%;
    }

    @media (min-width: 900px) {
        transform: scale(1);
    }

    img {
        border: 5px solid rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 100px;
        width: auto;

        &:last-child {
            margin-bottom: 0;
        }

        @media (min-width: 800px) {
            max-width: 220px;
            position: absolute;
        }
    }

    @media (min-width: 800px) {
        img:nth-child(2),
        img:nth-child(3),
        img:nth-child(5) {
            width: 140px;
        }

        img:nth-child(1) {
            right: 245px;
            top: 25px;
        }

        img:nth-child(2) {
            right: 245px;
            top: 270px;
        }

        img:nth-child(3) {
            right: 80px;
            top: -20px;
        }

        img:nth-child(4) {
            right: 0;
            top: 145px;
        }

        img:nth-child(5) {
            right: 80px;
            top: 390px;
        }
    }
`;

const ReachList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 3rem auto 0;
    max-width: 700px;
    width: 100%;

    @media (min-width: 550px) {
        flex-direction: row;
    }

    li {
        flex: 1;
        margin-bottom: 2.5rem;
        text-align: center;

        @media (min-width: 550px) {
            margin-bottom: 0;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

    svg {
        color: ${colors.mintBlue};
        display: block;
        margin: 0 auto 1rem;
    }
`;

const HistoryTimeline = styled.ol`
    list-style: none;
    margin: 3rem 0 0;
    max-width: 550px;
`;

const TimelineItem = styled.li`
    align-items: center;
    display: flex;
    margin-bottom: 2.5rem;
    transition: 300ms color ease-out;

    &:last-child {
        margin-bottom: 0;
    }

    &:nth-child(2n) {
        color: ${colors.cloudGray};
    }
    &:nth-child(4n - 1) {
        color: ${colors.cinderGray};
    }

    &:hover {
        color: ${colors.ventureYellow};
    }
`;

const TimelineItemContent = styled.div`
    flex: 1;
    margin-left: 1rem;

    h3 {
        font-size: 16px;
        margin-bottom: 0.25rem;
    }

    p {
        margin-bottom: 0;
    }
`;

const WhoWeAreSection = ({ text, title, link, index, staffPhotos }) => {
    let extraContent = null;
    let sectionProps = {};

    if (title === 'Our Staff') {
        sectionProps.staffSection = true;
        extraContent = (
            <StaffPhotos>
                {staffPhotos.map(staffPhoto => {
                    return (
                        <img
                            src={imageUrlFor(buildImageObj(staffPhoto))
                                .width(300)
                                .height(300)
                                .fit('crop')
                                .auto('format')
                                .url()}
                            alt=""
                        />
                    );
                })}
            </StaffPhotos>
        );
    }

    if (title === 'REACH Initiative') {
        sectionProps.centeredText = true;
        extraContent = (
            <ReachList>
                <li>
                    <svg
                        fill="currentColor"
                        aria-hidden={true}
                        focusable="false"
                        width="75"
                        height="75"
                        viewBox="0 0 75 75"
                    >
                        <path d="M36.9 33.1c4.8 0 8.7-3.9 8.7-8.7s-3.9-8.7-8.7-8.7c-4.8 0-8.7 3.9-8.7 8.7S32.1 33.1 36.9 33.1zM37.8 18.6c0.1-0.4 0.5-0.6 0.9-0.5 1.6 0.5 4.5 2.4 4.5 6.3 0 0.4-0.3 0.8-0.7 0.8s-0.7-0.3-0.7-0.7c0-3.8-3.3-4.8-3.4-4.9C37.9 19.4 37.7 19 37.8 18.6z"></path>
                        <path d="M37.5 0C16.8 0 0 16.8 0 37.5S16.8 75 37.5 75 75 58.2 75 37.5 58.2 0 37.5 0zM36.9 14.1c5.7 0 10.2 4.6 10.2 10.2 0 5.4-4.2 9.8-9.5 10.2V52.2c0 0.4-0.3 0.8-0.7 0.8s-0.7-0.3-0.7-0.7V34.6c-5.3-0.4-9.5-4.8-9.5-10.2C26.6 18.7 31.2 14.1 36.9 14.1zM37.1 61.1c-8.2 0-14.6-3.1-14.6-7.1 0-3 3.5-5.5 9.1-6.6 0.4-0.1 0.8 0.2 0.9 0.6 0.1 0.4-0.2 0.8-0.6 0.9 -4.7 0.9-7.9 3-7.9 5.2 0 2.7 5.3 5.6 13.1 5.6 7.8 0 13.1-2.9 13.1-5.6 0-2.2-3.2-4.2-7.9-5.2 -0.4-0.1-0.7-0.5-0.6-0.9 0.1-0.4 0.5-0.7 0.9-0.6 5.6 1.1 9.1 3.6 9.1 6.6C51.7 57.9 45.3 61.1 37.1 61.1z"></path>
                    </svg>
                    Local Outreach
                </li>
                <li>
                    <svg
                        fill="currentColor"
                        aria-hidden={true}
                        focusable="false"
                        width="75"
                        height="75"
                        viewBox="0 0 75 75"
                    >
                        <path d="M37.5 0C16.8 0 0 16.8 0 37.5S16.8 75 37.5 75C58.2 75 75 58.2 75 37.5S58.2 0 37.5 0zM34 44c-0.1 0.2-0.4 0.3-0.6 0.3 -0.2 0-0.3 0-0.4-0.1 -1-0.8-2.5-1.4-4-2.1 -4.7-2.2-10.5-4.8-9.6-12.3 0.9-7.2 0-13.5 0-13.5l-0.1-0.9 0.9 0c0.4 0 10.2 0.2 16.1 7.2 3.8 4.5 5 10.9 3.5 18.8 -0.1 0.4-0.5 0.7-0.9 0.6 -0.4-0.1-0.7-0.5-0.6-0.9 1.3-7.4 0.2-13.3-3.2-17.5 -4.4-5.4-11.6-6.4-14.1-6.6 0.2 2 0.6 7.2-0.1 13 -0.8 6.4 4.3 8.7 8.8 10.7 1.6 0.7 3.2 1.5 4.3 2.3C34.1 43.2 34.2 43.6 34 44zM23.1 19.9c-0.3-0.3-0.4-0.7-0.1-1.1 0.3-0.3 0.7-0.4 1.1-0.1C38.4 30.8 38.3 52.8 38.2 53.7c0 0.4-0.3 0.7-0.7 0.7 0 0 0 0 0 0 -0.4 0-0.7-0.3-0.7-0.8C36.8 53.5 36.9 31.5 23.1 19.9zM37.5 65.1c0 0 0 0-0.1 0 -0.4 0-0.7-0.4-0.7-0.8 0-0.6 1.3-14.6 17.5-25.3 0.3-0.2 0.8-0.1 1 0.2 0.2 0.3 0.1 0.8-0.2 1C39.4 50.6 38.3 64.3 38.2 64.4 38.2 64.8 37.9 65.1 37.5 65.1zM59 37.1c0 0.1-0.4 11.7-11.1 13.4 0 0-0.1 0-0.1 0 -0.4 0-0.7-0.3-0.7-0.6 -0.1-0.4 0.2-0.8 0.6-0.9 8.3-1.3 9.6-9 9.8-11.3 -4-0.7-7.3-0.1-9.7 1.7 -3.7 2.7-4.3 7.2-4.3 7.3 -0.1 0.4-0.4 0.7-0.8 0.7 -0.4 0-0.7-0.4-0.7-0.8 0-0.2 0.7-5.3 4.9-8.3 2.9-2.1 6.8-2.8 11.5-1.8l0.6 0.1L59 37.1z"></path>
                    </svg>
                    Church Planting
                </li>
                <li>
                    <svg
                        fill="currentColor"
                        aria-hidden={true}
                        focusable="false"
                        width="75"
                        height="75"
                        viewBox="0 0 75 75"
                    >
                        <path d="M35.6 37.7l-7.1-2.9c-1.2 3.2-2.1 6.3-2.7 9.3 2.4 0.4 4.6 1 6.6 1.7L35.6 37.7z"></path>
                        <path d="M22 30.5l5.7 2.4c1.4-3.5 3-6.6 4.7-9.4 -1.5-1.1-2.7-2.2-3.8-3.2C26 23 23.7 26.5 22 30.5z"></path>
                        <path d="M48 30.4c-2.6-0.6-4.9-1.3-7.1-2.2l-3.4 8.7 7.6 3.2C46.4 36.8 47.3 33.5 48 30.4z"></path>
                        <path d="M44.6 41.5l-7.6-3.1 -3.1 8.1c2.5 1 4.7 2.1 6.6 3.3C41.9 47.3 43.3 44.5 44.6 41.5z"></path>
                        <path d="M52 44.6l-6-2.5c-1.3 3.1-2.7 6-4.2 8.5 1.6 1.1 3.1 2.3 4.2 3.4C48.3 51.3 50.4 48.2 52 44.6z"></path>
                        <path d="M32.2 61c0.1 0 0.1 0 0.2 0 4.3 0 8.8-2.2 12.6-6 -1.1-1-2.5-2.1-4-3.2C38.1 56.2 35 59.5 32.2 61z"></path>
                        <path d="M29.1 33.4l7.1 2.9 3.4-8.7c-2.3-1-4.2-2.2-5.9-3.3C32 27 30.4 30.1 29.1 33.4z"></path>
                        <path d="M52.5 43.2c1.6-4 2.3-8.1 2.3-11.9 -1.9-0.1-3.7-0.3-5.4-0.6 -0.7 3.2-1.6 6.6-3 10L52.5 43.2z"></path>
                        <path d="M49.7 29.2c1.6 0.3 3.3 0.5 5.1 0.6 -0.2-5.5-2.1-10.3-5.3-13.2 0.6 1.7 0.9 3.8 0.9 6.4C50.3 24.9 50.1 27 49.7 29.2z"></path>
                        <path d="M37.5 0C16.8 0 0 16.8 0 37.5S16.8 75 37.5 75 75 58.2 75 37.5 58.2 0 37.5 0zM62.6 47.9c0 0.1 0 0.2-0.1 0.3 0 0.1-0.1 0.2-0.2 0.2 -1.3 3.1-3.2 5.9-5.6 8.4 -5.1 5.2-12 8.1-19.3 8.1 -7.2 0-13.9-2.8-19-7.8 -5.2-5.1-8-11.9-8.1-19.1 0-3.7 0.7-7.3 2.1-10.6 0 0 0 0 0-0.1 0 0 0 0 0-0.1 1.3-3.1 3.2-6 5.7-8.5 5.1-5.2 12-8.1 19.3-8.1 7.2 0 13.9 2.8 19 7.8 5.2 5.1 8 11.9 8.1 19.1C64.6 41.2 63.9 44.6 62.6 47.9z"></path>
                        <path d="M61.8 29.8c-1.3-3.8-3.4-7.3-6.4-10.2 -1.3-1.3-2.7-2.4-4.2-3.3 3.1 3.2 4.8 8.1 5.1 13.7C58.1 29.9 59.9 29.9 61.8 29.8z"></path>
                        <path d="M27.2 34.2l-5.7-2.4c-1.4 3.9-2.2 7.8-2.2 11.6 1.8 0.1 3.4 0.2 5 0.5C25 40.8 25.9 37.5 27.2 34.2z"></path>
                        <path d="M19.3 44.9c0.1 1.5 0.3 3 0.6 4.4 0.8 3.4 2.3 6.2 4.3 8.2 -0.5-1.6-0.8-3.7-0.8-6.1 0-1.9 0.2-3.9 0.6-6.1C22.5 45.2 21 45 19.3 44.9z"></path>
                        <path d="M48.3 28.9c0.4-2.1 0.6-4.1 0.6-6 0.1-4.4-0.9-7.3-2.6-8.4L41.5 26.8C43.5 27.7 45.8 28.4 48.3 28.9z"></path>
                        <path d="M39.7 51c-1.8-1.2-4-2.3-6.4-3.2l-4.9 12.5c0.2 0 0.4 0.1 0.6 0.1C32.1 60.3 36.1 56.7 39.7 51z"></path>
                        <path d="M25.5 45.6c-0.4 2.1-0.6 4.1-0.6 5.9 -0.1 3.9 0.7 6.8 2.2 8.1l4.8-12.3C29.9 46.6 27.8 46 25.5 45.6z"></path>
                        <path d="M32.4 62.5c-0.8 0-1.6-0.1-2.4-0.2 2.4 0.7 4.9 1.1 7.5 1.1 4.3 0 8.4-1 12.1-3 -0.4-0.6-1.5-2.3-3.5-4.3C41.9 60.1 37.1 62.5 32.4 62.5z"></path>
                        <path d="M62.2 31.3c-1.4 0.1-2.8 0.2-4.2 0.2 -0.6 0-1.1 0-1.7 0 0 3.9-0.8 8.2-2.4 12.4l7.5 3.1c1.1-2.9 1.7-6.1 1.7-9.3C63 35.4 62.8 33.3 62.2 31.3z"></path>
                        <path d="M47 55c2.2 2.2 3.4 4 3.8 4.6 1.8-1.1 3.4-2.4 4.9-3.9 2.2-2.2 3.9-4.7 5.1-7.5l-7.5-3.1C51.7 48.9 49.5 52.2 47 55z"></path>
                        <path d="M27.6 19.2c-1.5-1.5-2.4-2.8-2.9-3.6 -2 1.1-3.8 2.5-5.4 4.2 -2.1 2.2-3.8 4.7-5.1 7.4l6.5 2.7C22.4 25.7 24.8 22.1 27.6 19.2z"></path>
                        <path d="M18.5 49.7c-0.4-1.5-0.6-3.1-0.6-4.8 -1.6 0-3.2 0-4.9 0.2 1.2 4.1 3.4 7.9 6.6 10.9 1.5 1.5 3.2 2.8 5 3.8C21.6 57.6 19.5 54.1 18.5 49.7z"></path>
                        <path d="M33.2 22.2c2.7-4.1 5.5-7.1 8.2-8.5 -4 0.1-8.1 2.2-11.7 5.5C30.7 20.1 31.8 21.2 33.2 22.2z"></path>
                        <path d="M39.8 12.3c-0.8-0.1-1.5-0.1-2.3-0.1 -4.1 0-8 0.9-11.5 2.7 0.5 0.7 1.3 1.8 2.6 3.2C32 14.9 35.9 12.9 39.8 12.3z"></path>
                        <path d="M34.4 23.1c1.6 1.1 3.5 2.2 5.7 3.2l4.7-12.1c0 0 0 0-0.1 0C41.8 14.2 37.9 17.6 34.4 23.1z"></path>
                        <path d="M20.1 31.3l-6.5-2.7c-1.1 3-1.7 6.1-1.7 9.4 0 1.9 0.2 3.8 0.7 5.6 1.8-0.1 3.6-0.2 5.2-0.2C17.8 39.5 18.6 35.3 20.1 31.3z"></path>
                    </svg>
                    Global Missions
                </li>
            </ReachList>
        );
    }

    if (title === 'History') {
        extraContent = (
            <HistoryTimeline>
                <TimelineItem>
                    <svg
                        aria-hidden={true}
                        focusable="false"
                        fill="currentColor"
                        width="75"
                        height="75"
                        viewBox="0 0 75 75"
                    >
                        <path d="M52.3 14.3l-18-4.1v54.4l18-4.1V14.3zM40.8 42.2c-0.6 0-1.2-0.3-1.5-0.8l-2.9 0.4c0 0-0.1 0-0.1 0 -0.4 0-0.7-0.3-0.7-0.6 -0.1-0.4 0.2-0.8 0.6-0.9l2.9-0.4c0.2-0.8 0.9-1.3 1.7-1.3 1 0 1.8 0.8 1.8 1.8S41.8 42.2 40.8 42.2z"></path>
                        <path d="M37.5 0C16.8 0 0 16.8 0 37.5S16.8 75 37.5 75 75 58.2 75 37.5 58.2 0 37.5 0zM53.8 61.9l-21 4.7v-5.3h-8V13.7h8V8.4l21 4.7V61.9z"></path>
                    </svg>
                    <TimelineItemContent>
                        <h3>2004</h3>
                        <p>
                            Canyon Creek Church launches at Heatherwood Middle
                            School
                        </p>
                    </TimelineItemContent>
                </TimelineItem>
                <TimelineItem>
                    <svg
                        aria-hidden={true}
                        focusable="false"
                        fill="currentColor"
                        width="75"
                        height="75"
                        viewBox="0 0 75 75"
                    >
                        <path d="M52 44c0.5-0.1 0.9-0.2 1.4-0.5s0.8-0.5 1.1-0.9c0.3-0.4 0.6-0.8 0.7-1.3 0.1-0.5 0.2-1 0.1-1.6 -0.1-0.7-0.3-1.2-0.6-1.6 -0.3-0.4-0.7-0.7-1.1-0.9 -0.4-0.2-0.9-0.3-1.4-0.3 -0.5 0-1 0-1.5 0.1l-2.5 0.5 1.3 7L52 44zM50.9 38.4c0.3-0.1 0.6-0.1 0.9-0.1 0.3 0 0.6 0.1 0.8 0.2s0.5 0.3 0.6 0.5c0.2 0.2 0.3 0.6 0.4 1 0.1 0.4 0.1 0.7 0 1 -0.1 0.3-0.2 0.5-0.4 0.7 -0.2 0.2-0.4 0.4-0.7 0.5 -0.3 0.1-0.6 0.2-0.9 0.3l-0.8 0.1 -0.7-4.1L50.9 38.4z"></path>
                        <polygon points="44.6 38 42.9 38.4 44.2 45.4 48.6 44.6 48.3 43.1 45.6 43.6 "></polygon>
                        <path d="M30.7 42c0.1-0.1 0.2-0.1 0.3-0.2 0.1 0 0.2-0.1 0.3-0.1 0.2 0 0.5 0 0.7 0 0.3 0.1 0.5 0.2 0.6 0.3l0.9-1.3c-0.4-0.2-0.8-0.4-1.2-0.4s-0.9-0.1-1.3 0c-0.3 0.1-0.6 0.2-1 0.3 -0.3 0.1-0.6 0.3-0.8 0.5 -0.2 0.2-0.4 0.5-0.5 0.8 -0.1 0.3-0.1 0.7-0.1 1 0.1 0.3 0.2 0.6 0.3 0.8s0.3 0.4 0.5 0.5c0.2 0.1 0.4 0.2 0.6 0.3 0.2 0.1 0.5 0.1 0.7 0.1 0.2 0 0.5 0.1 0.7 0.1 0.2 0 0.4 0.1 0.5 0.1 0.1 0.1 0.2 0.1 0.3 0.2 0.1 0.1 0.1 0.2 0.2 0.3 0 0.1 0 0.3 0 0.4 0 0.1-0.1 0.2-0.2 0.3 -0.1 0.1-0.2 0.1-0.3 0.2 -0.1 0-0.2 0.1-0.4 0.1 -0.3 0.1-0.6 0-0.9-0.1 -0.3-0.1-0.6-0.2-0.8-0.4l-0.9 1.3c0.4 0.3 0.8 0.4 1.3 0.5 0.5 0.1 1 0.1 1.5 0 0.3-0.1 0.7-0.2 1-0.3 0.3-0.1 0.6-0.3 0.8-0.6 0.2-0.2 0.4-0.5 0.5-0.8s0.1-0.7 0-1.1c-0.1-0.3-0.2-0.6-0.4-0.8s-0.4-0.4-0.6-0.5c-0.2-0.1-0.5-0.2-0.8-0.3 -0.3 0-0.5-0.1-0.8-0.1 -0.2 0-0.3 0-0.5-0.1 -0.1 0-0.3-0.1-0.4-0.1 -0.1 0-0.2-0.1-0.3-0.2 -0.1-0.1-0.1-0.2-0.1-0.3 0-0.1 0-0.3 0-0.4C30.5 42.1 30.6 42 30.7 42z"></path>
                        <path d="M36.3 45.9c0.4 0.3 0.8 0.4 1.3 0.5 0.5 0.1 1 0.1 1.6 0 0.5-0.1 1-0.3 1.5-0.5 0.4-0.3 0.8-0.6 1.1-1s0.5-0.8 0.6-1.3c0.1-0.5 0.1-1 0-1.6 -0.1-0.6-0.3-1.1-0.6-1.5 -0.3-0.4-0.6-0.8-1-1s-0.8-0.4-1.3-0.5c-0.5-0.1-1-0.1-1.6 0 -0.5 0.1-1 0.3-1.5 0.5 -0.4 0.3-0.8 0.6-1.1 1 -0.3 0.4-0.5 0.8-0.6 1.3 -0.1 0.5-0.1 1 0 1.6 0.1 0.6 0.3 1 0.6 1.5C35.6 45.3 35.9 45.7 36.3 45.9zM36.6 42.2c0-0.3 0.1-0.5 0.3-0.8s0.3-0.4 0.6-0.6c0.2-0.2 0.5-0.3 0.8-0.3 0.3-0.1 0.6 0 0.8 0 0.3 0.1 0.5 0.2 0.7 0.3s0.4 0.4 0.5 0.6c0.1 0.2 0.2 0.5 0.3 0.8 0.1 0.3 0.1 0.6 0 0.9 -0.1 0.3-0.1 0.5-0.3 0.8 -0.1 0.2-0.3 0.4-0.6 0.6 -0.2 0.2-0.5 0.3-0.8 0.3 -0.3 0.1-0.6 0-0.8 0 -0.3-0.1-0.5-0.2-0.7-0.3 -0.2-0.2-0.4-0.4-0.5-0.6 -0.1-0.2-0.2-0.5-0.3-0.9C36.5 42.8 36.5 42.5 36.6 42.2z"></path>
                        <path d="M37.5 0C16.8 0 0 16.8 0 37.5c0 13.1 6.7 24.6 16.8 31.3V24.3h-6.8c-0.4 0-0.7-0.3-0.7-0.7s0.3-0.7 0.8-0.7h6.8V16.1c0-0.4 0.3-0.7 0.8-0.7s0.8 0.3 0.8 0.8v6.7h45.4c0.4 0 0.8 0.3 0.8 0.8s-0.3 0.8-0.7 0.8H18.3v45.4c5.6 3.4 12.2 5.3 19.2 5.3 20.7 0 37.5-16.8 37.5-37.5C75 16.8 58.2 0 37.5 0zM61.8 43.6v12.5H21.6v-5.2l-0.9 0.2L19 41l2.7-0.5V27.6h40.2v5.6l0.5-0.1 1.8 10L61.8 43.6z"></path>
                        <polygon points="23.1 54.6 60.3 54.6 60.3 43.9 23.1 50.6 "></polygon>
                        <polygon points="23.1 40.2 60.3 33.5 60.3 29.1 23.1 29.1 "></polygon>
                    </svg>
                    <TimelineItemContent>
                        <h3>2007</h3>
                        <p>CCC purchases it's first building on Ash Way</p>
                    </TimelineItemContent>
                </TimelineItem>
                <TimelineItem>
                    <svg
                        aria-hidden={true}
                        focusable="false"
                        fill="currentColor"
                        width="75"
                        height="75"
                        viewBox="71.7 33.4 336.4 336.4"
                    >
                        <path d="M408.1 201.6a168.2 168.2 0 11-336.4 0 168.2 168.2 0 01336.4 0zm-99.8 2L267 279.4h42.5l40.8-75.5-40.6-75.5H268zm-68 0L199 279.4h42.5l40.8-75.5-40.6-75.5H200zm-65.9-.4L133.2 279h42.4l40.8-75.4-40.6-75.6h-41.6z" />
                    </svg>
                    <TimelineItemContent>
                        <h3>2011</h3>
                        <p>REACH Initiative is launched</p>
                    </TimelineItemContent>
                </TimelineItem>
                <TimelineItem>
                    <svg
                        aria-hidden={true}
                        focusable="false"
                        fill="currentColor"
                        width="75"
                        height="75"
                        viewBox="0 0 75 75"
                    >
                        <path d="M37.5 0C24.8 0 13.5 6.4 6.8 16h16.4v33.5h4.5V26c0 0 6.8-0.1 13.5 0 4.5 0.1 5.2 4.8 5.2 4.8v7.7c0 0 1.3 0 7.1 0s5.5 5.5 5.5 5.5v5.5h3.9v5.8H52c0 4.4-3.6 8-8 8s-8-3.6-8-8H4.5C10.9 67.1 23.3 75 37.5 75 58.2 75 75 58.2 75 37.5 75 16.8 58.2 0 37.5 0z"></path>
                        <path d="M39.7 29.2c-3-0.1-8.5 0-8.5 0v9.4h11.3v-5.8C42.5 32.8 42.8 29.3 39.7 29.2z"></path>
                        <path d="M37.5 55.4c0 3.6 2.9 6.5 6.5 6.5 3.6 0 6.5-2.9 6.5-6.5s-2.9-6.5-6.5-6.5C40.4 48.9 37.5 51.8 37.5 55.4zM43.9 51.8c2 0 3.6 1.6 3.6 3.6s-1.6 3.6-3.6 3.6c-2 0-3.6-1.6-3.6-3.6S41.9 51.8 43.9 51.8z"></path>
                    </svg>
                    <TimelineItemContent>
                        <h3>2016</h3>
                        <p>
                            Central Campus is purchased in the city of Mill
                            Creek
                        </p>
                    </TimelineItemContent>
                </TimelineItem>
                <TimelineItem>
                    <svg
                        aria-hidden={true}
                        focusable="false"
                        width="75"
                        height="75"
                        viewBox="74 31.8 328.9 328.9"
                        fill="currentColor"
                    >
                        <path d="M403 196.3a164.5 164.5 0 11-329 0 164.5 164.5 0 01329 0zm-56-75l-30.7-30.7a7.5 7.5 0 00-10.7 0 38.2 38.2 0 00-11.5 35l-85.7 85.6-15.5-15.5a7.5 7.5 0 00-10.6 0l-35.6 35.6a41.9 41.9 0 000 59.6 41.9 41.9 0 0059.6 0l35.6-35.6a7.5 7.5 0 000-10.6l-15.5-15.5 85.6-85.6c2.2.5 4.6.8 7.1.8 9.8 0 20-4.5 28-12.4a7.5 7.5 0 000-10.6zm-27.9 8.1c-2.3 0-5.6-.5-8-2.9-4.2-4.2-3.8-12.1.5-19.3l18.8 18.8a22.7 22.7 0 01-11.3 3.4z" />
                    </svg>
                    <TimelineItemContent>
                        <h3>2018</h3>
                        <p>
                            Break ground on a new building for the Central
                            Campus.
                        </p>
                    </TimelineItemContent>
                </TimelineItem>
                <TimelineItem>
                    <svg
                        aria-hidden={true}
                        focusable="false"
                        fill="currentColor"
                        width="75"
                        height="75"
                        viewBox="74 31.8 328.9 328.9"
                    >
                        <path d="M351.7 120.8l-40 63-40.4-63zm-133.2 0l66.6 104.5-47.7 74.7-114.2-179.2zm20-89a164.5 164.5 0 100 329 164.5 164.5 0 000-329z" />
                    </svg>
                    <TimelineItemContent>
                        <h3>2019</h3>
                        <p>Change name from Canyon Creek to Venture</p>
                    </TimelineItemContent>
                </TimelineItem>
                <TimelineItem>
                    <svg
                        aria-hidden={true}
                        focusable="false"
                        fill="currentColor"
                        width="75"
                        height="75"
                        viewBox="71.7 33.4 336.4 336.4"
                    >
                        <path d="M172.6 205.1c0 12.2-3 21.5-9 27.8-6 6.4-14.7 9.6-26.3 9.6-11.3 0-20-3.2-26.1-9.6-6-6.4-9.1-15.7-9.1-27.9 0-12 3-21.2 9-27.6 6-6.4 14.8-9.5 26.3-9.5 11.6 0 20.3 3.1 26.2 9.4 6 6.3 9 15.6 9 27.8zm-49.9 0c0 14 4.9 21 14.6 21 5 0 8.7-1.6 11-5 2.4-3.5 3.6-8.8 3.6-16 0-7.2-1.2-12.5-3.6-16-2.4-3.4-6-5.2-10.9-5.2-9.8 0-14.7 7.1-14.7 21.2zm115.5-13c0 8-2.4 14.3-7.1 18.7a28.9 28.9 0 01-20.4 6.6h-5.5v24h-19.6V169h25.1c9.2 0 16 2 20.6 6 4.6 4 7 9.7 7 17zm-33-7.3v16.7h3.6c3 0 5.3-.9 7-2.5a9 9 0 002.6-6.8c0-5-2.7-7.4-8.1-7.4zm87.6 40.7v16h-43V169h43v15.7h-23.4v11.4H291v15.7h-21.8v13.7zm81.7-56.5v72.5h-25.7l-26.5-51h-.4c.6 8 1 14 1 18.3v32.7h-17.4V169H331l26.4 50.4h.3a290 290 0 01-.7-17.6V169zM239.9 33.4a168.2 168.2 0 100 336.5 168.2 168.2 0 000-336.5z" />
                    </svg>
                    <TimelineItemContent>
                        <h3>2020</h3>
                        <p>Grand Opening of our brand new central campus.</p>
                    </TimelineItemContent>
                </TimelineItem>
            </HistoryTimeline>
        );
    }

    return (
        <StyledSection odd={index % 2 === 1} {...sectionProps}>
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
                {index === 1 ? (
                    <Link to={link.href}>{link.text}</Link>
                ) : (
                    <LinkAsButton to={link.href}>{link.text}</LinkAsButton>
                )}
            </div>
            {extraContent}
        </StyledSection>
    );
};

const WhoWeArePage = props => {
    const data = useStaticQuery(graphql`
        query WhoWeArePageQuery {
            sanityWhoWeArePage {
                title
                _rawBlurb
                seoDescription
                contentBlock {
                    text
                    title
                    link {
                        href
                        text
                        type
                    }
                }
                staffPhotos {
                    asset {
                        _id
                    }
                }
            }
        }
    `);

    const {
        title,
        seoDescription,
        _rawBlurb,
        contentBlock,
        staffPhotos,
    } = data.sanityWhoWeArePage;

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />

            <PageIntroWithText title={title} noMargin={true}>
                <BlockContent blocks={_rawBlurb} />
            </PageIntroWithText>
            {contentBlock.map((block, index) => (
                <WhoWeAreSection
                    {...block}
                    index={index}
                    staffPhotos={staffPhotos}
                />
            ))}
        </Layout>
    );
};

WhoWeArePage.propTypes = {};

export default WhoWeArePage;
