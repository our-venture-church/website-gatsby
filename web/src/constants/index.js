// UTILS
export const KEYCODES = {
    ESC: 27,
};

// ACTIONS
export const OPEN_NAV = 'OPEN_NAV';
export const CLOSE_NAV = 'CLOSE_NAV';
export const OPEN_DROPDOWN = 'OPEN_DROPDOWN';
export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN';
export const ENABLE_NAV_DRAWER = 'ENABLE_NAV_DRAWER';
export const DISABLE_NAV_DRAWER = 'DISABLE_NAV_DRAWER';

export const HERO_TYPES = {
    CURRENT_SERIES: 'currentSeries',
    SERVICE_TIMES: 'serviceTimes',
    CUSTOM: 'custom',
};

export const GROUPS_KID_FRIENDLY = [
    {
        title: 'Adults Only',
        value: 'adultsOnly',
    },
    {
        title: 'Kid Friendly',
        value: 'kidFriendly',
    },
];

export const GROUPS_GENDER = [
    { title: 'Mixed gender', value: 'mixed' },
    { title: 'Women only', value: 'women' },
    { title: 'Men only', value: 'men' },
];

export const GROUPS_STATUS = [
    { title: 'Open', value: 'open' },
    { title: 'Closed', value: 'closed' },
    { title: 'Hidden', value: 'hidden' },
];

export const GROUPS_DAY = [
    { title: 'Sunday', value: 'sunday' },
    { title: 'Monday', value: 'monday' },
    { title: 'Tuesday', value: 'tuesday' },
    { title: 'Wednesday', value: 'wednesday' },
    { title: 'Thursday', value: 'thursday' },
    { title: 'Friday', value: 'friday' },
    { title: 'Saturday', value: 'saturday' },
];

export const GROUPS_AGE = [
    { title: 'Mixed ages', value: 'mixed' },
    { title: 'Grades 7 - 8', value: 'g7--8' },
    { title: 'Grades 8 - 12', value: 'g8-12' },
    { title: 'Grades 9 - 12', value: 'g9-12' },
    { title: 'Ages: 30-44', value: '30-44' },
    { title: 'Ages: 40-54', value: '40-54' },
    { title: 'Ages: 55+', value: '55+' },
    { title: 'Young Adults', value: 'ya' },
];
