import * as React from 'react';
import styled from 'styled-components';
import { flex } from '@mixins/mixins';
import { App } from '@components/App';
import { Announcement } from '@components/Announcement';
import { HeaderWrapper } from '@components/Navbar';
import { Hero } from '@components/Hero';
import { announcements } from '@constants/data/announcements';
import ImageContainer from '@components/ImageContainer';
import { Button } from '@components/Button';
import AssociateLogosSection from '@components/AssociateLogosSection';
import BenefitShopSection from '@components/BenefitShopSection';
import SpecialOfferSection from '@components/SpecialOfferSection';
import EssentialOffersPreview from '@components/EssentialOffersPreview';
import LabelSection from '@components/LabelSection';
import RefillSection from '@components/RefillSection';
import RefillAndRecycleSection from '@components/RefillAndRecycleSection';

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
            <AssociateLogosSection />
            <BenefitShopSection />
            <SpecialOfferSection />
            <EssentialOffersPreview />

            <LabelSection />

            <RefillSection />

            <RefillAndRecycleSection />

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
