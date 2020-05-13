import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from './Modal';
import {
    Fieldset,
    InlineCheckbox,
    Button,
    TextButton,
} from '../theme/components';
import {
    filterChangeHandler,
    isFiltered,
    parseQueryParamString,
} from '../lib/groups';
import colors from '../theme/tokens/colors';

const StyledModal = styled(Modal)`
    .ReactModal__Content {
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
    }
    h2 {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
    fieldset {
        padding-left: 1rem;
        padding-right: 1rem;

        @media (min-width: 500px) {
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }
    form {
        margin-bottom: 0;
    }
`;

const ModalButtons = styled.div`
    background: ${colors.charcoalBlack};
    border-top: 1px solid #fff;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    position: sticky;

    @media (min-width: 500px) {
        padding: 1.5rem 2rem;
    }
`;

const FilterGroupsModal = ({ isOpen, closeModal, allFilters }) => {
    const [updatedFilters, setUpdatedFilers] = useState(window.location.hash);

    const updateUrlAndClose = () => {
        window.location.hash = updatedFilters;
        closeModal();
    };

    return (
        <StyledModal
            closeModal={updateUrlAndClose}
            isOpen={isOpen}
            title="Filter Groups"
            label="Filters the groups search result"
            className="filter-dialog"
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
                <ModalButtons>
                    <TextButton
                        type="button"
                        onClick={() => {
                            setUpdatedFilers('');
                        }}
                    >
                        Reset
                    </TextButton>
                    <Button type="submit">See matching groups</Button>
                </ModalButtons>
            </form>
        </StyledModal>
    );
};

FilterGroupsModal.propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    allFilters: PropTypes.array,
    setFilters: PropTypes.array,
};

export default FilterGroupsModal;
