import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { flex, hideScroll } from '@mixins/mixins';
import { slideshowItems } from '@constants/data/hero-slideshow';
import { useEffect } from 'react';
import useInterval from '@hooks/useInterval';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const tolerance: number = 150;
const nextSlideDelay: number = 10000;

const Hero = () => {
  const scrollRef = useRef<HTMLElement>(null);
  const [startX, setStartX] = useState<number>(0);
  const [isDown, setIsDown] = useState<boolean>(false);
  const [move, setMove] = useState<number>(0);
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const {
    allFile: { edges },
  } = useStaticQuery(query);

  useEffect(() => {
    if (scrollRef.current) {
      setMove(scrollRef.current.scrollWidth / slideshowItems.length);
    }
  }, [scrollRef]);

  useInterval(
    () => {
      if (scrollRef.current) {
        const { scrollWidth, scrollLeft } = scrollRef.current;
        let moveTo: number = scrollLeft + move;

        if (moveTo >= scrollWidth) moveTo = 0;

        scrollRef.current.scrollLeft = moveTo;
        setSlideIndex((prev: number) => (prev + 1) % slideshowItems.length);
      }
    },
    isDown ? null : nextSlideDelay
  );

  // events
  const onMouseDown = (e: any): void => {
    e.persist();
    setIsDown(true);

    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      scrollRef.current.style.cursor = 'grabbing';
    }
  };

  const onMouseUp = (e: any): void => {
    if (!isDown) return;

    if (!scrollRef.current) return;

    scrollRef.current.style.cursor = 'grab';

    const { offsetLeft, scrollWidth, scrollLeft } = scrollRef.current;
    const endX: number = e.pageX - offsetLeft;
    const distance: number = startX - endX; // distance from start to finish

    if (Math.abs(distance) > tolerance) {
      const xDirection: number = Math.sign(distance);
      let moveTo: number = scrollLeft + move * xDirection;
      let newIndex: number = (slideIndex + xDirection) % slideshowItems.length;

      if (moveTo >= scrollWidth) {
        moveTo = 0;
        newIndex = 0;
      } else if (moveTo < 0) {
        moveTo = scrollWidth;
        newIndex = slideshowItems.length - 1;
      }

      scrollRef.current.scrollLeft = moveTo;
      setSlideIndex(newIndex);
    }
    setIsDown(false);
  };

  // render elements
  const showItems = () => {
    return slideshowItems.map((item: any, index: number) => {
      const image = getImage(edges[index].node);

      return (
        <section key={index} className="slide">
          <GatsbyImage image={image} className={'hero-image'} alt="hero" />
          <div>
            <h3>{item.description}</h3>
            <h2>{item.title}</h2>
          </div>
          <button>{item.button.text}</button>
        </section>
      );
    });
  };

  const timelineBoxes = () => {
    return slideshowItems.map((_: any, index: number) => {
      return (
        <section className="timeline-box" key={index}>
          <div
            className={`background ${index === slideIndex && 'active'}`}
          ></div>
        </section>
      );
    });
  };

  return (
    <Wrapper>
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
    animation-name: loader;
  }

  @keyframes loader {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
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
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
    ${hideScroll}
  }

  .slide {
    width: 100%;
    height: 100%;
    flex: none;
    padding: 6rem 3rem;
    color: white;
  }

  .hero-image {
    pointer-events: none;
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;

export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "hero"}}) {
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
