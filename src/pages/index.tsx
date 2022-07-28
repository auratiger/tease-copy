import * as React from "react";
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
         <main>
            <Hero />
            <section>
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
         </main>
      </App>
   );
};

export default IndexPage;
