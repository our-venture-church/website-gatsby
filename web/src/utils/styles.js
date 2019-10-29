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
