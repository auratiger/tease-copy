import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { flex, fillContainer } from '@mixins/mixins';

export interface ImageStyles {
   hasHoverEffect?: boolean;
   outline?: boolean;
   width?: number;
   height?: number;
}

export interface ImageProps {
   gatsbyImage: IGatsbyImageData;
   alt: string;
   hoverImage?: IGatsbyImageData;
   renderTitle?: any;
   children?: any;
   imageStyles?: ImageStyles;
}

enum ContainerState {
   NORMAL,
   HOVER
}

export const ImageContainer: FC<ImageProps> = ({
   gatsbyImage,
   alt,
   hoverImage,
   renderTitle,
   children,
   imageStyles = {},
   ...other
}) => {
   const { hasHoverEffect, outline, width, height } = imageStyles;

   const [state, setState] = useState(ContainerState.NORMAL);

   const handleMouseOver = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      if (!hoverImage) return;

      setState(ContainerState.HOVER)
   }

   const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      if (!hoverImage) return;

      setState(ContainerState.NORMAL);
   }

   return (
      <Wrapper hasHoverEffect={hasHoverEffect} width={width} height={height}>
         <StyledContainer
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
         >
            <GatsbyImage
               image={state === ContainerState.HOVER ? hoverImage : gatsbyImage}
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
