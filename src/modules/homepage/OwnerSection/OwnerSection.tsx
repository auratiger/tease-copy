import { Button } from '@common';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import styled from 'styled-components';

const OwnerSection = () => {
   return (
      <Wrapper>
         <StyledContainer>
            <span>PROUDLY WOMAN OWNED AND FORMULATED BY A TEA SOMMELIER & HERBALIST:</span>
            <h3>live & lead conciously.</h3>
            <p>Tease creates blends that support you to live and lead consciously.</p>
            <br />
            <p>
               We’re on a mission to show everyone that they have exceptional power to impact themselves, their communities, and their planet. We do this through supporting daily intentional rituals that create long lasting impact. One cup at a time.
            </p>
            <br />
            <p>-Sheena Brady, Founder & Tea Sommelier</p>
            <p>-Amanda Baker, COO + Herbalist</p>
            <br />
            <Button to={'hello'} text={'Learn more'} btnStyle={{ isInversed: true }} />
         </StyledContainer>

         <ImageWrapper>
            <StaticImage src='../../../assets/images/owners/Sheena_Brady_Amanda_Baker.webp' alt='Sheena' className='left-image' />
            <StaticImage src='../../../assets/images/owners/tease_blends_with_benefits.webp' alt='tease' className='right-image' />
         </ImageWrapper>

      </Wrapper>
   )
}

const Wrapper = styled.section`
   width: 100%;
   height: 500px;
   padding-inline: 5rem;
   margin: auto;
   display: flex;
   gap: 2rem;

   & > div {
      max-width: 1000px;
   }
`

const StyledContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   width: 100%;

   & > span, p {
      width: 50ch;
   }

   & > span {
      font-size: var(--fs-300);
      letter-spacing: var(--spacing-lg);
   }

   & > h3 {
      font-size: var(--fs-600);
      text-align: left;
   }

   & > p {
      font-size: var(--fs-300);
   }
`

const ImageWrapper = styled.div`
   position: relative;
   height: 100%;
   width: 100%;
 
   .left-image {
      position: absolute;
      transform: translateY(10%);
   }

   .right-image {
      position: absolute;
      transform: translateX(80%);
      z-index: -1;
   }
`

export default OwnerSection;
