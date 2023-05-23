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
        <img src="https://www.24x7packers.com/images/bg/household.jpg" alt="" />
        <WhichComp/>
        <WhyCloudRelocation/>
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
`;