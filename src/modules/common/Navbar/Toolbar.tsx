import React from "react";
import styled from "styled-components";
import { flex } from "@mixins/mixins";
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
   max-width: 1500px;
   height: 2rem;
   margin: auto;
   ${flex({ justify: "flex-end" })}
   gap: 0.5rem;

   border-bottom: 1px solid gray;
`;

export default Toolbar;
