import React from 'react';
import styled from 'styled-components';
import { Navbar, Toolbar } from '@common';

const HeaderWrapper = ({ ...other }) => {

   return (
      <Wrapper {...other}>
         <Toolbar />
         <Navbar />
      </Wrapper>
   );
};

const Wrapper = styled.header`
   width: 100%;
   z-index: 20;
   position: absolute;
   color: white;
   display: grid;
   gap: 2rem;
`;

export default HeaderWrapper;
