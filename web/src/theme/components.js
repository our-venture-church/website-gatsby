import styled from 'styled-components';
import colors from './tokens/colors';

export const Form = styled.form``;

export const FormField = styled.div`
    margin-bottom: 2rem;

    label {
        display: block;
        margin-bottom: 0.25em;
    }

    input,
    textarea {
        padding: 0.75em;
        width: 100%;
    }

    textarea {
        height: 200px;
    }

    button {
        background: ${colors.ventureYellow};
        border: 1px solid ${colors.ventureYellow};
        border-radius: 3px;
        color: ${colors.charcoalBlack};
        cursor: pointer;
        display: block;
        padding: 0.5em 0.75em;
        text-align: center;
        text-decoration: none;
        width: 100%;

        &:hover,
        &:focus {
            background-color: ${colors.ventureYellow};
            border-color: ${colors.ventureYellow};
            color: ${colors.charcoalBlack};
        }
    }
`;
