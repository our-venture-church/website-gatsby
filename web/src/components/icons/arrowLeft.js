import React from 'react';

const ArrowLeft = props => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 12 12"
        height="1em"
        width="1em"
        focusable="false"
        {...props}
    >
        <title>Arrow left icon</title>
        <line x1="1" y1="6" x2="6" y2="1" />
        <line x1="1" y1="6" x2="6" y2="11" />
        <line x1="1" y1="6" x2="11" y2="6" />
    </svg>
);

export default ArrowLeft;
