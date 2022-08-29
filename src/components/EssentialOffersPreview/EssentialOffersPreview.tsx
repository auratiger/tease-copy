import React from 'react'
import styled from 'styled-components';

import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import ImageContainer from '@components/ImageContainer';
import { Button } from '@components/Button';

enum ProductStatus {
   NONE,
   SOLD_OUT = 'Sold Out',
   SAVE = 'Save'
}

const essentialItems = [
   {
      title: 'Smart heated mug kit',
      price: {
         currentPrice: '45.50',
         originalPrice: '65.00'
      },
      status: ProductStatus.SAVE
   },
   {
      title: 'Smart Travel Tumbler (New!)',
      price: {
         currentPrice: '35.00',
         originalPrice: null
      },
      status: ProductStatus.NONE
   },
   {
      title: 'Coconut Chamomile Dreams Bath Soak',
      price: {
         currentPrice: '9.00',
         originalPrice: null
      },
      status: ProductStatus.NONE
   },
   {
      title: 'Hocus Focus',
      price: {
         currentPrice: '22.00',
         originalPrice: null
      },
      status: ProductStatus.SOLD_OUT
   },
]

const EssentialOffersPreview = () => {
   const { file } = useStaticQuery(query);

   return (
      <Wrapper>
         <h2>The essentials</h2>
         <Button text={'view All'} isOutlined={true} />
         <StyledContainer>
            {essentialItems.map(({ title, price: { currentPrice, originalPrice } }: any, index) => {
               return (
                  <ImageContainer
                     key={index}
                     gatsbyImage={getImage(file)}
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                     hasHoverEffect={true}
                     renderTitle={
                        () => <ImageTitleContainer>
                           <span className='title'>{title}</span>
                           {originalPrice ?
                              <span>
                                 <s>${originalPrice}</s>
                                 <span> from ${currentPrice}</span>
                                 <span className='obscure'> Save ${originalPrice - currentPrice}</span>
                              </span> :
                              <span>${currentPrice}</span>
                           }
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
   color: var(--bluishGreen-300);
   font-size: var(--fs-400);
   text-align: center;
   word-spacing: 4px;

   & > * {
      display: block;
   }

   .title {
      font-size: var(--fs-600);
   }

   .obscure {
      opacity: 0.6;
   }

`

export const query = graphql`
   query {
     file(name: {eq: "TeaseTeaHocusFocus"}) {
       childImageSharp {
         gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
       }
     }
   }
`;

export default EssentialOffersPreview;
