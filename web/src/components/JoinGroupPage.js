import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import SEO from './seo';
import Layout from './layout';
import Modal from './Modal';
import BasicPageIntro from './BasicPageIntro';
import LinkAsButton from './LinkAsButton';
import { getDefaultPadding } from '../utils/styles';
import Grid from '../layouts/Grid';
import colors from '../theme/tokens/colors';
import { Fieldset, InlineCheckbox, Button } from '../theme/components';
import GroupMeta from './GroupMeta';
import {
    GROUPS_DAY,
    GROUPS_GENDER,
    GROUPS_AGE,
    GROUPS_KID_FRIENDLY,
} from '../constants';

const StyledContainer = styled.div`
    ${getDefaultPadding()}
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 1rem;

    @media (min-width: 839px) {
        grid-gap: 4rem;
    }
`;

const StyledClosed = styled.b`
    color: ${colors.mintBlue};
    text-transform: uppercase;
`;

// const StyledModalContainer = styled(Modal.Container)`
//     && {
//         background: ${colors.charcoalBlack};
//         color: ${colors.white};
//         max-height: 100%;
//         overflow: scroll;
//         width: 100%;
//         z-index: 10;
//     }
// `;

/**
 * Parse a query oaram string that represents group filtering
 * @param {String} queryParamString
 * @return {Array} Contains an entry for each param
 */
const parseQueryParamString = queryParamString => {
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

const filterChangeHandler = e => {
    const { name, value, checked } = e.target;
    const updatedQueryParam = buildQueryParam(window.location.hash, {
        name,
        value,
        checked,
    });

    window.location.hash = updatedQueryParam;

    return;
};

const isFiltered = (key, value, filterState) => {
    return filterState.some(filter => {
        return filter.key === key && filter.value.includes(value);
    });
};

class JoinGroupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFilters: false,
            filters:
                window && window.location
                    ? parseQueryParamString(window.location.hash)
                    : [],
        };
    }

    componentDidMount() {
        window.onhashchange = e => {
            this.setState({
                filters: parseQueryParamString(window.location.hash),
            });
        };
    }

    openFilterDialog = () => {
        this.setState({
            showFilters: true,
        });
    };

    closeFilterDialog = () => {
        this.setState({
            showFilters: false,
        });
    };

    render() {
        const { data } = this.props;
        const { nodes: groups } = data.allSanityGroup;
        const { nodes: campuses } = data.allSanityCampus;

        const filters = [
            {
                title: 'Day of the week',
                type: 'checkbox',
                nameAttr: 'day',
                options: GROUPS_DAY,
            },
            {
                title: 'Gender',
                type: 'checkbox',
                nameAttr: 'gender',
                options: GROUPS_GENDER,
            },
            {
                title: 'Age',
                type: 'checkbox',
                nameAttr: 'age',
                options: GROUPS_AGE,
            },
            {
                title: 'Kids',
                type: 'checkbox',
                nameAttr: 'kids',
                options: GROUPS_KID_FRIENDLY,
            },
            {
                title: 'Campus',
                type: 'checkbox',
                nameAttr: 'campus',
                options: campuses.map(campus => ({
                    title: campus.title,
                    value: campus.id,
                })),
            },
        ];

        const exclusionFilters = this.state.filters;

        const filteredGroups = groups.filter(group => {
            return !exclusionFilters.some(filter => {
                return filter.value.some(val => {
                    return val === group[filter.key];
                });
            });
        });

        console.log('render:showFilters --', this.state.showFilters);

        return (
            <Layout>
                <SEO
                    title="Join a Group"
                    description="Find a group to live life with. We have groups all over the area."
                />
                <BasicPageIntro title="Join a Group" />
                <Button onClick={this.openFilterDialog}>Filter Results</Button>
                <Modal
                    closeModal={this.closeFilterDialog}
                    isOpen={this.state.showFilters}
                    title="Filter Groups"
                    label="Filters the groups search result"
                >
                    <form onSubmit={this.closeFilterDialog}>
                        {filters.map(fieldset => {
                            return (
                                <Fieldset>
                                    <legend>{fieldset.title}</legend>
                                    {fieldset.options.map((option, index) => (
                                        <InlineCheckbox>
                                            <input
                                                type={fieldset.type}
                                                name={fieldset.nameAttr}
                                                id={`filter-${fieldset.nameAttr}-${index}`}
                                                value={option.value}
                                                onChange={filterChangeHandler}
                                                checked={
                                                    !isFiltered(
                                                        fieldset.nameAttr,
                                                        option.value,
                                                        this.state.filters
                                                    )
                                                }
                                            />
                                            <label
                                                htmlFor={`filter-${fieldset.nameAttr}-${index}`}
                                            >
                                                {option.title}
                                            </label>
                                        </InlineCheckbox>
                                    ))}
                                </Fieldset>
                            );
                        })}
                        <Button onClick={this.closeFilterDialog} fullSize>
                            See matching groups
                        </Button>
                    </form>
                </Modal>
                <StyledContainer>
                    {filteredGroups && filteredGroups.length > 0 ? (
                        <div>
                            <p>
                                {filteredGroups.length} group
                                {filteredGroups.length !== 1 && 's'} found.
                            </p>
                            <Grid>
                                {filteredGroups.map(group => {
                                    const groupUrl = `/groups/join/${group.slug.current}`;
                                    return (
                                        <li key={group.id}>
                                            <h2>
                                                <Link to={groupUrl}>
                                                    {group.title}
                                                </Link>
                                            </h2>
                                            <p>{group.blurb}</p>
                                            {group.status === 'closed' ? (
                                                <p>
                                                    This group is{' '}
                                                    <StyledClosed>
                                                        closed
                                                    </StyledClosed>{' '}
                                                    and not accepting new
                                                    registrations.
                                                </p>
                                            ) : (
                                                <Fragment>
                                                    <GroupMeta {...group} />
                                                    <LinkAsButton
                                                        to={groupUrl}
                                                        aria-label="Get details or join"
                                                    >
                                                        Join
                                                    </LinkAsButton>
                                                </Fragment>
                                            )}
                                        </li>
                                    );
                                })}
                            </Grid>
                        </div>
                    ) : (
                        <p>There are no groups that match your filters.</p>
                    )}
                </StyledContainer>
            </Layout>
        );
    }
}

JoinGroupPage.propTypes = {};

export default JoinGroupPage;
