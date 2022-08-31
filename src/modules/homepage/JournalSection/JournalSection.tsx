import React from 'react'
import styled from 'styled-components';

import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Button, ImageContainer } from '@common';

const essentialItems = [
   {
      date: 'Aug 24, 2022',
      title: 'Antioxidant Berry Lemonade'
   },
   {
      date: 'Aug 08, 2022',
      title: 'Lavender Lemonade'
   },
   {
      date: 'Jul 17, 2022',
      title: 'How to Make Botanical Ice Cubes'
   },
]

const EssentialOffersPreview = () => {
   const {
      allFile: { edges },
   } = useStaticQuery(query);

   return (
      <Wrapper>
         <h2>from the journal</h2>
         <Button to={'essentials'} text={'view All'} btnStyle={{ isOutlined: true }} />
         <StyledContainer>
            {essentialItems.map(({ title, date }: any, index) => {
               return (
                  <ImageContainer
                     key={index}
                     gatsbyImage={getImage(edges[index].node)}
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                     renderTitle={
                        () => <ImageTitleContainer>
                           <span>{date}</span>
                           <span className='title'>{title}</span>
                        </ImageTitleContainer>
                     }
                  >
                  </ImageContainer>
               );
            })}
         </StyledContainer>
      </Wrapper>
   )
}

const Wrapper = styled.section`
   width: 100%;
   padding-inline: 20rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;

   color: var(--bluishGreen-300);
`

const StyledContainer = styled.div`
   display: flex;
   width: 100%;
   gap: 2rem;
`

const ImageTitleContainer = styled.div`
   color: var(--bluishGreen-300);
   font-size: var(--fs-400);
   text-align: center;
   word-spacing: 4px;

   & > * {
      display: block;
   }

   .title {
      font-size: var(--fs-600);
   }

   .obscure {
      opacity: 0.6;
   }

`

export const query = graphql`
   query {
      allFile(filter: { relativeDirectory: { eq: "journal" } }) {
         edges {
            node {
               name
               childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
               }
            }
         }
      }
   }
`;

export default EssentialOffersPreview;
