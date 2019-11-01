import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BasicPageIntro from '../../components/BasicPageIntro';
import { getDefaultPadding } from '../../utils/styles';

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

const StyledStaffName = styled.h3`
    span {
        display: block;
        font-size: 0.75em;
        font-weight: normal;
    }
`;

const getStaffMember = staffObj => {
    if (!staffObj.image) {
        return null;
    }
    return (
        <StyledStaffItem key={staffObj.id}>
            {staffObj.image && (
                <StyledStaffImage
                    src={imageUrlFor(buildImageObj(staffObj.image))
                        .width(600)
                        .height(600)
                        .fit('crop')
                        .auto('format')
                        .url()}
                    alt=""
                />
            )}
            <StyledStaffName>
                {staffObj.name} <span>{staffObj.title}</span>
            </StyledStaffName>
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
            allSanityPerson(
                filter: { personType: { ne: "volunteer" } }
                sort: { fields: name, order: ASC }
            ) {
                nodes {
                    id
                    name
                    personType
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
            }
        }
    `);

    const { nodes: staffMembers } = data.allSanityPerson;

    const leadTeam = staffMembers.filter(staffObj =>
        staffObj.personType.includes('leadTeam')
    );
    const nonLeadTeam = staffMembers.filter(
        staffObj => !staffObj.personType.includes('leadTeam')
    );

    const staffLists = [
        {
            title: 'Lead Team',
            members: leadTeam,
        },
        {
            title: 'Staff',
            members: nonLeadTeam,
        },
    ];

    return (
        <Layout>
            <SEO title="Staff" desciption="Meet the staff at Venture Church." />
            <BasicPageIntro title="Meet the staff" />
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
