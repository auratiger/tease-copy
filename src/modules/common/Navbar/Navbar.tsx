import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { flex } from '@mixins/mixins';
import { slideDown } from '@mixins/animations';
import useScrollListener from '@hooks/useScrollListener';

import { BsSearch } from '@react-icons/all-files/bs/BsSearch';
import { FaRegUser } from '@react-icons/all-files/fa/FaRegUser';
import { BiShoppingBag } from '@react-icons/all-files/bi/BiShoppingBag';
import { StaticImage } from 'gatsby-plugin-image';
import LinksContainer from './LinksContainer';

const Navbar = () => {
   const scroll = useScrollListener();

   const [float, setFloat] = useState(false);

   useEffect(() => {
      setFloat(scroll.y > 250);
   }, [scroll.x, scroll.lastY]);

   return (
      <Wrapper float={float}>
         <StylysedContainer>
            <StaticImage src="../../../assets/images/tease-logo.webp" alt="logo" className='img' />
            <LinksContainer role={'list'} />
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

   .img {
      min-width: fit-content;
   }

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

const IconsList = styled.section`
   min-width: fit-content;
   display: flex;
   gap: 2rem;
   margin-left: auto;
`;

export default Navbar;
