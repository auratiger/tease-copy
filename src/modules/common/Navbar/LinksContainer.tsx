import React from 'react'
import styled from 'styled-components';
import links from '@constants/data/links';
import NavLink from './Link';

const renderSubmenuElement = (submenu: any) => {
   if (!submenu) return;

   if (!!submenu.sections) {
      return <FullBleedBox className='wrapper'>
         <div className='main-links'>
            {submenu.links?.map((sublink: string) =>
               <span>{sublink}</span>)
            }
         </div>

         <div className='sections'>

         </div>
      </FullBleedBox>;
   }

   return <Box>
      {submenu.links?.map((sublink: string) =>
         <span>{sublink}</span>)
      }
   </Box>
}

const LinkItems = () => {
   return links.map(({ url, submenu, text }: any, index: number) => {
      return (
         <li key={index}>
            <NavLink
               text={text}
               to={url}
               renderMenu={() => renderSubmenuElement(submenu)}
            />
         </li>
      );
   });
};


const LinksContainer = ({ ...other }) => {
   return (
      <Links role={'list'} {...other}>
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

const FullBleedBox = styled.div`
   width: 50vw;
   display: flex;
   color: var(--bluishGreen-300);
   background-color: var(--gray-100);

   .main-links {
      font-size: var(--fs-400);
      display: flex;
      flex-direction: column;
      gap: 1rem;
   }

   .sections {
      display: flex;
      flex-direction: column;
      gap: 1rem;
   }
`

export default LinksContainer;
