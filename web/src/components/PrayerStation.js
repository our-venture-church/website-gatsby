import React from 'react';
import PropTypes from 'prop-types';
import BlockContent from './block-content';

const PrayerStation = ({ title, year, scripture, content, _key }) => (
    <div key={_key}>
        <h2>
            {title} - {year}
        </h2>
        {scripture && (
            <p>
                <b>{scripture.reference}</b>
                {scripture.text}
            </p>
        )}
        <BlockContent blocks={content} />
    </div>
);

PrayerStation.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.object.isRequired,
    scripture: PropTypes.object,
    content: PropTypes.object.isRequired,
    _key: PropTypes.string.isRequired,
};

export default PrayerStation;
