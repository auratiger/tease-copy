import { css } from 'styled-components';

export const flex = ({
   justify = 'center',
   align = 'center',
   wrap = 'nowrap',
   dir = 'row',
}: {
   justify?:
   | 'flex-start'
   | 'flex-end'
   | 'center'
   | 'space-between'
   | 'space-around'
   | 'space-evenly';
   align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
   wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
   dir?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
} = {}) => css`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  flex-direction: ${dir};
  justify-content: ${justify};
  align-items: ${align};
  flex-wrap: ${wrap};
`;

export const hideScroll = css`
  /* For removing the scrollbar from view */
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const userSelect = css`
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const fillContainer = css`
   block-size: 100%;
   inline-size: 100%;
   width: 100%;
   height: 100%;
` 
