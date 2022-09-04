import React from 'react'
import styled from 'styled-components';
import links from '@constants/data/links';
import NavLink from './Link';

const LinkItems = () => {
   return links.map(({ url, sublinks, text }: any, index: number) => {
      return (
         <li key={index}>
            <NavLink
               text={text}
               to={url}
               renderMenu={() =>
                  sublinks &&
                  <Box>{sublinks?.map((sublink: string) => <span>{sublink}</span>)}</Box>}
            />
         </li>
      );
   });
};


const LinksContainer = ({ ...other }) => {
   return (
      <Links {...other}>
         <LinkItems />
      </Links>
   )
}

const Links = styled.ul`
   display: flex;
   flex-wrap: wrap;
   gap: 1rem;
   font-size: var(--fs-400);
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

export default LinksContainer;
