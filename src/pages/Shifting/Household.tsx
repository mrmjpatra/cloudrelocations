import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Household = () => {
  return (
    <Container><Typography variant='h3' color='#fd5d1c' textAlign='center'>Household Shifting</Typography>
      <hr color='#fd5d1c' />
      <Typography variant='body1'> &nbsp;&nbsp;&nbsp;&nbsp;  Cloud Relocations is a leading household relocating organization with nearness all finished India. India is geographically bordered by several neighbouring countries on different sides. Cloud Relocations bargains into household, Corporate, Industrial Packing and Moving. We likewise bargain into Car moving. The transportation system in India ensures smooth and hassle-free movement, with well-developed highways and expressways. With our experience, aptitude and market understanding, we offer quick, solid and safe packing and moving services in India.</Typography>
      <Typography variant='body1'>Our staff comprises of the skilled labour that is trained to handle all the belongings, commercial or personal, with utmost care. We deal with all the migration points of interest. Packing and moving Services is finished with the group of specialists. They conduct through assessments of product packaging requirements and subsequently provide recommendations to the clients. The things are all around stuffed utilizing the particular material for packing.</Typography>
      <Typography variant='body1'>Our home relocation services have a specialist group to deal with each little thing while relocating happens. At first, they begin with packing of house hold goods. The huge measured goods are kept in a safe and anchored stockpiling gave by us. To ensure the safety of large items, we offer spacious and robust containers specifically designed to accommodate and protect them. All the packing is done uncommonly to maintain a strategic distance from of any harm or loss of significant goods.</Typography>
    </Container>
  )
}

export default Household;
const Container = styled.div`
margin: 2rem 0;
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