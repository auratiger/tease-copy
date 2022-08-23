import { useState, useEffect } from 'react';

export interface Props {
   x: number;
   y: number;
   lastX: number;
   lastY: number;
}

const useScrollListener = (): Props => {
   const [data, setData] = useState<Props>({
      x: 0,
      y: 0,
      lastX: 0,
      lastY: 0,
   });

   // set up event listeners
   useEffect(() => {
      const handleScroll = () => {
         setData((last) => {
            return {
               x: window.scrollX,
               y: window.scrollY,
               lastX: last.x,
               lastY: last.y,
            };
         });
      };

      handleScroll();
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return data;
};

export default useScrollListener;
