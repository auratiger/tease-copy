import React from 'react'
import { flex } from '@mixins/mixins';
import styled from 'styled-components';
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { StaticImage } from 'gatsby-plugin-image';

const ReviewsSection = () => {

   const renderStars = () => {
      return <Stars>
         {Array.from(Array(5)).map((_) => {
            return <AiFillStar />
         })}
      </Stars>
   }

   return (
      <Wrapper>
         <Title>The reviews are in:</Title>

         <SwiperContainer
            slidesPerView={3}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            pagination={{
               dynamicBullets: true,
               clickable: true
            }}
            modules={[Pagination]}
            className="mySwiper"
         >
            <SwiperSlide>
               {renderStars()}
               <p>Tease reminds me to take time, slow down, and be present while taking care of myself. I love every blend and love the refill program even more. I never have to think about ordering more tea.</p>
               <StaticImage src={'../../../assets/images/reviews/review-guy-one.avif'} alt="hello" className='review-img'></StaticImage>
               <h2>Samantha</h2>
               <span>Los Angeles, CA (@sammiegree)</span>
            </SwiperSlide>
            <SwiperSlide>
               {renderStars()}
               <p>A tea company that has great values?? Sign us up! So impressed with the blends themselves and their company values.</p>
               <StaticImage src={'../../../assets/images/reviews/review-guy-one.avif'} alt="hello" className='review-img'></StaticImage>
               <h2>Reyhan</h2>
               <span>Toronto, Canada (@plantbasedrelationship)</span>
            </SwiperSlide>
            <SwiperSlide>
               {renderStars()}
               <p>Tease makes the best blends and accessories for my everyday living + wellness goals. I never leave home without my 3 in 1 tumbler.</p>
               <StaticImage src={'../../../assets/images/reviews/review-guy-one.avif'} alt="hello" className='review-img'></StaticImage>
               <h2>Christina</h2>
               <span>Halifax, NS</span>
            </SwiperSlide>
            <SwiperSlide>
               {renderStars()}
               <p>The best matcha I have ever had! hand grown by small growers in Japan the quality is 🙌</p>
               <br />
               <br />
               <p>I’ll usually start the day with a coffee and make a matcha for the afternoon as it’s more of a calming focused feeling rather than jittery.</p>
               <StaticImage src={'../../../assets/images/reviews/review-guy-one.avif'} alt="hello" className='review-img'></StaticImage>
               <h2>Tricia</h2>
               <span>Toronto, ON (@TriciaKopec)</span>
            </SwiperSlide>
         </SwiperContainer>

      </Wrapper>
   )
}

const Wrapper = styled.section`
   width: 100%;
   background-color: var(--bluishGreen-100);

   display: flex;
   flex-direction: column;
   align-items: center;
   padding-block: 4rem;
`

const SwiperContainer = styled(Swiper)`
   width: 100%;
   height: 100%;
   padding-block: 5rem 2rem;
   isolation: isolate;

   .swiper-wrapper {
      display: flex;
      align-items: center;
   }

   .swiper-slide {
      text-align: center;
      font-size: var(--fs-400);
      padding: 2rem 4rem;
      color: var(--bluishGreen-300);
      background-color: #fff;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   .swiper-slide p {
      font-size: var(--fs-500);
   }

   .swiper-slide-active {
      transition: transform 250ms ease-in;
      transform: scale(1.15, 1.15) translateY(-4%);
      z-index: 999;
      box-shadow: 0 0 25px -10px black;
   }

   .swiper-pagination-horizontal {
      transform: translate(-50%, 500%) !important;
   }

   .swiper-pagination-bullet-active {
      background-color: var(--bluishGreen-300);
   }

   .review-img {
      border-radius: 50%;
      width: 70px;
      aspect-ratio: 1;
   }

`

const Stars = styled.div`
   gap: 0.5rem;
   padding-bottom: 1rem;
   ${flex()}
`

const Title = styled.h1`
   color: var(--bluishGreen-300);
`

export default ReviewsSection;
