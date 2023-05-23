import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Car = () => {
  return (
    <Container>
      <Typography variant='h3' color='#fd5d1c' textAlign='center'>Car Shifting</Typography>
      <hr color='#fd5d1c' />
      <Typography variant='body1'>Car Carriers is top class car transportation firms that will enable you to make your development simple and basic. We comprehend you will move starting
        with one place then onto the next that does not intend to be distressing and
        tedious. We are resolved to give you best car transportation benefits in India.
        Our car transportation administrations will help you in the entire scene and give
        you a significant serenity.</Typography>
      <ol>
        <li>Safe & Reliable</li>
        <li>100% Best Services</li>
        <li>Door to Door Delivery</li>
      </ol>
      <Typography variant='h5'>Required Document for Collecting Car & Bike</Typography>
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

export default Car;
const Container = styled.div`
  margin-top: 1rem;
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
   li{
    margin: 1rem 0;
  }

`