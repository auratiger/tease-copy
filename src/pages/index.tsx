import * as React from "react";
import styled from "styled-components";
import { flex } from "@mixins/mixins";
import { App } from "@components/App";
import { Announcement } from "@components/Announcement";
import { HeaderWrapper } from "@components/Navbar";
import { Hero } from "@components/Hero";
import { announcements } from "@constants/data/announcements";

const IndexPage = () => {
   return (
      <App>
         <Announcement announcements={announcements} />
         <HeaderWrapper />
         <Wrapper>
            <Hero />
            <section className="wellness-section">
               <h2>wellness rituals shouldn't be complicated.</h2>
               <p>
                  we're tease. We create all natural, tea + botanical based
                  products that compliment each other and your goals without
                  compromising convenience, sustainability, or impact.
               </p>
            </section>
            <section style={{ display: "flex", gap: "2rem" }}>
               <span>icon</span>
               <span>icon</span>
               <span>icon</span>
               <span>icon</span>
               <span>icon</span>
            </section>
            <section>
               <h2>shop by benefit:</h2>
               <div style={{ display: "flex", gap: "2rem" }}>
                  <section>image</section>
                  <section>image</section>
                  <section>image</section>
                  <section>image</section>
               </div>
            </section>
         </Wrapper>
      </App>
   );
};

const Wrapper = styled.main`
   ${flex({ dir: "column" })};
   gap: 4rem;

   .wellness-section {
      width: 30%;
      ${flex({ dir: "column" })};
      text-align: center;
   }
`;

export default IndexPage;
