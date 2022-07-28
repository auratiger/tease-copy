import React from "react";
import styled from "styled-components";
import { flex } from "@mixins/mixins";
import links from "@constants/data/links";
import { Link } from "gatsby";

import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { FaRegUser } from "@react-icons/all-files/fa/FaRegUser";
import { BiShoppingBag } from "@react-icons/all-files/bi/BiShoppingBag";

const Navbar = () => {
   const linkItems = () => {
      return links.map((link: any, index: number) => {
         return (
            <Link key={index} to={link.url}>
               {link.text}
            </Link>
         );
      });
   };

   return (
      <Wrapper>
         <span>Logo</span>
         <section className="navigation-links">{linkItems()}</section>
         <section className="icons-group">
            <FaRegUser size={24} />
            <BsSearch size={24} />
            <BiShoppingBag size={24} />
         </section>
      </Wrapper>
   );
};

const Wrapper = styled.nav`
   max-width: 1500px;
   height: 2rem;
   margin: auto;
   padding-top: 2.5rem;
   ${flex()}
   gap: 1rem;

   .navigation-links {
      display: flex;
      gap: 1.5rem;
   }

   .navigation-links a {
      text-decoration: none;
      color: inherit;
      text-transform: capitalize;
   }

   .icons-group {
      display: flex;
      gap: 2rem;
      margin-left: auto;
   }
`;

export default Navbar;
