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
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled(Link)`
  display: block;
  width: fit-content;
  padding: 0.5rem 1rem;

  text-decoration: none;
  letter-spacing: var(--spacing-md);

  color: white;
  background-color: brown;

  ${({ isOutlined }) =>
    isOutlined &&
    css`
      color: brown;
      background-color: transparent;
      border: 1px solid brown;
    `}

  border-radius: 5px;
`;

const colors = {
  primary: '#1C76E2',
  secondary: '#E10D30',
  accent: '#155EC2',
};

export default Button;
