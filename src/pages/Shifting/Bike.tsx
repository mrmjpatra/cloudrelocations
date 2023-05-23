import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Bike = () => {
  return (
    <Container>
       <Typography variant='h3' color='#fd5d1c' textAlign='center'>Bike Shifting</Typography>
      <hr color='#fd5d1c' />
      <Typography variant='body1'>Our Bike shifting service is one of the best packing and moving services in India. Making things easier we use heavy machinery transport system to relocate your Bike and bikes. You do not need to get worried at all, as our staffs are professional and they will ensure hassle-free relocation of your vehicles.</Typography>
      <Typography variant='h5'>Required Document for Collecting Bike</Typography>
      <ul>
        <li>Copy of Registration Certificate (RC)</li>
        <li>Copy of Insurance Policy</li>
        <li>Copy of Owner ID</li>
      </ul>
    </Container>
  )
}

export default Bike;

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
  h5{
    font-size: 1.5rem;
    font-weight: bold;
  }
  ul,ol{
    margin: 0;
    padding: 0;
    padding-left: 2.5rem;
    font-size: 1.5rem;
  }
  ul li{
    margin: 1rem 0;
  }

`