import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { flex } from '@mixins/mixins';
import { slideDown } from '@mixins/animations';
import useScrollListener from '@hooks/useScrollListener';
import links from '@constants/data/links';
import { Link } from 'gatsby';

import { BsSearch } from '@react-icons/all-files/bs/BsSearch';
import { FaRegUser } from '@react-icons/all-files/fa/FaRegUser';
import { BiShoppingBag } from '@react-icons/all-files/bi/BiShoppingBag';
import { StaticImage } from 'gatsby-plugin-image';

const Navbar = () => {
   const scroll = useScrollListener();

   const [float, setFloat] = useState(false);

   useEffect(() => {
      setFloat(scroll.y > 250);
   }, [scroll.x, scroll.lastY]);

   const linkItems = () => {
      return links.map((link: any, index: number) => {
         return (
            <li key={index}>
               <Link to={link.url}>{link.text}</Link>
            </li>
         );
      });
   };

   return (
      <Wrapper float={float}>
         <StylysedContainer>
            <StaticImage src="../../../assets/images/tease-logo.webp" alt="logo" />
            <Links role={'list'}>{linkItems()}</Links>
            <IconsList>
               <FaRegUser size={24} />
               <BsSearch size={24} />
               <BiShoppingBag size={24} />
            </IconsList>
         </StylysedContainer>
      </Wrapper>
   );
};

const Wrapper = styled.nav`
   width: 100%;
   height: 4rem;
   color: white;

   ${({ float }: any) =>
      float &&
      css`
         position: fixed;
         inset: 0;
         z-index: 25;
         background: #f9f9f9;
         color: var(--bluishGreen-300);
         height: 96px;

         animation-name: ${slideDown};
         animation-duration: 0.4s;
         animation-timing-function: linear;
      `}
`;

const StylysedContainer = styled.div`
   height: 100%;
   ${flex()}
   gap: 2.5rem;
`;

const Links = styled.ul`
   display: flex;
   gap: 1.5rem;

   & a {
      text-decoration: none;
      text-transform: capitalize;
   }
`;

const IconsList = styled.section`
   display: flex;
   gap: 2rem;
   margin-left: auto;
`;

export default Navbar;
