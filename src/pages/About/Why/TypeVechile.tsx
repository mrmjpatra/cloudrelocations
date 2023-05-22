import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const TypeVechile = () => {
  return (
    <TypeVechileContainer>
      <Typography variant='h3' color={'#F05A29'}>Types of Vehicles</Typography>
      <Typography variant='body1'>When you are working professional, the suitable vehicle is very essential. Lot of jobs have different requirements concerning equipment & materials. If you are responsible for taking what you require along with you, the right vehicle can be the difference between an easy.</Typography>
      <Typography variant='body1'>Here is the list of our different types of transportation that help you while you relocating from one to another location at the reasonable shifting charges.</Typography>
      <ImageContainer>
        <img src="https://www.agarwalpackers.in/images/types-of-vehicles5.png" alt="" />
        <img src="https://www.agarwalpackers.in/images/types-of-vehicles5.png" alt="" />
        <img src="https://www.agarwalpackers.in/images/types-of-vehicles5.png" alt="" />
        <img src="https://www.agarwalpackers.in/images/types-of-vehicles5.png" alt="" />
        <img src="https://www.agarwalpackers.in/images/types-of-vehicles5.png" alt="" />
      </ImageContainer>
    </TypeVechileContainer>
    
  )
}

export default TypeVechile;

const TypeVechileContainer=styled.div`
  background-color: whitesmoke;
  padding-top: 1rem;
  h3{
    text-align: center;
    margin-bottom: 1rem;
  }
  p{
    padding: 1rem 2rem;
    text-align: justify;
    line-height: 2rem;
  }
`;
const ImageContainer=styled.div`
    width: 70%;
    margin: auto;
    img{
      width:20rem;
      height: 15rem;
    }
`;