import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Local = () => {
  return (
    <Container>
      <Typography variant='h3' color='#fd5d1c' textAlign='center'>Local Shifting</Typography>
      <hr color='#fd5d1c' />
      <Typography variant='body1'>We pride ourselves in being a reliable and experienced provider of residential moving services in Bhubaneswar and beyond, catering to all your household relocation needs, whether it's local or international. Allow us the opportunity to deliver our exceptional services to you, ensuring a smooth and stress-free moving experience at the best price possible.</Typography>
      <Typography variant='body1'>With utmost dedication, Cloud Relocations, a reputable moving company in Bhubaneswar, is committed to providing reliable relocation services that ensure complete client satisfaction. Our primary focus is on customer support, aiming to deliver high-quality services at reasonable prices. We handle your belongings and materials with meticulous care, ensuring a satisfactory delivery. Recognizing the significance of your household goods, we handle each item with sensitivity, understanding the emotional attachment associated with them. Therefore, we meticulously quantify, package, and protect your merchandise and valuable belongings using appropriate stuffing and covering materials.
      </Typography>
      <Typography variant='body1'>With our firm belief in providing top-notch packing services, we guarantee a secure and seamless shifting and transfer experience for our clients, encompassing home, residence, furniture, and family shifting services, all aimed at achieving 100% client satisfaction.</Typography>
    </Container>
  )
}

export default Local;
const Container = styled.div`
  margin: 2rem 0;
  background-color: white;
  hr{
    width: 50%;
    margin: .5rem auto;
  }
  p{
    font-size: 1.5rem;
    margin: 1rem 0;
    text-align: justify;
  } 

`