import React from 'react'
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { flex } from '@mixins/mixins';
import { LightGreenButton, ImageContainer } from '@common';

const SpecialOfferSection = () => {

   const {
      allFile: { edges },
   } = useStaticQuery(query);

   return (
      <Wrapper>
         {edges.map((edge) => {
            return (
               <ImageContainer
                  gatsbyImage={getImage(edge.node)}
                  outline={true}
                  height={500}
                  className='container'
               >
                  <span>For high (temperature) standards</span>
                  <h1>the smart heated mug kit</h1>
                  <LightGreenButton text={'Buy now'} />
               </ImageContainer>
            )
         })}
      </Wrapper>
   )
}

const Wrapper = styled.section`
   width: 100%;
   padding-inline: 4rem;
   display: flex;
   align-items: center;
   gap: 2rem;

   .container {
      ${flex({ dir: 'column', justify: 'flex-start', align: 'flex-end' })}
      padding: 4rem;
      color: white;
   }
`

export const query = graphql`
   query {
      allFile(filter: { relativeDirectory: { eq: "special" } }) {
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

export default SpecialOfferSection;
