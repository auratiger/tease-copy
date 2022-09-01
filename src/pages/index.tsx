import * as React from 'react';
import styled from 'styled-components';
import { flex } from '@mixins/mixins';
import { announcements } from '@constants/data/announcements';
import { Announcement, App, HeaderWrapper } from '@common';
import {
   Hero, AssociateLogosSection, BenefitShopSection, SpecialOfferSection, EssentialOffersPreview,
   LabelSection, RefillSection, RefillAndRecycleSection, BiodegradableSection, ReviewsSection, BlendsBenefitSection, JournalSection
} from '@homepage';

const IndexPage = () => {
   return (
      <App>
         <Announcement announcements={announcements} />
         <HeaderWrapper />
         <Wrapper>
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
`

export default IndexPage;
