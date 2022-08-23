import { keyframes } from 'styled-components';

export const slideUp = keyframes`
   0% {
      transform: translateY(100%);
      opacity: 0;
   }
   100% {
      transform: translateY(0);
      opacity: 1;
   }
`;

export const timelineLoader = keyframes`
   0% {
      width: 0%;
   }
   100% {
      width: 100%;
   }
`;

export const slideDown = keyframes`
   0% {
      transform: translateY(-100%);
      opacity: 0;
   }
   100% {
      transform: translateY(0);
      opacity: 1;
   }
`;
