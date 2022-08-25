import React, { FC } from 'react';
import styled from 'styled-components';
import ImageContainer from '@components/ImageContainer';
import { Button } from '@components/Button';

const BenefitShopSection = () => {
   return (
      <Wrapper>
         <h2>shop by benefit:</h2>
         <div className='styled-container'>
            {Array.from(Array(4)).map((_) => {
               return (
                  <ImageContainer
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                     hasHoverEffect={true}
                  >
                     <Button text="Focus" />
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

export default BenefitShopSection;
