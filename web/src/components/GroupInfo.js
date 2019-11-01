import React from 'react';
import PropTypes from 'prop-types';
import LinkAsButton from './LinkAsButton';
import { capitalizeFirstLetter } from '../lib/helpers';

const getMeetingText = ({ day, time, city, meetingFrequency }) => {
    const frequencyText = meetingFrequency ? ` (${meetingFrequency})` : '';
    return `Meets ${capitalizeFirstLetter(
        day
    )}s${frequencyText} at ${time} in ${city}`;
};

const GroupInfo = props => {
    const { age, gender, kids, campus } = props;
    const categories = [age, gender, kids, campus.title];
    console.log(categories);
    return (
        <React.Fragment>
            <ul>{categories.map(item => (item ? <li>{item}</li> : null))}</ul>
            <p>{getMeetingText(props)}</p>
        </React.Fragment>
    );
};

GroupInfo.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.object.isRequired,
    link: PropTypes.object,
    image: PropTypes.object.isRequired,
    key: PropTypes.string.isRequired,
};

export default GroupInfo;
