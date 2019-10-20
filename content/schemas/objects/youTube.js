import React from 'react';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';

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
            type: 'Custom thumbnail on top of the video',
            type: 'image',
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
