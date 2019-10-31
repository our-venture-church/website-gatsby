import { MdPeople as icon } from 'react-icons/md';

export default {
    name: 'group',
    title: 'Group',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "Mom's Night Out",
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'signupId',
            title: 'Group #',
            type: 'number',
            validation: Rule => Rule.integer().required(),
            description:
                'Group # that will be used for tracking this group during signups.',
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            validation: Rule => Rule.required(),
            description:
                '"Open": Accepting new members. "Closed": Group is full. "Hidden": Hide from website.',
            options: {
                list: [
                    { title: 'Open', value: 'open' },
                    { title: 'Closed', value: 'closed' },
                    { title: 'Hidden', value: 'hidden' },
                ],
                layout: 'radio',
            },
        },
        {
            name: 'leader',
            title: 'Leader',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'day',
            title: 'Day of the week',
            type: 'string',
            options: {
                list: [
                    { title: 'Sunday', value: 'sunday' },
                    { title: 'Monday', value: 'monday' },
                    { title: 'Tuesday', value: 'tuesday' },
                    { title: 'Wednesday', value: 'wednesday' },
                    { title: 'Thursday', value: 'thursday' },
                    { title: 'Friday', value: 'friday' },
                    { title: 'Saturday', value: 'saturday' },
                ],
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'meetingFrequency',
            title: 'Meeting frequency',
            type: 'string',
            description:
                "If the group doesn't meet weekly, how often does it meet? e.g. every other week, 1st and 3rd Sunday of the month, etc.",
        },
        {
            name: 'time',
            title: 'Time',
            type: 'string',
            description: 'e.g. 5:00 PM, 10:30 AM, etc.',
        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
            description: 'Where they meet.',
            validation: Rule => Rule.required(),
        },
        {
            name: 'kids',
            title: 'Kid Friendly?',
            type: 'string',
            options: {
                list: [
                    { title: 'Adults only', value: 'adultsOnly' },
                    { title: 'Kid friendly', value: 'kidFriendly' },
                ],
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'gender',
            title: 'Gender',
            type: 'string',
            options: {
                list: [
                    { title: 'Mixed', value: 'mixed' },
                    { title: 'Women only', value: 'women' },
                    { title: 'Men only', value: 'men' },
                ],
            },
        },
        {
            name: 'age',
            title: 'Age Range',
            type: 'string',
            options: {
                list: [
                    { title: 'Mixed ages', value: 'mixed' },
                    { title: 'Grades 7 - 8', value: 'g7--8' },
                    { title: 'Grades 8 - 12', value: 'g8-12' },
                    { title: 'Grades 9 - 12', value: 'g9-12' },
                    { title: 'Ages: 30-44', value: '30-44' },
                    { title: 'Ages: 40-54', value: '40-54' },
                    { title: 'Ages: 55+', value: '55+' },
                    { title: 'Young Adults', value: 'ya' },
                ],
            },
        },
        {
            name: 'campus',
            title: 'Campus',
            type: 'reference',
            to: [{ type: 'campus' }],
            description: 'Leave blank if this group is not campus specific.',
        },
        {
            name: 'description',
            title: 'Full Description',
            type: 'blockContent',
        },
        {
            name: 'blurb',
            title: 'Blurb',
            type: 'text',
            description: 'A short summary of the group.',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
    },
};
