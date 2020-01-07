import {
    GROUPS_AGE,
    GROUPS_DAY,
    GROUPS_GENDER,
    GROUPS_KID_FRIENDLY,
    GROUPS_STATUS,
} from '../constants';

const dataType = {
    age: GROUPS_AGE,
    day: GROUPS_DAY,
    gender: GROUPS_GENDER,
    kids: GROUPS_KID_FRIENDLY,
    status: GROUPS_STATUS,
};

export const getTitleForValue = (type, value) => {
    if (typeof type === 'undefined' || !dataType[type]) {
        return '';
    }

    const found = dataType[type].find(item => item.value === value);
    return found ? found.title : '';
};
