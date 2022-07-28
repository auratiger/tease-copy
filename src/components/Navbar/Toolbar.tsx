import React from "react";
import styled from "styled-components";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { FaPinterest } from "@react-icons/all-files/fa/FaPinterest";
import { SiTiktok } from "@react-icons/all-files/si/SiTiktok";

const Toolbar = () => {
   return (
      <Wrapper>
         <FiInstagram size={18} />
         <FaFacebookF />
         <FaPinterest />
         <SiTiktok />
      </Wrapper>
   );
};

const Wrapper = styled.section`
   width: 100%;
   height: 2rem;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 0.5rem;

   border-bottom: 1px solid gray;
`;

export default Toolbar;
