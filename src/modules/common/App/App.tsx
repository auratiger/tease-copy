import React, { Fragment } from 'react';

import { createGlobalStyle } from 'styled-components';

import './reset.css';
import './fonts.css';

// TODO: fine tune the variables for the application and add a global media query which will change the values of the variables accordingly

// TODO: Test if the application has any redundant refreshes and if there are any places that can be optimised or exported

// TODO: extract all nested render functions in components

// TODO: Extract common components across the application like: Title, Header ...

// TODO: Fix the inline pagination

const GlobalStyles = createGlobalStyle`
   :root {

      /* Bluish green */
      --bluishGreen-100: #88a693;
      --bluishGreen-200: #1f452a;
      --bluishGreen-300: #1d432b;

      --gray-100: #ffffff;
      --gray-200: #f9f9f9;
      --gray-300: #010101;

      --pr-brown: #94502a;

      --ff-header-primary: 'Playfair Display', sans-serif;
      --ff-base-primary: 'Nunito', sans-serif;

      --ff-heading: var(--ff-primary);
      --ff-body: var(--ff-primary);
      --ff-footer: var(--ff-primary);

      --fs-100: 0.785rem;
      --fs-200: 0.825rem;
      --fs-300: 1rem;
      --fs-400: 1.25rem;
      --fs-500: 1.5rem;
      --fs-600: 1.875rem;
      --fs-700: 2.5rem;
      --fs-800: 3.5rem;
      --fs-900: 7rem;

      --fs-body: var(--fs-400);
      --fs-nav: var(--fs-500);

      --spacing-sm: 0.1rem;
      --spacing-md: 0.2rem;
      --word-spacing-md: 0.2rem;
      --lh-sm: 0.5;
      --lh-md: 1;
      --lh-large: 1.6;
      --radius: 0.25rem;

      --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

   }

   body {
      font-family: var(--ff-base-primary);
      line-height: var(--lh-large);
      text-rendering: optimizeSpeed;
      -webkit-font-smoothing: antialiased;
      color: var(--bluishGreen-300);
      font-size: var(--fs-300);
   }

   h1, h2, h3, h4 {
      font-family: var(--ff-header-primary);
      font-weight: 700;

      letter-spacing: var(--spacing-sm);
      line-height: var(--lh-md);

      margin-bottom: 0.75rem;
      text-align: center;
   }

   h1 {font-size: var(--fs-700);}
   h2 {font-size: var(--fs-600);}
   h3 {font-size: var(--fs-500);}
   h4 {font-size: var(--fs-400);}
   p {
      font-family: var(--ff-base-primary);
      font-size: var(--fs-400);
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
