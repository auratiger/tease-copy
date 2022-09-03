import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import styled from 'styled-components';

import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { FaPinterest } from "@react-icons/all-files/fa/FaPinterest";
import { SiTiktok } from "@react-icons/all-files/si/SiTiktok";
import { Input } from '@common';

const Footer = ({ ...other }) => {
   return (
      <Wrapper {...other}>
         <FlexRowContainer>
            <LinksContainer>
               <span>affiliates & influencers</span>
               <span>retailers/stockists</span>
               <span>benefits club</span>
               <span>returns</span>
               <span>gift cards</span>
               <span>wholesale</span>
               <span>contact</span>
               <span>privacy + legal</span>
            </LinksContainer>
            <SignupContainer>
               <h2>sign up and save</h2>
               <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
               <Input placeholder='Enter you email' />
               <IconsWrapper>
                  <FiInstagram size={28} />
                  <FaFacebookF size={25} />
                  <FaPinterest size={25} />
                  <SiTiktok size={25} />
               </IconsWrapper>
            </SignupContainer>
            <Image>
               <StaticImage src='../../../assets/images/bcorp-logo.avif' alt='helo' />
            </Image>
         </FlexRowContainer>
         <Copywright>
            <small>© 2022 Tease | Wellness Tea Blends Tea INC</small>
            <small>POS and Ecommerce by Shopify</small>
         </Copywright>
      </Wrapper>
   )
}

const Wrapper = styled.footer`
   height: 45vh;
   background-color: var(--bluishGreen-100);
   margin-block: auto;
   padding-block: 3rem;
   color: var(--gray-100);
   gap: 2rem;

   span, p {
      font-size: var(--fs-300);
   }

`

const FlexRowContainer = styled.div`
   display: flex;
   & > * {
      width: 20rem;
   }
`

const LinksContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;

`

const SignupContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;

   h2 {
      font-size: var(--fs-400);
      font-weight: 100;
      text-align: left;
   }
`

const Image = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   img {
      width: 120px;
   }
`

const Copywright = styled.div`
   width: 100%;
   height: 6vh;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
`

const IconsWrapper = styled.div`
   display: flex;
   gap: 1rem;

`

export default Footer; 
