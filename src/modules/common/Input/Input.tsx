import React, { FC } from 'react'
import styled from "styled-components";
import { GoMail } from "@react-icons/all-files/go/GoMail";

interface InputProps {
   wrapperClass: string;
}

const Input: FC<InputProps> = ({ wrapperClass, ...other }) => {
   return (
      <InputWrapper className={wrapperClass}>
         <input type="text" {...other} />
         <GoMail className='icon' size={28} />
      </InputWrapper>
   )
}

const InputWrapper = styled.div`
   display: flex;
   position: relative;

   input {
      width: 100%;
      height: 34px;
      color: white;
      background: transparent;
      border-bottom: 2px solid white;
   }

   input::placeholder {
      color: white;
   }

   .icon {
      position: absolute;
      right: 0;
   }
   
`

export default Input;
