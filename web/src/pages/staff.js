import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BasicPageIntro from '../components/BasicPageIntro';
import { getDefaultPadding } from '../utils/styles';
import colors from '../theme/tokens/colors';
import EmailLink from '../components/EmailLink';
import Email from '../components/icons/email';

const StyledLayout = styled.div`
    ${getDefaultPadding()};
`;

const StyledStaffList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 3rem;
    margin: 0;
`;

const StyledStaffItem = styled.li`
    list-style: none;
`;

const StyledStaffImage = styled.img`
    margin-bottom: 0.25rem;
    max-width: 100%;
`;

const StyledStaffImagePlaceholder = styled.div`
    background: ${colors.cinderGray};
    line-height: 1;
    margin-bottom: 0.25rem;
    position: relative;

    &:before {
        color: ${colors.charcoalBlack};
        content: 'Photo coming soon';
        text-align: center;
        display: block;
        top: 50%;
        position: absolute;
        width: 100%;
        margin-top: -0.5em;
        line-height: 1;
    }

    &:after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
`;

const StyledStaffInfo = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const StyledStaffName = styled.h3`
    flex: 1;
    span {
        display: block;
        font-size: 0.75em;
        font-weight: normal;
        margin-top: 0.25em;
    }
`;

const StyledEmailLink = styled(EmailLink)`
    border: none;
    margin-right: -0.67em;
    margin-top: -0.5em;
    padding: 0.67em;
    text-decoration: none;
`;

const getStaffMember = staffObj => {
    const displayName = staffObj.honorific
        ? `${staffObj.honorific} ${staffObj.name}`
        : staffObj.name;

    return (
        <StyledStaffItem key={staffObj.id}>
            {staffObj.image ? (
                <StyledStaffImage
                    src={imageUrlFor(buildImageObj(staffObj.image))
                        .width(600)
                        .height(600)
                        .fit('crop')
                        .auto('format')
                        .url()}
                    alt=""
                />
            ) : (
                <StyledStaffImagePlaceholder></StyledStaffImagePlaceholder>
            )}
            <StyledStaffInfo>
                <StyledStaffName>
                    {displayName} <span>{staffObj.title}</span>
                </StyledStaffName>
                {staffObj.email && (
                    <StyledEmailLink
                        emailAddress={staffObj.email}
                        aria-label={`Email ${displayName}`}
                    >
                        <Email aria-hidden="true" />
                    </StyledEmailLink>
                )}
            </StyledStaffInfo>
        </StyledStaffItem>
    );
};

const getStaffList = ({ title, members }) => {
    return (
        <React.Fragment>
            <h2>{title}</h2>
            <StyledStaffList>
                {members.map(staffMember => getStaffMember(staffMember))}
            </StyledStaffList>
        </React.Fragment>
    );
};

const StaffPage = () => {
    const data = useStaticQuery(graphql`
        query StaffPageQuery {
            sanityStaffPage {
                title
                leadTeam {
                    id
                    name
                    personType
                    honorific
                    title
                    slug {
                        current
                    }
                    image {
                        asset {
                            _id
                        }
                    }
                }
                staff {
                    id
                    name
                    personType
                    title
                    honorific
                    slug {
                        current
                    }
                    image {
                        asset {
                            _id
                        }
                    }
                    email
                }
            }
        }
    `);

    const { title, leadTeam, staff } = data.sanityStaffPage;

    const staffLists = [
        {
            title: 'Lead Pastor',
            members: leadTeam,
        },
        {
            title: 'Staff',
            members: staff,
        },
    ];

    return (
        <Layout>
            <SEO title="Staff" desciption="Meet the staff at Venture Church." />
            <BasicPageIntro title={title} />
            <StyledLayout>
                {staffLists.map(list => getStaffList(list))}
            </StyledLayout>
        </Layout>
    );
};

StaffPage.propTypes = {
    bio: PropTypes.node,
    name: PropTypes.string,
    profilePhoto: PropTypes.string,
};

export default StaffPage;
