import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import warehouseimg from '../../assets/warehouseimg.png'


const Warehouse = () => {
  return (
    <Container>
        <img src={warehouseimg} alt="" />
       <Typography variant='h3' color='#fd5d1c' textAlign='center'>Warehouse</Typography>
      <hr color='#fd5d1c' />
      <Typography variant='body1'>Cloud Relocations stands out among numerous organizations in the country that provide packing and moving services. While it may be challenging to choose the best and most reliable option from a multitude of firms, Cloud Relocations offers well-managed and efficient solutions for packing, moving, loading, unloading, as well as storage services in warehouses. Additionally, they offer a comprehensive range of logistics solutions, warehousing services, shipment arrangements, and door-to-door delivery.</Typography>
      <Typography variant='body1'>Our warehouse storage services are unrivalled, guaranteeing 100% excellence in terms of reliability, security, and efficiency.</Typography>
      <Typography variant='body1'>Warehousing and storage services have become increasingly vital in bridging the gap between production and consumption of goods, enhancing overall efficiency. Our dedicated and skilled staff ensures that the goods are stored in optimal conditions and kept secure. If you require efficient nationwide distribution of your bulk products to retailers, we can effectively handle that for you.</Typography>
      <Typography variant='h5'>Types of Warehouses - Private Warehouses/Public Warehouses</Typography>
      <Typography variant='body1'>Our warehouses are equipped to meet all the secure storage requirements of our clients. With various compartments and advanced technology for efficient loading, unloading, and safe storage of goods, we ensure that items are securely kept until the time of delivery.</Typography>
    </Container>
  )
}

export default Warehouse
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
    font-weight: 500;
    color: red;
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
      font-size: 1rem;
    }
  }
`