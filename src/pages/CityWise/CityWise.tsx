import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import WhyCloudRelocation from '../../components/WhyCloudRelocation'
import HowItWork from '../../components/HowItWork'
import { IconButton, Modal, Typography } from '@mui/material'
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { whyList } from '../../components/whycloudrelocationslist'
import { topCityList } from './city'
import { Link } from 'react-router-dom'
import { LocationOn } from '@mui/icons-material'
import PopUpContact2 from '../../components/PopContact/PopUpContact2'
import logo from '../../assets/form.png'
import PopUpContact from '../../components/PopContact/PopUpContact'
import WhyCloudWithForm from '../../components/WhyCloudWithForm'


const CityWise = () => {

    const { location } = useParams();
    const cityName = `${location?.slice(0, 1).toUpperCase()}${location?.slice(1).toLocaleLowerCase()}`;
    const otherCityList = topCityList.filter(city => city.toLowerCase() !== cityName.toLowerCase())
    const [isOpen, setIsOpen] = useState(false);
    const myRef = useRef(null);

    const options: Options = {
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        height: '20rem',
        perPage: 3,
        breakpoints: {
            912: {
                perPage: 2,
            },
            540:{
                height:'13rem',
                perPage: 1,
            }
        },
        arrows: false
    };
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])
    return (
        <MainContainer>
            <TopContainer>
                <Typography variant='h2' color='#fd5d1c'>Welcome to Cloud Relocations at {cityName}</Typography>

                <CityWiseCarousel>
                    <Splide options={options} aria-labelledby="autoplay-example-heading"
                        hasTrack={false}>
                        <SplideTrack>
                            {
                                whyList.map((list, index) =>
                                    <SplideSlide key={index}>
                                        <Card>
                                            <Typography variant='h5'>{list.title}</Typography>
                                            <Typography variant='body1'>{list.content}</Typography>
                                            <img src={list.icon} alt="" />
                                        </Card>
                                    </SplideSlide>)
                            }
                        </SplideTrack>
                    </Splide>
                </CityWiseCarousel>
            </TopContainer>

            <ContactPopUpContainer>
                <IconButton color='primary' onClick={() => setIsOpen(true)}>
                    <img src={logo} alt="" />
                </IconButton>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <PopUpContact2 setIsOpen={setIsOpen} ref={myRef} />
                </Modal>
            </ContactPopUpContainer>
            <SpecificCityComp>
                <Typography variant='h3'>Cloud Relocations Service at {cityName}</Typography>
                <hr color='#F15A29' />
                <Typography variant='body1'>
                    Cloud Relocations is a leading packers and movers company based in <b>{cityName}</b>, specializing in providing seamless relocation services. With a firm commitment to excellence, we strive to make the daunting task of moving hassle-free and efficient for our valued clients.
                </Typography>
                <Typography variant='body1'>
                    At Cloud Relocation, we understand that moving can be a stressful experience, whether it's a residential or commercial relocation. Therefore, we have tailored our services to cater to the unique needs and requirements of each client, ensuring a smooth and successful transition.
                </Typography>
                <Typography variant='body1'>
                    Our team of experienced professionals is dedicated to delivering top-notch service at every stage of the moving process. From packing and loading to transportation and unpacking, we handle every aspect of the relocation with utmost care and precision. We utilize high-quality packing materials and employ industry-best practices to ensure the safety and security of our clients' belongings during transit.
                </Typography>
                <Typography variant='body1'>
                    Customer satisfaction is our top priority, and we go the extra mile to exceed expectations. Our knowledgeable and friendly staff work closely with clients to understand their specific needs and create customized relocation plans that are efficient and cost-effective. We believe in clear communication and transparency, keeping our clients informed and updated throughout the entire process.

                </Typography>
                <Typography variant='body1'>
                    As a packers’ and movers’ company, we offer a comprehensive range of services. Whether it's local or long-distance moving, residential or commercial relocation, or even vehicle transportation, Cloud Relocations has the expertise and resources to handle it all. We are equipped with a modern fleet of vehicles and employ skilled drivers who ensure timely and secure delivery of goods to the desired destination.

                </Typography>
                <Typography variant='body1'>
                    Furthermore, we understand the importance of a well-managed timeline in the moving process. Our team works diligently to adhere to schedules and deadlines, minimizing any disruptions or delays.
                </Typography>
                <Typography variant='body1'>
                    With our commitment to professionalism, reliability, and customer satisfaction, Cloud Relocations has earned a stellar reputation in the industry. Our track record of successful relocations and positive client testimonials speak to our dedication and expertise.
                </Typography>
                <Typography variant='body1'>
                    If you are in need of a trustworthy packers and movers’ company in <b>{cityName}</b>, look no further than Cloud Relocations. Contact us today for a seamless and stress-free moving experience.
                </Typography>
            </SpecificCityComp>
            <ContactFormContainer>
                <Typography variant='h3' textAlign={'center'} color='#FD5D1C'>Why Cloud Relocations ?</Typography>
                <hr color='#FD5D1C' />
                <WhyCloudWithForm />
            </ContactFormContainer>
            <HowItWork />
            <ToOtherCity>
                <Typography textAlign='center' variant='h3' color='#FD5D1C'>{cityName} To Other City</Typography>
                <hr color='#F15A29' />
                <CityListContainer>
                    <ul>
                        {

                            otherCityList.map((city, index) =>
                                <Link to={`/shifting/${cityName.toLocaleLowerCase()}-to-${city.toLocaleLowerCase()}`} key={index}>
                                    <li>
                                        <IconButton color='error'>
                                            <LocationOn />
                                        </IconButton>
                                        Cloud Relocations {cityName} to {city}
                                    </li>
                                </Link>
                            )
                        }
                    </ul>
                </CityListContainer>
            </ToOtherCity>
        </MainContainer>
    )
}

