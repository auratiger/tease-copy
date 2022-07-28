import React from "react";
import styled from "styled-components";
import { Navbar, Toolbar } from "@components/Navbar";

const HeaderWrapper = () => {
   return (
      <Wrapper>
         <Toolbar />
         <Navbar />
      </Wrapper>
   );
};

const Wrapper = styled.header`
   width: 100%;
   margin-inline: auto;
   padding: 0 40px;
   z-index: 28;
   position: fixed;
   color: white;
`;

export default HeaderWrapper;
