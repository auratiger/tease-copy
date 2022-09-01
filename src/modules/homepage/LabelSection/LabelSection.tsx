import React from 'react'
import styled from 'styled-components';
import { flex } from '@mixins/mixins';
import { LightGreenButton } from '@common';

const LabelSection = () => {
   return (
      <Wrapper>
         <h1>for high (temperature) standards.</h1>
         <span>never drink lukewarm tea again</span>
         <LightGreenButton text={'smart heated mug kit'} btnStyle={{ isOutlined: true }} />
      </Wrapper>
   )
}

const Wrapper = styled.section`
   width: 100%;
   color: white;
   background-color: var(--bluishGreen-100);
   padding: 15rem;

   ${flex({ dir: 'column', align: 'flex-end' })}
   gap: 1rem;

   & > h1 {
      font-size: var(--fs-800);
      text-align: right;
   }

   & > span {
      font-size: var(--fs-500);
   }
`

export default LabelSection;
