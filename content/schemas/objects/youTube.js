import React from 'react';

const Preview = ({ value }) => {
    const { url } = value;
    const id = getYouTubeId(url);
    return <YouTube videoId={id} />;
};

export default {
    name: 'youtube',
    type: 'object',
    title: 'YouTube Embed',
    fields: [
        {
            name: 'url',
            title: 'YouTube video URL',
            type: 'url',
        },
        {
            name: 'thumbnail',
            title: 'Custom thumbnail',
            type: 'image',
            description: 'If not added, the YouTube thumbnail will be used.',
            options: {
                hotspot: true,
            },
        },
    ],
    preview: {
        select: {
            url: 'url',
        },
        component: Preview,
    },
};
