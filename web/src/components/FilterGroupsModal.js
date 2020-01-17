import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import { Fieldset, InlineCheckbox, Button } from '../theme/components';
import { filterChangeHandler, isFiltered } from '../lib/groups';

const FilterGroupsModal = ({ isOpen, closeModal, allFilters, setFilters }) => {
    return (
        <Modal
            closeModal={closeModal}
            isOpen={isOpen}
            title="Filter Groups"
            label="Filters the groups search result"
        >
            <form onSubmit={closeModal}>
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
                                        onChange={filterChangeHandler}
                                        checked={
                                            !isFiltered(
                                                fieldset.nameAttr,
                                                option.value,
                                                setFilters
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
                <Button onClick={closeModal} fullSize>
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
