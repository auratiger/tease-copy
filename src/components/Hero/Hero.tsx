import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { flex } from '@mixins/mixins';
import { slideshowItems } from '@constants/data/hero-slideshow';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
  const scrollRef = useRef<HTMLElement>(null);
  const [startX, setStartX] = useState<number>(0);
  const [isDown, setIsDown] = useState<boolean>(false);
  const [translateX, setTranslateX] = useState<number>(0);

  const showItems = () => {
    return slideshowItems.map((item: any, index: number) => {
      return (
        <section key={index} style={{ background: item.color }}>
          {/* <StaticImage
            src="../../assets/images/teacups.jpg"
            alt="cups"
            width={400}
            height={400}
          /> */}
        </section>
      );
    });
  };

  const timelineBoxes = () => {
    return slideshowItems.map((_: any, index: number) => {
      return (
        <section className="timeline-box" key={index}>
          <div className="background"></div>
        </section>
      );
    });
  };

  const onMouseDown = (e: any): void => {
    e.persist();
    setIsDown(true);

    if (scrollRef.current) {
      // setStartX(e.pageX - scrollRef.current.offsetLeft);
      scrollRef.current.style.cursor = 'grabbing';
    }
  };

  const onMouseUp = (): void => {
    setIsDown(false);

    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const onMouseMove = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();

    if (!isDown) return;

    //  if (scrollRef.current) {
    //    const { offsetLeft, scrollWidth, scrollLeft } = scrollRef.current;
    //    const x: number = e.pageX - offsetLeft;
    //    // const tolerance: number = 20;
    //    // let moveTo: number = scrollLeft + tolerance * Math.sign(startX - x);
    //    // if (moveTo >= scrollWidth) moveTo = 0;
    //    // else if (moveTo < 0) moveTo = scrollWidth;
    //    // scrollRef.current.scrollLeft = moveTo;
    //    setTranslateX((prev) => prev + (x - startX));
    //  }
  };

  return (
    <Wrapper>
      <div
        ref={scrollRef}
        className="slideshow"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
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
    background: lightgray;
  }

  .background {
    height: 100%;
    width: 0%;
    background: red;
    animation-name: loader;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
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
