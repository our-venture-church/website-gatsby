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
        font-weight: bold;
        margin-bottom: 0.25em;
    }

    input,
    textarea,
    select {
        border: 1px solid rgba(0, 0, 0, 0.5);
        padding: 0.75em;
        width: 100%;
    }

    select {
        display: block;
        color: #444;
        padding-right: 1.35em;
        max-width: 100%;
        box-sizing: border-box;
        margin: 0;
        border-radius: 0;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-color: #fff;
        background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2363c3d3%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
            linear-gradient(to bottom, #fff 0%, #fff 100%);
        background-repeat: no-repeat, repeat;
        background-position: right 0.7em top 50%, 0 0;
        background-size: 0.65em auto, 100%;

        &::-ms-expand {
            display: none;
        }
        &:focus {
            outline-color: ${colors.ventureYellow};
        }
        option {
            font-weight: normal;
        }
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

export const InlineRadio = InlineCheckbox;

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
