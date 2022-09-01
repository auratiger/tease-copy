import React from 'react'
import styled from 'styled-components';

const BiodegradableSection = () => {
   return (
      <Wrapper>
         <h2>
            meet the worlds first fully biodegradable & refillable tea
            collection.
         </h2>
         <p>
            we love beautiful packaging but hated the idea of having to
            toss it so we created an alternative.
         </p>
         <p>
            From outer packaging to our plant based pyramid tea bags, our
            collection is 100% biodegradable and refillable.
         </p>
      </Wrapper>
   )
}

const Wrapper = styled.section`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;
   text-align: center;

   h2, p {
      width: 65%;
   }
`

export default BiodegradableSection;
