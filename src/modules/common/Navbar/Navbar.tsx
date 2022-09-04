import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { flex } from '@mixins/mixins';
import { slideDown } from '@mixins/animations';
import useScrollListener from '@hooks/useScrollListener';
import links from '@constants/data/links';

import { BsSearch } from '@react-icons/all-files/bs/BsSearch';
import { FaRegUser } from '@react-icons/all-files/fa/FaRegUser';
import { BiShoppingBag } from '@react-icons/all-files/bi/BiShoppingBag';
import { StaticImage } from 'gatsby-plugin-image';
import NavLink from './Link';

const Navbar = () => {
   const scroll = useScrollListener();

   const [float, setFloat] = useState(false);

   useEffect(() => {
      setFloat(scroll.y > 250);
   }, [scroll.x, scroll.lastY]);

   const linkItems = () => {
      return links.map(({ url, sublinks, text }: any, index: number) => {
         return (
            <li key={index}>
               <NavLink to={url} renderMenu={
                  () => sublinks && <Box>{sublinks?.map((sublink: string) => <span>{sublink}</span>)}</Box>
               }>
                  {text}
               </NavLink>
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
   font-size: var(--fs-400);
`;

const IconsList = styled.section`
   display: flex;
   gap: 2rem;
   margin-left: auto;
`;

const Box = styled.div`
   width: fit-content;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   padding: 1rem;
   white-space: nowrap;
   color: var(--bluishGreen-300);
   background-color: var(--gray-100);
   font-size: var(--fs-300);
`

export default Navbar;
