import React from 'react';
import styled from 'styled-components';
import { Navbar, Toolbar } from '@common';

const HeaderWrapper = ({ ...other }) => {

   return (
      <Wrapper className="wrapper"  {...other}>
         <Toolbar />
         <Navbar />
      </Wrapper>
   );
};

const Wrapper = styled.header`
   width: 100%;
   z-index: 20;
   position: absolute;
   color: var(--gray-100);
   display: grid;
   gap: 2rem;
`;

export default HeaderWrapper;
