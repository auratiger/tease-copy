import { GatsbyLinkProps, Link } from 'gatsby';
import React, { FC, ReactElement } from 'react'
import styled, { css } from 'styled-components';
import { timelineLoader } from '@mixins/animations';

export interface NavLinkProps extends GatsbyLinkProps<any> {
   renderMenu?: () => ReactElement,
   children: any
}

const NavLink: FC<NavLinkProps> = ({ renderMenu, children, ...other }) => {
   const Submenu = renderMenu?.();

   return (
      <LinkWrapper {...other} hasSubmenu={!!Submenu}>
         {children}
         <Underscore />

         <FloatMenuContainer>
            {Submenu}
         </FloatMenuContainer>
      </LinkWrapper>
   )
}

const LinkWrapper = styled(Link)`
   --padding: 1rem;

   position: relative;
   isolation: isolate;
   text-decoration: none;
   text-transform: capitalize;
   padding: var(--padding);

   ${({ hasSubmenu }: any) =>
      hasSubmenu &&
      css`
         &:hover {
            color: var(--bluishGreen-300);
            background-color: var(--gray-100);
         }
      `
   }
`

const Underscore = styled.div`
   position: absolute;
   bottom: calc(var(--padding) / 1.5);
   max-width: calc(100% - var(--padding) * 2);
   margin-inline: var(--padding);
   width: 0%;
   height: 2px;
   boorder-radius: 50%;
   background-color: var(--bluishGreen-300);

   ${LinkWrapper}:hover & {
      animation-name: ${timelineLoader};
      animation-duration: 1s;
      animation-fill-mode: both;
   }
`

const FloatMenuContainer = styled.div`
   width: fit-content;
   position: absolute;
   top: 100%;
   z-index: 999;
   display: none;

   ${LinkWrapper}:hover & {
      display: block;
   }
`

export default NavLink;
