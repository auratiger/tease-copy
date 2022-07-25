import React, { Fragment } from "react";

import { createGlobalStyle } from "styled-components";

import "./reset.css";
import "./fonts.css";

const GlobalStyles = createGlobalStyle`
   :root {

      /* Bluish green */
      --bluishGreen-100: #88a693;
      --bluishGreen-200: #3ce669;
      --bluishGreen-300: #1d432b;

      --ff-primary: 'Roboto', sans-serif;
      --ff-secondary: 'Open Sans', sans-serif;

      --ff-heading: var(--ff-primary);
      --ff-body: var(--ff-primary);
      --ff-footer: var(--ff-primary);

      --fs-300: .8125rem;
      --fs-400: .875rem;
      --fs-500: 1rem;
      --fs-600: 1.875rem;
      --fs-700: 2.5rem;
      --fs-800: 3.5rem;

      --fs-body: var(--fs-400);
      --fs-nav: var(--fs-500);

      --spacing: 0.1rem;
      --radius: 0.25rem;

      --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

   }

   body {
      font-family: var(--ff-primary);
      line-height: 1.5;
      text-rendering: optimizeSpeed;
      -webkit-font-smoothing: antialiased;
   }

   h1, h2, h3, h4 {
      letter-spacing: var(--spacing);
      line-height: 1.25;
      margin-bottom: 0.75rem;
   }

   h1 {font-size: var(--fs-800);}
   h2 {font-size: var(--fs-700);}
   h3 {font-size: var(--fs-600);}
   h4 {font-size: var(--fs-500);}
   p {
     margin-bottom: 1.25rem;
     color: var(--clr-grey-3);
   }
   
`;

export default ({ children }) => {
   return (
      <Fragment>
         {children}

         <GlobalStyles />
      </Fragment>
   );
};
