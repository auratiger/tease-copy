import React from 'react'
import styled from 'styled-components';
import { flex } from '@mixins/mixins';
import { Button } from '@components/Button';

const LabelSection = () => {
   return (
      <Wrapper>
         <h1>for high (temperature) standards.</h1>
         <span>never drink lukewarm tea again</span>
         <Button text={'smart heated mug kit'} isOutlined={true} />
      </Wrapper>
   )
}

const Wrapper = styled.section`
   width: 100%;
   background-color: var(--bluishGreen-100);
   color: white;
   padding: 15rem 25rem;

   ${flex({ dir: 'column', align: 'flex-end' })}
   gap: 1rem;

   & > h1 {
      font-size: var(--fs-900);
   }

   & > span {
      font-size: var(--fs-700);
   }
`

export default LabelSection;
