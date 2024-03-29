import styled from 'styled-components';
import HowItWork from '../../components/HowItWork';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import WhyCloudWithForm from '../../components/WhyCloudWithForm';

const CityToCity = () => {
    const location = useLocation().pathname.slice(10).split('-to-');
    const from = location[0].slice(0, 1).toLocaleUpperCase() + location[0].slice(1,)
    const to = location[1].slice(0, 1).toLocaleUpperCase() + location[1].slice(1,)
    return (
        <CityToCityContainer>
            <TopHeaderContainer>
                <Typography variant='h4' color='white'>SUPERFAST- SECURE CLOUD RELOCATIONS SERVICE {from.toLocaleUpperCase()} TO {to.toUpperCase()}  </Typography>
            </TopHeaderContainer>
            <ContentContainer>
                <Typography textAlign='center' variant='h3' color='#fd5d1c'>Cloud Relocations {from} to {to} </Typography>
                <hr color='#F15A29' />
                <Typography variant='body1'>
                    Our team of experienced professionals is dedicated to delivering top-notch service at every stage of the moving process. From packing and loading to transportation and unpacking, we handle every aspect of the relocation with utmost care and precision. We utilize high-quality packing materials and employ industry-best practices to ensure the safety and security of our clients' belongings during transit.
                </Typography>
                <Typography variant='body1'>
                    Customer satisfaction is our top priority, and we go the extra mile to exceed expectations. Our knowledgeable and friendly staff work closely with clients to understand their specific needs and create customized relocation plans that are efficient and cost-effective. We believe in clear communication and transparency, keeping our clients informed and updated throughout the entire process.

                </Typography>
                <Typography variant='body1'>
                    As a packers’ and movers’ company, we offer a comprehensive range of services. Whether it's local or long-distance moving, residential or commercial relocation, or even vehicle transportation, Cloud Relocations has the expertise and resources to handle it all. We are equipped with a modern fleet of vehicles and employ skilled drivers who ensure timely and secure delivery of goods to the desired destination.

                </Typography>
            </ContentContainer>
            <Typography variant='h3' textAlign={'center'} color='#FD5D1C'>Why Cloud Relocations ?</Typography>
                <hr color='#FD5D1C' />
            <WhyCloudWithForm/>
            <HowItWork />

        </CityToCityContainer>
    )
}

export default CityToCity;

const CityToCityContainer = styled.div`
    background-color: white;
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
  @media screen and (max-width: 414px) {
    padding-bottom: 5rem;
  }
`
const TopHeaderContainer = styled.div`
    height: 10rem;
    padding: 2rem 3rem;
    background:linear-gradient(90deg,#ff4800,#ff6a2e);
    h4{
        margin: 2rem 0;
    }
  @media screen and (max-width: 414px) {
    h4{
        font-size: 1.5rem;
        font-weight: 500;
        margin: 0;
    }
  }
  @media screen and (max-width: 375px) {
    padding: 2rem 1rem;
    h4{
        font-size: 1.2rem;
        font-weight: 500;
        margin: 0;
    }
  }
`
const ContentContainer = styled.div`
    margin-top: 1rem;
    padding: 2rem;
    hr{
        width: 50%;
        height: .2rem;
        margin:.6rem auto;
    }
    p{
        margin: 1rem 0;
        font-size: 1.8rem;
        text-align: justify;
    }
  @media screen and (max-width: 912px) {
    h3{
        font-size: 2.3rem;
        font-weight: 500;
    }
  }
  @media screen and (max-width: 414px) {
    padding: 2rem 0;
    h3{
        font-size: 1.5rem;
    }
    p{
        font-size: 1rem;
    }
  }
    
`