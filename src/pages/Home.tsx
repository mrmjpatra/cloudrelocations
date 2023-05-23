import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../components/HeaderContainer';
import ContactAbout from '../components/ContactAbout';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Reviews from '../components/Reviews';
import OurClients from '../components/OurClients';
import WhyCloudRelocation from '../components/WhyCloudRelocation';
import HowItWork from '../components/HowItWork';



const Home = () => {

  return (
    <HomeContainer>
       <HeaderContainer/>
       <ContactAbout/>
       <Services/>
       <WhyUs/>
       <Reviews/>
       {/* <OurProcess/> */}
       <OurClients/>
       <WhyCloudRelocation/>
       <HowItWork/>
      
    </HomeContainer>
  )
}

export default Home;
const HomeContainer=styled.div`
        position: relative;
`;

