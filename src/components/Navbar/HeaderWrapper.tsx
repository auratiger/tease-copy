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
   padding-inline: 5rem;
   margin-inline: auto;
`;

export default HeaderWrapper;
