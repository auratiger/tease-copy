import * as React from 'react';
import styled from 'styled-components';
import { flex } from '@mixins/mixins';
import { announcements } from '@constants/data/announcements';
import { Announcement, App, HeaderWrapper, Footer } from '@common';
import {
   Hero, AssociateLogosSection, BenefitShopSection, SpecialOfferSection, EssentialOffersPreview,
   LabelSection, RefillSection, RefillAndRecycleSection, BiodegradableSection, ReviewsSection, BlendsBenefitSection, JournalSection,
   OwnerSection
} from '@homepage';

const IndexPage = () => {
   return (
      <App>
         <Announcement announcements={announcements} />
         <HeaderWrapper />
         <Main>
            <Hero />
            <Wellness>
               <h2>wellness rituals shouldn't be complicated.</h2>
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
            <BiodegradableSection />
            <ReviewsSection />
            <BlendsBenefitSection />
            <JournalSection />
            <OwnerSection />
         </Main>
         <Footer />
      </App>
   );
};

const Main = styled.main`
   display: grid;
   grid-template-columns:
      1fr
      min(70vw, 100%)
      1fr;
   gap: 4rem;

   .img-container: {
      ${flex()}
   }

   & > * {
      grid-column: 2;
   }

   .full-bleed {
      width: 100%;
      grid-column: 1 / 4;
   }
`;


const Wellness = styled.section`
      ${flex({ dir: 'column' })};
      gap: 1rem;
      text-align: center;

      p {
         width: 70ch;
      }
`

export default IndexPage;
