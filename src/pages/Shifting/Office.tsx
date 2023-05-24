import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components';
import officeshifingimg from '../../assets/officeshifingimg.png'


const Office = () => {
  return (
    <Container>
        <img src={officeshifingimg} alt="" />
      <Typography variant='h3' color='#fd5d1c' textAlign='center'>Office Relocations</Typography>
      <hr color='#fd5d1c' />
      <Typography variant='body1'>Cloud Relocations is a trusted provider of comprehensive office moving
        services nationwide. With our end-to-end solutions, we handle everything from
        packaging to transportation, ensuring a smooth transition to the new destination.
        Whether it's local, domestic, or international relocation, we offer efficient,
        secure, and dependable solutions for all types of materials.Hiring Trusted Hassle-Free Office Shifting.</Typography>
      <Typography variant='body1'>Office Shifting is practically a piece of the frequent movement and moving. In any case, it might positively not be as straightforward a procedure as that of family unit moving. Movement of office requires a satisfactory measure of arranging and organized design with a specific end goal to influence it to problem free and smooth sail. Office moving includes the movement of the whole framework to another area in efficient state. Loss of any information or record can cause the customer a considerable measure of business harm.</Typography>
      <Typography variant='body1'>With our extensive network of offices and associates in major cities across India, Cloud Relocations is well-equipped to handle the reloading and resettling of your office during relocation, ensuring a seamless transition while maintaining affordable pricing and high-quality services.</Typography>
      <ul>
        <li>Complete Safety of Goods</li>
        <li>Complete Transportation Facility</li>
        <li>Complete Loading & Unloading Facility</li>
        <li>Free Quality Guidance</li>
        <li>Highly Economical</li>
        <li>High Quality Packaging</li>
        <li>Big Network across India</li>
      </ul>
    </Container>
  )
}

export default Office;
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
  ul{
    margin: 0;
    padding: 0;
    padding-left: 2.5rem;
    font-size: 1.5rem;
  }
  ul li{
    margin: 1rem 0;
  }
  @media screen and (max-width: 414px) {
    margin: 0;
    h3{
      font-size: 2rem;
      font-weight: 500;
    }
    hr{
      margin: .3rem auto;
    }
    p{
      font-size: 1rem;
    }
    ul{
    padding-left: 2rem;
    }
    ul li{
      font-size: 1rem;
    }
  }


`