export default CityWise;
const MainContainer = styled.div`
    padding: 1rem 2rem ;
    background-color: white;
  @media screen and (max-width: 912px) {
    padding: 1rem;
  }
`;
const TopContainer = styled.div`
    margin: 1rem 0;
    background-color: #fd5d1c;
    border-radius: 1rem;
    box-shadow: rgba(255, 59, 10, 0.781) 0px 4px 20px 0px;
    h2{
        font-weight: 500;
        color: white;
        padding-top: 2rem;
        text-align: center;
    }
  @media screen and (max-width: 1200px) {
    border-radius: .5rem;
    h2{
        font-size: 2.2rem;
    }
  }
  @media screen and (max-width: 540px) {
    border-radius: .5rem;
    h2{
        font-size: 1.4rem;
    }
  }
`;
const CityWiseCarousel = styled.div`
    border-radius: 1rem;
    margin: 0 1rem;
`;
const Card = styled.div`
    height: 10rem;
    padding: 20px;
    border-radius: 12px;
    background-color: whitesmoke;
    h5{
        font-weight: bold;
    }
    img{
            width: 2rem;
            height: 2rem;
        }
  @media screen and (max-width: 912px) {
    height: 10rem;
    h5{
        font-size: 1rem;
    }
    p{
        font-size: 1rem;
    }
    img{
        width: 1.5rem;
        height: 1.5rem;
    }
  }
    
`;
const SpecificCityComp = styled.div`
    padding: 2rem 0;
    hr{
        width: 70%; 
        margin: .5rem 0;
        height: .2rem;
        text-align: left;
    }
    p{
        margin: 1rem 0;
        font-size: 1.8rem;
        text-align: justify;
    }
  @media screen and (max-width: 912px) {
    h3{
        font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 820px) {
    h3{
        font-size: 2rem;
        font-weight: 500;
    }
    p{
        font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 540px) {
    h3{
        font-size: 1.5rem;
        font-weight: 500;
    }
    p{
        font-size: 1rem;
    }
  }
`
const ToOtherCity = styled.div`
    margin: 1rem 0;
    hr{
        width: 70%; 
        margin: 1rem auto;
    }
  @media screen and (max-width: 912px) {
    hr{
        margin: .2rem auto;
    }
  }
  @media screen and (max-width: 912px) {
    h3{
        font-size: 2rem;
        font-weight: 500;
    }
  }
  @media screen and (max-width: 912px) {
    padding-bottom: 2rem;
    h3{
        font-size: 1.5rem;
        font-weight: 500;
    }
  }
`
const CityListContainer = styled.div`
    ul{
         display: grid;
         grid-template-columns: repeat(3,1fr);
        li{
            list-style: none;
        }
        a{
            color: black;
            font-weight: 500;
            :hover{
                color: #fd0909;
            }
        }
    }
  @media screen and (max-width: 912px) {
    ul{
        grid-template-columns:repeat(2,1fr) ;
    }
  }
  @media screen and (max-width: 540px) {
    ul{
        grid-template-columns:repeat(1,1fr) ;
        padding-bottom: 2rem;
    }
    a{
            font-size: .7rem;
            font-weight: 100;
    }
  }
`;
const ContactPopUpContainer = styled.div`
    position: relative;
    img{
        width: 5rem;
        height: 7rem;
        position: fixed;
        right: 4rem;
        bottom: 10rem;
        z-index: 11;
        border: .5px solid #616161;
        border-radius: 0.2rem;
    }
  @media screen and (max-width: 540px) {
    img{
         width: 4rem;
        height: 5rem;
        bottom: 8rem;
        right: 1rem;
    }
  }
  @media screen and (max-width: 414px) {
    img{
        
        bottom: 25%;
        right: 3.5%;
    }
  }
  @media screen and (max-width: 375px) {
    img{
        
        bottom: 15%;
        right: 4%;
    }
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
