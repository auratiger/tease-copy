import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import React, { FC } from 'react';

interface ButtonProps {
   url: string;
   text: string;
   color?: 'primary' | 'secondary' | 'accent';
   isOutlined?: boolean;
}

const Button: FC<ButtonProps> = ({
   url,
   text,
   color = 'primary',
   isOutlined = false,
   ...other
}) => {
   return (
      <ButtonWrapper to={url} color={color} isOutlined={isOutlined} {...other}>
         <span>
            {text}
         </span>
      </ButtonWrapper>
   );
};

const ButtonWrapper = styled(Link)`
   display: block;
   width: fit-content;
   padding: 0.5rem 1rem;

   text-decoration: none;
   letter-spacing: var(--spacing-md);

   color: var(--bluishGreen-300);
   background-color: white;
   border-radius: 2px;

   ${({ isOutlined }: any) =>
      isOutlined &&
      css`
         color: var(--bluishGreen-300);
         background-color: transparent;
         border: 1px solid var(--bluishGreen-300);
      `}

   & > span {
      font-family: var(--ff-header-primary);
      font-size: var(--fs-600);
      font-weight: 800;
   }
`;

const colors = {
   primary: '#1C76E2',
   secondary: '#E10D30',
   accent: '#155EC2',
};

export default Button;
