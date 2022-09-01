import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { flex } from '@mixins/mixins';
import { AnimationCascade } from '@common';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

const AssociateLogosSection = () => {
   const {
      allFile: { edges },
   } = useStaticQuery(query);

   const renderImages = () => {
      return edges.map((edge: any) => {
         const image: IGatsbyImageData = getImage(edge.node);

         return <GatsbyImage image={image} className={'image'} alt="hero" />
      })
   }

   return (
      <Wrapper>
         <AnimationCascade
            as="section"
            duration={0.5}
            delay={0.2}
            className='container'
         >
            {renderImages()}
         </AnimationCascade>

      </Wrapper>
   )
}

const Wrapper = styled.section`
   width: 100%;

   .container{
      width: 100%;
      height: 50px;
      ${flex()}
      gap: 4rem;
   }

   .container > * {
      width: 170px;
   }

`

export const query = graphql`
   query {
      allFile(filter: { relativeDirectory: { eq: "sponsors" } }) {
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

export default AssociateLogosSection;
