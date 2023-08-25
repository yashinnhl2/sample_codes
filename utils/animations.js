/* eslint-disable import/prefer-default-export */

import { keyframes } from 'styled-components';

export const scaleUpAnimation = keyframes`
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(1);
  }
`;

export const slideUpAnimation = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`;

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
