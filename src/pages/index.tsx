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
         </main>
      </App>
   );
};

export default IndexPage;
