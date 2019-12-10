import { FaRegHandshake as icon } from 'react-icons/fa';

export default {
    name: 'whoWeArePage',
    title: 'Who We Are Page',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Page title',
            type: 'string',
        },
    ],
    preview: {
        select: { title: 'title' },
    },
};
