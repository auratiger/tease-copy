import React, { FC, ReactHTMLElement } from 'react'
import styled, { css } from 'styled-components';
import { XIcon } from '@common';

export interface MobileLinksContainerProps {
   links: [];
   isActive: boolean;
   handleSidemenuClose: () => void;
}

const LinkItems = ({ links }: any) => {
   return links.map(({ url, submenu, text }: any, index: number) => {
      return (
         <li key={index}>
         </li>
      );
   });
};

const MobileLinksContainer: FC<MobileLinksContainerProps> = ({ links, isActive, handleSidemenuClose, ...props }) => {
   return (
      <Wrapper isActive={isActive} {...props}>
         <LinksList>
            <EmptyRow>
               <XIcon onClick={handleSidemenuClose} />
            </EmptyRow>
            <LinkItems links={links} />
         </LinksList>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   position: fixed;
   top: 0;
   right: 0;
   z-index: 999;
   width: 0;
   height: 100vh;
   background: var(--bluishGreen-400);

   transition: width 0.5s ease-in;

   ${({ isActive }: any) => {
      if (isActive) {
         return css`
            width: 40vw;
         `
      }
   }}
`;

const LinksList = styled.ul.attrs({
   role: 'list'
})`
   width: 100%;
   height: 100%;

   display: flex;
   flex-direction: column;
   gap: 1rem;
   padding: 1rem;

`

const EmptyRow = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;

   button {
      width: 50px;
      color: var(--bluishGreen-300);
   }
`

export default MobileLinksContainer;
