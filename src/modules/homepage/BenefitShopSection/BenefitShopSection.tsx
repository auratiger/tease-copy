import React, { FC } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Button, ImageContainer } from '@common';

const BenefitShopSection = () => {

   const { file } = useStaticQuery(query);

   return (
      <Wrapper>
         <h2>shop by benefit:</h2>
         <div className='styled-container'>
            {Array.from(Array(4)).map((_) => {
               return (
                  <ImageContainer
                     gatsbyImage={getImage(file)}
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                     hasHoverEffect={true}
                  >
                     <Button url='hello' text="Focus" btnStyle={{ useHeaderFont: true }} />
                  </ImageContainer>
               );
            })}
         </div>

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

   .styled-container {
      display: flex; 
      width: 100%; 
      gap: 2rem;
   }
`

export const query = graphql`
   query {
     file(name: {eq: "TeaseTeaHocusFocus"}) {
       childImageSharp {
         gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
       }
     }
   }
`;

export default BenefitShopSection;
