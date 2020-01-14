import styled from 'styled-components';
import colors from './tokens/colors';

export const Form = styled.form``;

export const Button = styled.button`
    background: ${colors.ventureYellow};
    border: 1px solid ${colors.ventureYellow};
    border-radius: 3px;
    color: ${colors.charcoalBlack};
    cursor: pointer;
    display: ${props => (props.fullSize ? 'block' : 'inline-block')};
    padding: 0.5em 0.75em;
    text-align: center;
    text-decoration: none;

    &:hover,
    &:focus {
        background-color: ${colors.ventureYellow};
        border-color: ${colors.ventureYellow};
        color: ${colors.charcoalBlack};
    }
`;

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

export const Fieldset = styled.fieldset`
    border: none;

    legend {
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
`;

export const InlineCheckbox = styled.div`
    margin-bottom: 5px;

    input {
        margin-right: 0.5em;
    }
`;

// 16:9 Aspect Ratio
export const VideoContainer = styled.div`
    height: 0;
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;

    > div {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
`;

export const TagMe = styled.div`
    background: ${props =>
        props.secondary ? colors.mintBlue : colors.ventureYellow};
    color: ${colors.charcoalBlack};
    display: inline-block;
    padding: 0.5em 0.75em;
`;

export const SocialLinkList = styled.ul`
    font-size: 1.5rem;
    list-style: none;
    margin-bottom: 0;
    margin-left: 0;
    white-space: nowrap;

    a {
        padding: 0 0.5em 0 0;
    }

    li:last-child {
        a {
            padding-right: 0;
        }
    }
`;
