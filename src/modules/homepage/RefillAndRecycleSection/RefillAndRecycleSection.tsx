import React from 'react'
import styled from 'styled-components';
import gif from '@src/assets/gifs/giphy.gif';

const RefillAndRecycleSection = () => {
   return (
      <Wrapper>
         <Title><Green>refill</Green> is the new <Green>recycle:</Green></Title>
         <Gif src={gif} />
      </Wrapper>
   )
}

const Wrapper = styled.section`
   width: 100%;
   display: flex;
   justify-content: space-around;
   align-items: center;
`

const Title = styled.h3`
   color: var(--gray-300);
   font-size: var(--fs-900);
   width: 10ch;
`

const Green = styled.span`
   color: var(--bluishGreen-300);
`

const Gif = styled.img`
`

export default RefillAndRecycleSection;
