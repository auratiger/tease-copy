import React from 'react'
import styled from 'styled-components';

import gif from '../../../assets/gifs/giphy.gif';

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
   padding: 5rem 20rem;
`

const Title = styled.h1`
   text-align: center;
   font-size: 7rem;
   width: 10ch;
`

const Green = styled.span`
   color: var(--bluishGreen-300);
`

const Gif = styled.img`
`

export default RefillAndRecycleSection;
