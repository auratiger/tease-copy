import React, { Fragment } from 'react';

import { createGlobalStyle } from 'styled-components';

import './reset.css';
import './fonts.css';

const GlobalStyles = createGlobalStyle`
   :root {

      /* Bluish green */
      --bluishGreen-100: #88a693;
      --bluishGreen-200: #3ce669;
      --bluishGreen-300: #1d432b;

      --ff-header-primary: 'Playfair Display', sans-serif;
      --ff-base-primary: 'Nunito', sans-serif;

      --ff-heading: var(--ff-primary);
      --ff-body: var(--ff-primary);
      --ff-footer: var(--ff-primary);

      --fs-300: .8125rem;
      --fs-400: .875rem;
      --fs-500: 1rem;
      --fs-600: 1.125rem;
      --fs-700: 1.875rem;
      --fs-800: 2.5rem;
      --fs-900: 3.5rem;

      --fs-body: var(--fs-400);
      --fs-nav: var(--fs-500);

      --spacing-sm: 0.1rem;
      --spacing-md: 0.2rem;
      --lh-header: 1;
      --lh-base: 1.6;
      --radius: 0.25rem;

      --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

   }

   body {
      font-family: var(--ff-base-primary);
      line-height: var(--lh-base);
      text-rendering: optimizeSpeed;
      -webkit-font-smoothing: antialiased;
   }

   h1, h2, h3, h4 {
      font-family: var(--ff-header-primary);
      font-weight: 700;
      letter-spacing: var(--spacing-sm);
      line-height: var(--lh-header);
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
