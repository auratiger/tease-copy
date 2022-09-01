import React from 'react'
import styled, { css } from 'styled-components';

import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { ImageContainer } from '@common';

enum ProductStatus {
   NONE,
   SOLD_OUT = 'Sold Out',
   SAVE = 'Save'
}

const essentialItems = [
   {
      title: 'Golden Slumbers Refill (Organic)',
      price: {
         currentPrice: '14.00',
         originalPrice: null
      },
      status: ProductStatus.NONE
   },
   {
      title: 'Mate Boost Refill',
      price: {
         currentPrice: '14.00',
         originalPrice: null
      },
      status: ProductStatus.SOLD_OUT
   },
   {
      title: 'Shake it Off Refill',
      price: {
         currentPrice: '14.00',
         originalPrice: null
      },
      status: ProductStatus.NONE
   },
   {
      title: 'In the Flow Refill (Organic)',
      price: {
         currentPrice: '14.00',
         originalPrice: null
      },
      status: ProductStatus.NONE
   },
]

const RefillSection = () => {
   const { mainImage, secondaryImage } = useStaticQuery(query);

   return (
      <Wrapper>
         <h2>refills: kinder to the planet & your wallet</h2>
         <StyledContainer>
            {essentialItems.map(({ title, price: { currentPrice, originalPrice }, status }: any, index) => {
               return (
                  <ImageContainer
                     key={index}
                     gatsbyImage={getImage(mainImage)}
                     hoverImage={getImage(secondaryImage)}
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                     renderTitle={
                        () => <ImageTitleContainer>
                           <span className='title'>{title}</span>
                           {originalPrice ?
                              <small>
                                 <s>${originalPrice}</s>
                                 <span> from ${currentPrice}</span>
                                 <span className='obscure'> Save ${originalPrice - currentPrice}</span>
                              </small> :
                              <small>${currentPrice}</small>
                           }
                           {status !== ProductStatus.NONE && <Label inverse={status === ProductStatus.SAVE}>{status}</Label>}
                        </ImageTitleContainer>
                     }
                  >

                  </ImageContainer>
               );
            })}
         </StyledContainer>
      </Wrapper>
   )
}

const Wrapper = styled.section`
   width: 100%;
   padding-inline: 15rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;

   color: var(--bluishGreen-300);
`

const StyledContainer = styled.div`
   display: flex;
   width: 100%;
   gap: 2rem;
`

const ImageTitleContainer = styled.div`
   text-align: center;
   word-spacing: var(--word-spacing-md);
   font-size: var(--fs-400);

   & > * {
      display: block;
   }

   .obscure {
      opacity: 0.6;
   }

`

const Label = styled.small`
   width: fit-content;
   padding: 0.2rem 0.5rem;
   background-color: white;
   position: absolute;
   right: 0;
   top: 0;

   ${({ inverse }: any) =>
      inverse &&
      css`
         color: white;
         background-color: var(--bluishGreen-100);
      `}
`

export const query = graphql`
   query {
      mainImage: file (name: {eq: "TeaseTeaHocusFocus"}) {
       childImageSharp {
         gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
       }
     }

      secondaryImage: file (name: {eq: "smartmug"}) {
       childImageSharp {
         gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
       }
     }
   }

`;

export default RefillSection;
