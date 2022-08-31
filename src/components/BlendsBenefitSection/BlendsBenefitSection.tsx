import React from 'react'
import { flex } from '@mixins/mixins';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const BlendsBenefitSection = () => {

   return (
      <Wrapper>
         <Title>blends with benefits:</Title>

         <StyledContainer>
            <ImageContainer>
               <StaticImage src={'../../assets/images/blends/flower.avif'} alt='image' />
               <h2>benefiting you.</h2>
               <p>From sleep support to focus, energy, confidence, calm, and more. Whatever your goal, we've got you covered. </p>
            </ImageContainer>
            <ImageContainer>
               <StaticImage src={'../../assets/images/blends/planet.avif'} alt='image' />
               <h2>benefiting the planet</h2>
               <p>Our tube packaging is 100% biodegradable + refillable & our pyramid tea bags are made of plant-based fibres, plastic-free, and also fully biodegradable.</p>
            </ImageContainer>
            <ImageContainer>
               <StaticImage src={'../../assets/images/blends/women.avif'} alt='image' />
               <h2>benefiting women.</h2>
               <p>A portion of proceeds from every order supports ambitious women founders through our funding and mentorship programs.</p>
            </ImageContainer>
         </StyledContainer>
      </Wrapper>
   )
}

const Wrapper = styled.section`
   margin-bottom: 20rem;
   width: 100%;
   ${flex({ dir: 'column' })}
   gap: 1rem;
`

const StyledContainer = styled.div`
   display: flex;
   max-width: 80%;
`

const ImageContainer = styled.div`
   padding-inline: 4rem;
   text-align: center;
   ${flex({ dir: 'column' })}
`

const Title = styled.h1`
   color: var(--bluishGreen-300);
`

export default BlendsBenefitSection;
