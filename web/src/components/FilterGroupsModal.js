import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import { Fieldset, InlineCheckbox, Button } from '../theme/components';
import {
    filterChangeHandler,
    isFiltered,
    parseQueryParamString,
} from '../lib/groups';

const FilterGroupsModal = ({ isOpen, closeModal, allFilters, setFilters }) => {
    const [updatedFilters, setUpdatedFilers] = useState(window.location.hash);

    const updateUrlAndClose = () => {
        window.location.hash = updatedFilters;
        closeModal();
    };

    return (
        <Modal
            closeModal={updateUrlAndClose}
            isOpen={isOpen}
            title="Filter Groups"
            label="Filters the groups search result"
        >
            <form onSubmit={updateUrlAndClose}>
                {allFilters.map(fieldset => {
                    return (
                        <Fieldset key={fieldset.title}>
                            <legend>{fieldset.title}</legend>
                            {fieldset.options.map((option, index) => (
                                <InlineCheckbox key={option.value}>
                                    <input
                                        type={fieldset.type}
                                        name={fieldset.nameAttr}
                                        id={`filter-${fieldset.nameAttr}-${index}`}
                                        value={option.value}
                                        onChange={e => {
                                            setUpdatedFilers(
                                                filterChangeHandler(
                                                    e,
                                                    updatedFilters
                                                )
                                            );
                                        }}
                                        checked={
                                            !isFiltered(
                                                fieldset.nameAttr,
                                                option.value,
                                                parseQueryParamString(
                                                    updatedFilters
                                                )
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
                <Button type="submit" fullSize>
                    See matching groups
                </Button>
            </form>
        </Modal>
    );
};

FilterGroupsModal.propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    allFilters: PropTypes.array,
    setFilters: PropTypes.array,
};

export default FilterGroupsModal;
