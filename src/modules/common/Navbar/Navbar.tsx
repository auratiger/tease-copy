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
import LinksContainer from './LinksContainer';
import MobileLinksContainer from './MobileLinksContainer';
import { BurgerIcon } from '@common';

const Navbar = () => {
   const scroll = useScrollListener();

   const [float, setFloat] = useState(false);
   const [showSidemenu, setShowSidemenu] = useState(false);

   useEffect(() => {
      setFloat(scroll.y > 250);
   }, [scroll.x, scroll.lastY]);

   const handleSidemenuOpen = (): void => {
      setShowSidemenu(true);
   }

   const handleSidemenuClose = (): void => {
      setShowSidemenu(false);
   }

   return (
      <Wrapper float={float}>
         <StylysedContainer>
            <StaticImage src="../../../assets/images/tease-logo.webp" alt="logo" className='img' />
            <LinksContainer id='desktop-links' links={links} />
            <MobileLinksContainer id='mobile-links' links={links} isActive={showSidemenu} handleSidemenuClose={handleSidemenuClose} />
            <IconsList>
               <FaRegUser size={24} id='user-icon' />
               <BsSearch size={24} />
               <BurgerIcon onClick={handleSidemenuOpen} size={50} id='burger-icon' />
               <BiShoppingBag size={24} />
            </IconsList>
         </StylysedContainer>
      </Wrapper>
   );
};

const Wrapper = styled.nav`
   width: 100%;
   color: white;
   ${flex()}

   .img {
      min-width: fit-content;
   }

   #mobile-links, #burger-icon {
      display: none;
   }

   #burger-icon {
      .line {
         stroke: var(--gray-100);
      }
   }

   @media only screen and (max-width: 70em) {
      #desktop-links, #user-icon {
         display: none;
      }
      
      #mobile-links, #burger-icon {
         display: flex;
      }
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

         #burger-icon {
            .line {
               stroke: var(--bluishGreen-300);
            }
         }
      `}
`;

const StylysedContainer = styled.div`
   width: var(--content-width);
   height: 100%;
   ${flex()}
   gap: 2.5rem;
`;

const IconsList = styled.section`
   min-width: fit-content;
   display: flex;
   align-items: center;
   gap: 2rem;
   margin-left: auto;
`;

export default Navbar;
