import React, { useState } from 'react';
import styled from 'styled-components';

// Additional burger menu path configurations
// https://codepen.io/ainalem/pen/LJYRxz

interface IBurgerIcon {
   size?: number;
   color?: string;
}

export type BurgerPropsType = IBurgerIcon & JSX.IntrinsicElements['svg'];

const BurgerIcon = React.forwardRef<SVGSVGElement, BurgerPropsType>(
   (props, ref) => {
      const { size, color, className, onClick, ...other } = props;

      return (
         <Wrapper className={className} size={size} color={color} ref={ref} {...other}>
            <svg
               onClick={onClick}
               className={`ham hamRotate`}
               viewBox="0 0 100 100"
            >
               <path
                  className="line top"
                  d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
               />
               <path className="line middle" d="m 30,50 h 40" />
               <path
                  className="line bottom"
                  d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
               />
            </svg>
         </Wrapper>
      );
   }
);

interface WrapperProps {
   size?: number;
}

const Wrapper = styled.button<WrapperProps>`
  width: ${({ size }: any) => size ? `${size}px` : '60px'};
  height: ${({ size }: any) => size ? `${size}px` : '60px'};
  isolation: isolate;
  background: none;
  border: none;
  outline: inherit;
  padding: 0;

  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: ${({ color }: any) => color || 'black'};
    stroke-width: 5.5;
    stroke-linecap: round;
  }

  .ham .top {
    stroke-dasharray: 40 139;
  }

  .ham .bottom {
    stroke-dasharray: 40 180;
  }
`;

BurgerIcon.displayName = 'BurgerIcon';

export default BurgerIcon;
