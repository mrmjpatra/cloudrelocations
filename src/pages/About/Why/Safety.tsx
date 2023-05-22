import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Safety = () => {
  return (
    <SaftyContainer>
      <Typography variant='h3' style={{ color: '#F05A29' }}>Safety Features</Typography>
      <Typography variant='h6' style={{ color: '#F05A29' }}>Cloud Relocations Overview of the Quality Assurance on Moving Process</Typography>
      <Typography variant='body1'>Quality is the prime focus of Agarwal Packers and Movers and it distinguishes us from our competitors. We follow a strict quality control policy in our services as well as client dealings and make use of advanced innovative techniques that enables us to offer efficient range of Logistics Services. We handle each and every object with extreme care and use superior quality packing material to ensure safe delivery and zero damage.</Typography>
      <Typography variant='h5'>Policy and Objectives</Typography>
      <Typography variant='body1'>Agarwal Packers and Movers’s quality policy is to achieve sustained, profitable growth by providing services which consistently satisfy the needs and expectations of its customers.

        This level of quality is achieved through adoption of a system of procedures that reflect the competence of the Agarwal Packers and Movers to existing customers, potential customers, and independent auditing authorities.

        Achievement of this policy involves all staff, who is individually responsible for the quality of their work, resulting in a continually improving working environment for all. This policy is provided and explained to all related employee by the Quality Manager.

        Quality assurance demands a degree of detail in order to be fully implemented at every step. Planning, for example, could include investigation into the quality of the packing materials used or the inspection processes used. The Checking step could include customer feedback, surveys, or other marketing vehicles to determine if customer needs are being exceeded and why they are or are not. Acting could mean a total revision in the packing and storage process in order to correct a technical or cosmetic flaw in packing.

        Absence of transhipment: The goods inside the container are not shifted at any point of time. 'Portable Home' unit can be lifted as a whole and conveniently attached from one base vehicle to another. Therefore, break-down or non availability of permits does not affect its journey and goods are delivered on time. Tamper proof sealing and locking.</Typography>
    </SaftyContainer>
  )
}

export default Safety;
const SaftyContainer = styled.div`
  background-color: whitesmoke;
  padding: 2rem;
  text-align: justify;
  h3,h6{
    text-align: center;
  }
  h6,h5{
    margin: 1rem 0;
  }
  p{
    line-height: 2rem;
  }
`