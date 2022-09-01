import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import React, { FC } from 'react';

interface ButtonProps {
   to: string;
   text: string;
   btnStyle?: ButtonStyles
}

type Sizes = 'sm' | 'md' | 'lg'

interface ButtonStyles {
   isOutlined?: boolean;
   isInversed?: boolean;
   useHeaderFont?: boolean;
   size?: Sizes;
}

export const Button: FC<ButtonProps> = ({
   to,
   text,
   btnStyle = {},
   ...other
}) => {
   const { isOutlined, isInversed, useHeaderFont, size } = btnStyle;

   return (
      <ButtonWrapper to={to} isOutlined={isOutlined} isInversed={isInversed} headerFont={useHeaderFont} size={size} {...other}>
         <span>
            {text}
         </span>
      </ButtonWrapper>
   );
};

const ButtonWrapper = styled(Link)`
   --primary-color: var(--bluishGreen-300);
   --secondary-color: var(--gray-100);

   display: block;
   width: fit-content;

   text-decoration: none;
   letter-spacing: var(--spacing-md);

   color: var(--primary-color);
   background-color: var(--secondary-color);
   border-radius: 2px;


   ${({ headerFont }: any) =>
      headerFont &&
      css`
         font-family: var(--ff-header-primary);
      `
   }

   ${({ size }: any) => {
      if (size === 'sm') {
         return css`
            padding: 0.4rem 1.2rem;
            font-size: var(--fs-200);
            font-weight: 200;
         `
      } else if (size === 'lg') {
         return css`
            padding: 0.6rem 1.8rem;
            font-size: var(--fs-500);
            font-weight: 800;
         `
      } else {
         return css`
            padding: 0.5rem 1.5rem;
            font-size: var(--fs-300);
            font-weight: 800;
         `
      }
   }}

   ${({ isOutlined }: any) =>
      isOutlined &&
      css`
         color: var(--primary-color);
         background-color: transparent;
         border: 1px solid var(--primary-color);
      `
   }

   ${({ isInversed }: any) =>
      isInversed &&
      css`
         color: var(--secondary-color);
         background-color: var(--primary-color);
      `
   }

`;

export const BrownButton = styled(Button)`
   --primary-color: var(--gray-100);
   --secondary-color: var(--pr-brown);
`

export const LightGreenButton = styled(Button)`
   --primary-color: var(--gray-100);
   --secondary-color: var(--bluishGreen-100);
`
