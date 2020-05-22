import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const slideUp = keyframes`
    from {
        transform: scale3d(.5, .5, .5);
    }
    to {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }
`;
