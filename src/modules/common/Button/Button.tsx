import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import React, { FC } from 'react';

interface ButtonProps {
   url: string;
   text: string;
   btnStyle: ButtonStyles
}

interface ButtonStyles {
   isOutlined?: boolean;
   isInversed?: boolean;
   useHeaderFont?: boolean;
}

export const Button: FC<ButtonProps> = ({
   url,
   text,
   btnStyle = {},
   ...other
}) => {
   const { isOutlined, isInversed, useHeaderFont } = btnStyle;

   return (
      <ButtonWrapper to={url} isOutlined={isOutlined} isInversed={isInversed} headerFont={useHeaderFont} {...other}>
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
   padding: 0.5rem 1.5rem;

   text-decoration: none;
   letter-spacing: var(--spacing-md);

   color: var(--primary-color);
   background-color: var(--secondary-color);
   border-radius: 2px;

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

   font-size: var(--fs-500);
   font-weight: 800;

   ${({ headerFont }: any) =>
      headerFont &&
      css`
         font-family: var(--ff-header-primary);
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
   font-size: var(--fs-500)
`
