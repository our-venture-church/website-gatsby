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

/**
 * Parse a query oaram string that represents group filtering
 * @param {String} queryParamString
 * @return {Array} Contains an entry for each param
 */
export const parseQueryParamString = queryParamString => {
    if (queryParamString.length <= 1) {
        return [];
    }

    const rawQueryParamsArray = queryParamString.substring(1).split('&');

    if (
        rawQueryParamsArray.length === 0 ||
        rawQueryParamsArray.every(item => item.indexOf('=') === -1)
    ) {
        return [];
    }

    const parsedQueryParamString = [];
    rawQueryParamsArray.forEach(filterString => {
        const filterObj = {};
        const splitFilterString = filterString.split('=');
        filterObj.key = splitFilterString[0];
        filterObj.value = splitFilterString[1].split(',');
        parsedQueryParamString.push(filterObj);
    });

    return parsedQueryParamString;
};

/**
 * Returns the index of the filter state that matches the passed in name.
 * @param {Array} filterStateArray
 * @param {String} name
 * @return {Integer}
 */
const getExistingIndexByName = (filterStateArray, name) => {
    return filterStateArray.findIndex(item => item.key === name);
};

/**
 * Removes the passed in `change` object from the `currentFilterState`.
 * @param {Array} currentFilterState
 * @param {Obj} change
 * @return {Array} the updated filterState
 */
const removeFilterFromQuery = (currentFilterState, change) => {
    const existingEntryIndex = getExistingIndexByName(
        currentFilterState,
        change.name
    );

    if (existingEntryIndex === -1) {
        return [...currentFilterState];
    }

    const filterToUpdate = currentFilterState[existingEntryIndex];

    if (filterToUpdate.value.length === 1) {
        // If the filter only has one value, remove the entire filter
        currentFilterState.splice(existingEntryIndex, 1);
        return currentFilterState;
    } else {
        // If the filter has multiple values, remove just the one.
        const updatedFilterValues = filterToUpdate.value.filter(
            filterValue => filterValue !== change.value
        );
        currentFilterState[existingEntryIndex].value = updatedFilterValues;
        return currentFilterState;
    }
};

/**
 * Adds the passed in `change` object to the `currentFilterState`.
 * @param {Array} currentFilterState
 * @param {Obj} change
 * @return {Array} the updated filterState
 */
const addFilterToQuery = (currentFilterState, change) => {
    const existingEntryIndex = getExistingIndexByName(
        currentFilterState,
        change.name
    );

    let updatedFilterState = [...currentFilterState];
    if (existingEntryIndex > -1) {
        // If this filter items already exists, we want to add to it
        updatedFilterState[existingEntryIndex].value.push(change.value);
    } else {
        // If it doesn't exist, we want to create an entry
        updatedFilterState.push({ key: change.name, value: [change.value] });
    }

    return updatedFilterState;
};

/**
 * Converts the filterState Array of objects into a string to be used as the URL's queryParam.
 * @param {Array} filterState
 * @return {String}
 */
const stringifyFilterState = filterState => {
    if (filterState.length === 0) {
        return '';
    }

    const stringifiedFiltersArray = filterState.map(
        ({ key, value }) => `${key}=${value.join(',')}`
    );

    return `#${stringifiedFiltersArray.join('&')}`;
};

/**
 * Gets an update query param based on the existing state, and whether the change is being added or
 * removed from said state.
 * @param {String} currentState as represented by the URL's query param
 * @param {Obj} change An object representing the change to the filterState
 * @return {String}
 */
const buildQueryParam = (currentState, change) => {
    const currentFilterState = parseQueryParamString(currentState);
    let updatedFilterState;
    if (change.checked) {
        // Remove from query
        updatedFilterState = removeFilterFromQuery(currentFilterState, change);
    } else {
        // add to query
        updatedFilterState = addFilterToQuery(currentFilterState, change);
    }
    return stringifyFilterState(updatedFilterState);
};

export const filterChangeHandler = (e, currentHash) => {
    const { name, value, checked } = e.target;
    const updatedQueryParam = buildQueryParam(currentHash, {
        name,
        value,
        checked,
    });

    return updatedQueryParam;
};

export const isFiltered = (key, value, filterState) => {
    return filterState.some(filter => {
        return filter.key === key && filter.value.includes(value);
    });
};
