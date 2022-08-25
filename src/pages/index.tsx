import * as React from 'react';
import styled from 'styled-components';
import { flex } from '@mixins/mixins';
import { App } from '@components/App';
import { Announcement } from '@components/Announcement';
import AnimationCascade from '@components/AnimationCascade';
import { HeaderWrapper } from '@components/Navbar';
import { Hero } from '@components/Hero';
import { announcements } from '@constants/data/announcements';
import { StaticImage } from 'gatsby-plugin-image';
import ImageContainer from '@components/ImageContainer';
import { Button } from '@components/Button';

const IndexPage = () => {
   return (
      <App>
         <Announcement announcements={announcements} />
         <HeaderWrapper />
         <Wrapper>
            <Hero />
            <Wellness>
               <h1>wellness rituals shouldn't be complicated.</h1>
               <p>
                  we're tease. We create all natural, tea + botanical based
                  products that compliment each other and your goals without
                  compromising convenience, sustainability, or impact.
               </p>
            </Wellness>

            <AnimationCascade
               as="section"
               duration={0.5}
               delay={0.2}
               style={{ display: 'flex' }}
            >
               <StaticImage
                  src="../assets/images/sponsors/Forbes.webp"
                  alt="hello"
                  width={200}
               />
               <StaticImage
                  src="../assets/images/sponsors/Forbes.webp"
                  alt="hello"
                  width={200}
               />
               <StaticImage
                  src="../assets/images/sponsors/Forbes.webp"
                  alt="hello"
                  width={200}
               />
               <StaticImage
                  src="../assets/images/sponsors/Forbes.webp"
                  alt="hello"
                  width={200}
               />
               <StaticImage
                  src="../assets/images/sponsors/Forbes.webp"
                  alt="hello"
                  width={200}
               />
            </AnimationCascade>
            <section
               style={{
                  width: '100%',
                  paddingInline: '10rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}
            >
               <h2>shop by benefit:</h2>
               <div style={{ width: '100%', display: 'flex', gap: '2rem' }}>
                  {Array.from(Array(4)).map((_) => {
                     return (
                        <ImageContainer
                           style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                           }}
                           hasHoverEffect={true}
                        >
                           <Button text="Focus" />
                        </ImageContainer>
                     );
                  })}
               </div>
            </section>
            <section
               style={{
                  width: '100%',
                  paddingInline: '5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4rem',
               }}
            >
               <ImageContainer
                  style={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
                  outline={true}
                  height={400}
               ></ImageContainer>
               <ImageContainer
                  style={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
                  outline={true}
                  height={400}
               ></ImageContainer>
            </section>
            <section
               style={{
                  width: '100%',
                  paddingInline: '10rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2rem',
               }}
            >
               <h2>The essentials</h2>
               <Button text={'view All'} />
               <div style={{ width: '100%', display: 'flex', gap: '2rem' }}>
                  {Array.from(Array(4)).map((_) => {
                     return (
                        <ImageContainer
                           style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                           }}
                           hasHoverEffect={true}
                        >
                           <Button text="Focus" />
                        </ImageContainer>
                     );
                  })}
               </div>
            </section>
            <section
               style={{ width: '100%', height: '40rem', background: 'green' }}
            ></section>
            <section
               style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingInline: '4rem',
               }}
            >
               <h2>refills: kinder to the planet & your wallet</h2>

               <div style={{ width: '100%', display: 'flex', gap: '2rem' }}>
                  {Array.from(Array(4)).map((_) => {
                     return (
                        <ImageContainer
                           style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                           }}
                           hasHoverEffect={true}
                        >
                           <Button text="Focus" />
                        </ImageContainer>
                     );
                  })}
               </div>
            </section>
            <section
               style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-around',
                  paddingInline: '20rem',
               }}
            >
               <h2>Refill is the new recycle:</h2>
               <ImageContainer
                  style={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
                  width={400}
                  hasHoverEffect={true}
               ></ImageContainer>
            </section>
            <section>
               <h3>
                  meet the worlds first fully biodegradable & refillable tea
                  collection.
               </h3>
               <h4>
                  we love beautiful packaging but hated the idea of having to
                  toss it so we created an alternative.
               </h4>
               <h4>
                  From outer packaging to our plant based pyramid tea bags, our
                  collection is 100% biodegradable and refillable.
               </h4>
            </section>

            <section
               style={{ width: '100%', height: '25rem', background: 'green' }}
            ></section>
         </Wrapper>
      </App>
   );
};

const Wrapper = styled.main`
   ${flex({ dir: 'column' })};
   gap: 4rem;

   .img-container: {
      ${flex()}
   }
`;

const Wellness = styled.section`
      width: 40%;
      ${flex({ dir: 'column' })};
      gap: 1rem;
      text-align: center;
      color: var(--bluishGreen-300);

      h1, p {
         font-size: var(--fs-700);
      }

      p {
         font-size: 1.5rem;
      }
`

export default IndexPage;
