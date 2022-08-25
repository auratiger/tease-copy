import React from 'react'
import styled from 'styled-components';
import ImageContainer from '@components/ImageContainer';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

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
                  style={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
                  outline={true}
                  height={400}
               />
            )
         })}
      </Wrapper>
   )
}

const Wrapper = styled.section`
   width: 100%;
   padding-inline: 5rem;
   display: flex;
   align-items: center;
   gap: 4rem;
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
