import React, { useRef, useState } from "react";
import styled from "styled-components";
import { flex } from "@mixins/mixins";
import { slideshowItems } from "@constants/data/hero-slideshow";

const Hero = () => {
   const scrollReff = useRef<HTMLElement>(null);
   const [startX, setStartX] = useState<number>(0);
   const [isDown, setIsDown] = useState<boolean>(false);
   const [translateX, setTranslateX] = useState<number>(0);

   const showItems = () => {
      return slideshowItems.map((item: any, index: number) => {
         return (
            <section
               key={index}
               style={{ backgroundColor: item.color }}
            ></section>
         );
      });
   };

   const timelineBoxes = () => {
      return slideshowItems.map((_: any, index: number) => {
         return <section key={index}></section>;
      });
   };

   const onMouseDown = (e: any): void => {
      e.persist();
      setIsDown(true);

      if (scrollReff.current) {
         // setStartX(e.pageX - scrollReff.current.offsetLeft);
         scrollReff.current.style.cursor = "grabbing";
      }
   };

   const onMouseUp = (): void => {
      setIsDown(false);

      if (scrollReff.current) {
         scrollReff.current.style.cursor = "grab";
      }
   };

   const onMouseMove = (e: React.MouseEvent<HTMLElement>): void => {
      e.preventDefault();

      if (!isDown) return;

      if (scrollReff.current) {
         const { offsetLeft, scrollWidth, scrollLeft } = scrollReff.current;
         const x: number = e.pageX - offsetLeft;
         // const tolerance: number = 20;
         // let moveTo: number = scrollLeft + tolerance * Math.sign(startX - x);
         // if (moveTo >= scrollWidth) moveTo = 0;
         // else if (moveTo < 0) moveTo = scrollWidth;
         // scrollReff.current.scrollLeft = moveTo;
         setTranslateX((prev) => prev + (x - startX));
      }
   };

   return (
      <Wrapper>
         <div
            ref={scrollReff}
            className="slideshow"
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onMouseMove={onMouseMove}
            style={{ transform: `translateX(${translateX}px)` }}
         >
            {showItems()}
            {/* {showItems()} */}
         </div>
         <div className="timeline-boxes">{timelineBoxes()}</div>
      </Wrapper>
   );
};

const Wrapper = styled.article`
   width: 100%;
   height: 40rem;
   position: relative;
   overflow-x: hidden;
   ${flex()};

   .slideshow {
      display: flex;
      width: 100%;
      height: 100%;
      /* transform: translateX(-50%); */
      position: absolute;
      left: 0;
      cursor: pointer;
   }

   .slideshow section {
      /* max-width: 1500px; */
      /* margin: auto; */
      /* padding-top: 2.5rem; */
      width: 100%;
      height: 100%;
      flex: none;
   }

   .timeline-boxes {
      ${flex()};
      gap: 1rem;
      position: absolute;
      bottom: 0;
   }

   .timeline-boxes section {
      width: 8rem;
      height: 0.5rem;
      background: lightgray;
   }
`;

export default Hero;
