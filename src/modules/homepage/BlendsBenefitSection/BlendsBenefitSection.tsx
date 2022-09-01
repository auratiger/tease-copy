import React from 'react'
import { flex } from '@mixins/mixins';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const BlendsBenefitSection = () => {

   return (
      <Wrapper>
         <h2>blends with benefits:</h2>

         <FlexRowContainer>
            <StyledContainer>
               <StaticImage src={'../../../assets/images/blends/flower.avif'} alt='image' />
               <h3>benefiting you.</h3>
               <p>From sleep support to focus, energy, confidence, calm, and more. Whatever your goal, we've got you covered. </p>
            </StyledContainer>
            <StyledContainer>
               <StaticImage src={'../../../assets/images/blends/planet.avif'} alt='image' />
               <h3>benefiting the planet</h3>
               <p>Our tube packaging is 100% biodegradable + refillable & our pyramid tea bags are made of plant-based fibres, plastic-free, and also fully biodegradable.</p>
            </StyledContainer>
            <StyledContainer>
               <StaticImage src={'../../../assets/images/blends/women.avif'} alt='image' />
               <h3>benefiting women.</h3>
               <p>A portion of proceeds from every order supports ambitious women founders through our funding and mentorship programs.</p>
            </StyledContainer>
         </FlexRowContainer>
      </Wrapper>
   )
}

const Wrapper = styled.section`
   width: 100%;
   ${flex({ dir: 'column' })}
   gap: 1rem;
`

const FlexRowContainer = styled.div`
   display: flex;
   max-width: 80%;
`

const StyledContainer = styled.div`
   width: 100%;
   padding-inline: 4rem;
   text-align: center;
   ${flex({ dir: 'column' })}

   p {
      font-size: var(--fs-300);
   }
`

export default BlendsBenefitSection;
