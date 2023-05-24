import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import householdimg from '../../assets/bikeshiftimg.png'


const Bike = () => {
  return (
    <Container>
        <img src={householdimg} alt="" />
       <Typography variant='h3' color='#fd5d1c' textAlign='center'>Bike Shifting</Typography>
      <hr color='#fd5d1c' />
      <Typography variant='body1'>Our Bike shifting service is one of the best packing and moving services in India. Making things easier we use heavy machinery transport system to relocate your Bike and bikes. You do not need to get worried at all, as our staffs are professional and they will ensure hassle-free relocation of your vehicles.</Typography>
      <Typography variant='h5'>Required Document for Collecting Bike</Typography>
      <ul>
        <li>Copy of Registration Certificate (RC)</li>
        <li>Copy of Insurance Policy</li>
        <li>Copy of Owner ID</li>
      </ul>
      <Typography variant='body1'>Our network of over 1,200+ certified auto transport professionals incorporate a wide range of carriers and delivery specialists. We have the assets accessible to rapidly and securely transport any vehicle, cruiser, watercraft, gear, apparatus, RV, ATV, snowmobile or trailer!
      </Typography>
      <Typography variant='body1'>Car Carriers, Car Shifting, Car Transporters, Vehicle shifting services, car transport services
      </Typography>
      <Typography variant='body1'>Your vehicle will be transported on a close car carrier, generally observed conveying new cars to dealerships. Close carriers are the most financially savvy technique for transportation and give completely guaranteed, way to-entryway benefit. Finish the statement shape to one side to in a flash ascertain the cost of your transportation.
      </Typography>
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
    h5{
      font-size: 1.2rem;
      font-weight: 500;
    }
    ul li{
      font-size: 1.2rem;
    }
    li{
      margin:.5rem 0;
    }
  }

`