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
         <Button to={'essentials'} text={'view All'} btnStyle={{ isOutlined: true, size: 'sm' }} />
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
                     imageStyles={{
                        height: 400
                     }}
                     renderTitle={
                        () => <ImageTitleContainer>
                           <small>{date}</small>
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
   display: flex;
   flex-direction: column;
   align-items: center;
`

const StyledContainer = styled.div`
   padding-block: 3rem;
   display: flex;
   width: 100%;
   gap: 2rem;
`

const ImageTitleContainer = styled.div`
   padding-block: 0.5rem;
   text-align: center;
   word-spacing: var(--word-spacing-md);
   font-size: var(--fs-400);

   & > * {
      display: block;
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
