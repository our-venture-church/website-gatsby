import colors from '../theme/tokens/colors';

export const getLayoutTransitionFor = propertyName =>
    `transition: .15s ${propertyName};`;

export const getDefaultPadding = () => `
    padding-left: 1rem;
    padding-right: 1rem;
    ${getLayoutTransitionFor('padding')}

    @media (min-width: 500px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
`;

export const buttonStyles = ({ fullSize, inverted } = {}) => {
    const backgroundColor = inverted
        ? colors.ventureYellow
        : colors.charcoalBlack;
    const textColor = inverted ? colors.charcoalBlack : colors.ventureYellow;
    return `
    background: ${backgroundColor};
    border: 1px solid ${colors.ventureYellow};
    border-radius: 3px;
    color: ${textColor};
    display: ${() => (fullSize ? 'block' : 'inline-block')};
    padding: 0.5em 0.75em;
    text-align: center;
    text-decoration: none;

    &:hover,
    &:focus {
        background-color: ${textColor};
        color: ${backgroundColor};
    }`;
};
