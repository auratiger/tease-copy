import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { flex, hideScroll, fillContainer } from '@mixins/mixins';
import { timelineLoader } from '@mixins/animations';
import { slideshowItems } from '@constants/data/hero-slideshow';
import useInterval from '@hooks/useInterval';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { AnimationCascade, BrownButton } from '@common';

const tolerance: number = 150;
const sensitivity: number = 10;
const nextSlideDelay: number = 15000;
const slidesCount: number = slideshowItems.length;

const Hero = () => {
   const scrollRef = useRef<HTMLElement>(null);
   const [startX, setStartX] = useState<number>(0);
   const [isDown, setIsDown] = useState<boolean>(false);
   const [slideIndex, setSlideIndex] = useState<number>(0);

   const {
      allFile: { edges },
   } = useStaticQuery(query);

   useInterval(
      () => {
         if (scrollRef.current) {
            const slidePosition: number = calculateNextSlidePosition(
               scrollRef.current
            );

            scrollRef.current.scrollLeft = slidePosition;
            setSlideIndex(
               calculateNextSlideIndex(
                  slidePosition,
                  scrollRef.current.scrollWidth
               )
            );
         }
      },
      isDown ? null : nextSlideDelay
   );

   const calculateNextSlidePosition = (scrollRef: any, dir = 1): number => {
      const slideWidth: number = scrollRef.scrollWidth / slidesCount;

      const nextSlidePosition: number = scrollRef.scrollLeft + slideWidth * dir;

      const nextSlidePositionBuffer: number = nextSlidePosition + sensitivity;
      if (nextSlidePositionBuffer > scrollRef.scrollWidth) {
         return 0;
      } else if (nextSlidePositionBuffer < 0) {
         return scrollRef.scrollWidth - slideWidth;
      }

      return nextSlidePosition;
   };

   const calculateNextSlideIndex = (
      slidePosition: number,
      scrollWidth: number
   ): number => {
      return Math.ceil(
         (slidePosition - sensitivity) / (scrollWidth / slidesCount)
      );
   };

   // events
   const onMouseDown = (e: React.MouseEvent<HTMLElement>): void => {
      e.persist();
      setIsDown(true);

      if (scrollRef.current) {
         setStartX(e.pageX - scrollRef.current.offsetLeft);
         scrollRef.current.style.cursor = 'grabbing';
      }
   };

   const onMouseUp = (e: React.MouseEvent<HTMLElement>): void => {
      if (!isDown) return;

      if (!scrollRef.current) return;

      scrollRef.current.style.cursor = 'grab';

      const { offsetLeft, scrollWidth } = scrollRef.current;

      const endX: number = e.pageX - offsetLeft;
      const distance: number = startX - endX; // distance from start to finish

      if (Math.abs(distance) > tolerance) {
         const xDirection: number = Math.sign(distance);
         const slidePosition: number = calculateNextSlidePosition(
            scrollRef.current,
            xDirection
         );

         scrollRef.current.scrollLeft = slidePosition;
         setSlideIndex(calculateNextSlideIndex(slidePosition, scrollWidth));
      }
      setIsDown(false);
   };

   // render elements
   const showItems = () => {
      return slideshowItems.map((item: any, index: number) => {
         const image: IGatsbyImageData = getImage(edges[index].node);
         const isActiveSlide: boolean = index === slideIndex;

         return (
            <section key={index} className={`slide`}>
               <GatsbyImage image={image} className={'hero-image'} alt="hero" />
               <AnimationCascade active={isActiveSlide} className="wrapper title-box">
                  <h1>{item.title}</h1>
                  <h3>{item.description}</h3>
                  <BrownButton url={item.url} text={item.button.text} />
               </AnimationCascade>
            </section>
         );
      });
   };

   const timelineBoxes = () => {
      return slideshowItems.map((_: any, index: number) => {
         const isActiveSlide: boolean = index === slideIndex;
         return (
            <section className="timeline-box" key={index}>
               <div className={`background ${isActiveSlide && 'active'}`}></div>
            </section>
         );
      });
   };

   return (
      <Wrapper className="full-bleed">
         <div
            ref={scrollRef}
            className="slideshow"
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
         >
            {showItems()}
         </div>
         <TimelineContainer>{timelineBoxes()}</TimelineContainer>
      </Wrapper>
   );
};

const TimelineContainer = styled.div`
   ${flex()};
   gap: 1rem;
   position: absolute;
   bottom: 0;

   .timeline-box {
      width: 8rem;
      height: 0.5rem;
      background: rgb(219, 200, 184);
   }

   .background {
      height: 100%;
      width: 0%;
      background: rgb(232, 230, 227);
      animation-duration: ${nextSlideDelay}ms;
      animation-timing-function: linear;
   }

   .background.active {
      width: 100%;
      animation-name: ${timelineLoader};
   }
`;

const Wrapper = styled.article`
   width: 100%;
   height: 40rem;
   position: relative;
   overflow-x: hidden;
   ${flex()};

   .slideshow {
      display: flex;
      ${fillContainer}
      scroll-snap-type: x proximity;
      cursor: pointer;
      overflow: hidden;
      ${hideScroll}
   }

   .slide {
      ${fillContainer}
      flex: none;
      padding: 8rem 3rem;
      color: white;
      position: relative;
   }

   .hero-image {
      pointer-events: none;
      position: absolute;
      inset: 0;
      z-index: -1;
   }

   .title-box > * {
      text-align: left;
   }
`;

export const query = graphql`
   query {
      allFile(filter: { relativeDirectory: { eq: "hero" } }) {
         edges {
            node {
               name
               childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
               }
            }
         }
         totalCount
      }
   }
`;

export default Hero;
