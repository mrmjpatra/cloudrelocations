import React, { useEffect } from 'react'
import styled from 'styled-components';
import WhyCloudRelocation from '../../components/WhyCloudRelocation';
import HowItWork from '../../components/HowItWork';
import { useLocation } from 'react-router-dom';
import Household from './Household';
import Office from './Office';
import Local from './Local';
import Warehouse from './Warehouse';
import Car from './Car';
import Bike from './Bike';
import Bulk from './Bulk';
import householdimg from '../../assets/household.png'
import { Typography } from '@mui/material';
import WhyCloudWithForm from '../../components/WhyCloudWithForm';
type conditionalCompType={
    location:string,
    component:React.FC
}
const HomeIndex = () => {
   const locations=useLocation()
   const shifting=locations.pathname.slice(1).split('-')[0]
    const citywise:conditionalCompType[]=[
        {
            location:'household',
            component:Household
        },
        {
            location:'office',
            component:Office
        },
        {
            location:'local',
            component:Local
        },
        {
            location:'warehouse',
            component:Warehouse
        },
        {
            location:'car',
            component:Car
        },
        {
            location:'bike',
            component:Bike
        },
        {
            location:'bulk',
            component:Bulk
        },
    ]
   const WhichComp:React.FC =citywise.find(city=>city.location===shifting)?.component || (() => <div>hello</div>);
    useEffect(()=>{
        window.scrollTo(0,0)
    },[shifting])
  return (
    <MainContainer>
        <WhichComp/>
        <ContactFormContainer>
                <Typography variant='h3' textAlign={'center'} color='#FD5D1C'>Why Cloud Relocations ?</Typography>
                <hr color='#FD5D1C' />
                <WhyCloudWithForm />
            </ContactFormContainer>
       <HowItWork/>
    </MainContainer>
  )
}

export default HomeIndex;

const MainContainer=styled.div`
    padding: 1rem 3rem ;
    background-color: white;
    img{
        background-size: cover;
        width: 100%;
    }
  @media screen and (max-width: 414px) {
    padding: 1rem .6rem ;
    padding-bottom: 5rem;
  }
`;
const ContactFormContainer = styled.div`
    background-color: whitesmoke;
    hr{
        width: 50%;
        margin: 1rem auto;
    }
  @media screen and (max-width: 540px) {
    padding: 0.4rem;
    h3{
        font-size: 2rem;
    }
    hr{
        margin: .5rem auto;
    }
  }
    
`