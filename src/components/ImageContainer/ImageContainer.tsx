import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { flex, fillContainer } from '@mixins/mixins';

export interface Props {
   gatsbyImage: IGatsbyImageData;
   alt: string;
   hasHoverEffect?: boolean;
   outline?: boolean;
   width?: number;
   height?: number;
   children?: any;
   renderTitle?: any;
}

const ImageContainer: FC<Props> = ({
   outline,
   gatsbyImage,
   alt,
   hasHoverEffect,
   width,
   height,
   children,
   renderTitle,
   ...other
}) => {
   return (
      <Wrapper hasHoverEffect={hasHoverEffect} width={width} height={height}>
         <StyledContainer>
            <GatsbyImage
               image={gatsbyImage}
               alt={alt}
               className="background"
            />
            {outline && <Outline />}
            <ChildrenBox {...other}>
               {children}
            </ChildrenBox>
         </StyledContainer>
         {renderTitle?.()}
      </Wrapper>
   );
};

const Wrapper = styled.div`
   position: relative;
   isolation: isolate;
   overflow: hidden;
   width: ${({ width }: any) => (width ? `${width}px` : '100%')};
   height: ${({ height }: any) => (height ? `${height}px` : '100%')};

   ${flex({ dir: 'column' })};
   gap: 0.4rem;

   ${({ hasHoverEffect }: any) =>
      hasHoverEffect &&
      css`
         &:hover .background {
            transition: all 0.5s ease-in-out;
            transform: scale(1.1);
         }
      `}
`;

const StyledContainer = styled.div`
   overflow: hidden;

   display: flex;
   flex-direction: column;

   ${fillContainer};
`

const ChildrenBox = styled.div`
   position: absolute;
   inset: 0;
`

const Outline = styled.div`
   position: absolute;
   inset: 10px;
   border: 3px solid white;
`

export default ImageContainer;
