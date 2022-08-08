import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { flex, hideScroll } from '@mixins/mixins';
import { slideshowItems } from '@constants/data/hero-slideshow';
import { StaticImage } from 'gatsby-plugin-image';
import { useEffect } from 'react';

const Hero = () => {
  const scrollRef = useRef<HTMLElement>(null);
  const [startX, setStartX] = useState<number>(0);
  const [isDown, setIsDown] = useState<boolean>(false);
  const [move, setMove] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);

  useEffect(() => {
    if (scrollRef.current) {
      setMove(scrollRef.current.scrollWidth / slideshowItems.length);
    }
  }, [scrollRef]);

  const showItems = () => {
    return slideshowItems.map((item: any, index: number) => {
      return <section key={index} style={{ background: item.color }}></section>;
    });
  };

  const timelineBoxes = () => {
    return slideshowItems.map((_: any, index: number) => {
      return (
        <section className="timeline-box" key={index}>
          <div className={`background ${index === 0 && 'active'}`}></div>
        </section>
      );
    });
  };

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

    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';

      const { offsetLeft, scrollWidth, scrollLeft } = scrollRef.current;

      const x: number = e.pageX - offsetLeft;

      let moveTo: number = scrollLeft + move * Math.sign(startX - x);

      if (moveTo >= scrollWidth) moveTo = 0;
      else if (moveTo < 0) moveTo = scrollWidth;

      scrollRef.current.scrollLeft = moveTo;
    }

    setIsDown(false);
  };

  return (
    <Wrapper>
      <div
        ref={scrollRef}
        className="slideshow"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        style={{ transform: `translateX(${translateX}px)` }}
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
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .background.active {
    animation-name: loader;
  }

  @keyframes loader {
    0% {
      width: 0%;
    }
    80%,
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
    /* transform: translateX(-50%); */
    position: absolute;
    left: 0;
    cursor: pointer;
    overflow-x: hidden;
    ${hideScroll}
  }

  .slideshow section {
    /* max-width: 1500px; */
    /* margin: auto; */
    /* padding-top: 2.5rem; */
    width: 100%;
    height: 100%;
    flex: none;
  }
`;

export default Hero;
