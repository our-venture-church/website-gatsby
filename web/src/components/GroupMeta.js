import React from 'react';
import { getTitleForValue } from '../lib/groups';
import styled from 'styled-components';

const StyledP = styled.p`
    margin-bottom: calc(1.45rem / 2);
`;

const StyledList = styled.ul`
    list-style: none;
    margin-left: 0;
`;

const StyledListItem = styled.li`
    display: inline-block;
    font-size: 0.75rem;
    margin-bottom: 0;
    margin-right: 0.75em;

    &::after {
        content: ':';
        display: inline-block;
        margin-left: 0.75em;
    }

    &:last-child {
        margin: 0;

        &::after {
            content: '';
            margin: 0;
        }
    }
`;

const GroupMeta = ({
    time,
    kids,
    age,
    gender,
    day,
    city,
    campus,
    meetingFrequency,
}) => {
    const metaData = [
        campus && campus.title,
        getTitleForValue('kids', kids),
        getTitleForValue('age', age),
        getTitleForValue('gender', gender),
    ];

    return (
        <div>
            <StyledP>
                {getTitleForValue('day', day)}{' '}
                {meetingFrequency ? `(${meetingFrequency}) ` : null}at {time} in{' '}
                {city}.
            </StyledP>
            <StyledList>
                {metaData.map(item =>
                    value ? (
                        <StyledListItem key={item}>{item}</StyledListItem>
                    ) : null
                )}
            </StyledList>
        </div>
    );
};

export default GroupMeta;
