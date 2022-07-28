import * as React from "react";
import { App } from "@components/App";
import { Announcement } from "@components/Announcement";
import { HeaderWrapper } from "@components/Navbar";
import { announcements } from "@constants/data/announcements";

const IndexPage = () => {
   return (
      <App>
         <main>
            <Announcement announcements={announcements} />
            <HeaderWrapper />
            <h1>Hello</h1>
         </main>
      </App>
   );
};

export default IndexPage;
