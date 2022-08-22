import { StaticImage } from 'gatsby-plugin-image';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const ImageContainer: FC<any> = ({
   children,
   outline,
   hasHoverEffect,
   width,
   height,
   ...other
}) => {
   return (
      <Wrapper hasHoverEffect={hasHoverEffect} width={width} height={height}>
         <StaticImage
            src="../../assets/images/TeaseTeaHocusFocus-2_360x.webp"
            alt="image"
            className="background"
            layout="fullWidth"
         />
         {outline && <div className="outline"></div>}
         <div className={`box`} {...other}>
            {children}
         </div>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   position: relative;
   isolation: isolate;
   overflow: hidden;
   width: ${({ width }: any) => (width ? `${width}px` : '100%')};
   height: ${({ height }: any) => (height ? `${height}px` : '100%')};

   .box {
      position: absolute;
      inset: 0;
   }

   .outline {
      position: absolute;
      inset: 5%;
      border: 3px solid white;
   }

   ${({ hasHoverEffect }: any) =>
      hasHoverEffect &&
      css`
         &:hover .background {
            transition: all 0.5s ease-in-out;
            transform: scale(1.1);
         }
      `}
`;

export default ImageContainer;
