import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import WhyCloudRelocation from '../../components/WhyCloudRelocation'
import HowItWork from '../../components/HowItWork'
import { IconButton, Typography } from '@mui/material'
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { whyList } from '../../components/whycloudrelocationslist'
import Bhubaneswar from './Bhubaneswar'
import Bangloare from './Bangloare'
import Delhi from './Delhi'
import Hyderabad from './Hyderabad'
import Pune from './Pune'
import Kolkata from './Kolkata'
import Mumbai from './Mumbai'
import { topCityList } from './city'
import { Link } from 'react-router-dom'
import { LocationOn } from '@mui/icons-material'
type conditionalCompType = {
    name: string,
    component: React.FC
}
const CityWise = () => {
    const locations = useLocation()
    const cityName = locations.pathname.slice(1).split('-')[2];
    const City=cityName.slice(0, 1).toUpperCase() + cityName.slice(1);
    const otherCityList=(topCityList.filter(item=>item.toLocaleLowerCase()!==City.toLocaleLowerCase())).sort();

    
    const cityList: conditionalCompType[] = [
        {
            name: 'bhubaneswar',
            component: Bhubaneswar
        },
        {
            name: 'delhi',
            component: Delhi
        },
        {
            name: 'bangloare',
            component: Bangloare
        },
        {
            name: 'kolkata',
            component: Kolkata
        },
        {
            name: 'pune',
            component: Pune
        },
        {
            name: 'hyderabad',
            component: Hyderabad
        },
        {
            name: 'mumbai',
            component: Mumbai
        },
    ]
    const WhichComp: React.FC = cityList.find(city => city.name === cityName)?.component || (() => <div>hello</div>);
    const options: Options = {
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        height: '20rem',
        perPage: 3,
        breakpoints: {
            820: {
                perPage: 2,
            },
        },
        arrows: false
    };
    useEffect(()=>{
        window.scrollTo(0,0)
    },[City])
    return (
        <MainContainer>
            <TopContainer>
                <Typography variant='h2' color='#fd5d1c'>Welcome to Cloud Relocations at {City}</Typography>

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

            <WhyCloudRelocation />
            {/* <WhichComp/> */}
            <SpecificCityComp>
                <Typography variant='h3'>Cloud Relocations Service at {City}</Typography>
                <hr  color='#F15A29' />
                <Typography variant='body1'>
                    Cloud Relocations is a leading packers and movers company based in {City}, specializing in providing seamless relocation services. With a firm commitment to excellence, we strive to make the daunting task of moving hassle-free and efficient for our valued clients.
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
                If you are in need of a trustworthy packers and movers’ company in {City}, look no further than Cloud Relocations. Contact us today for a seamless and stress-free moving experience.
                </Typography>
            </SpecificCityComp>
            <HowItWork />
            <ToOtherCity>
                        <Typography textAlign='center' variant='h3' color='#FD5D1C'>{City} To Other City</Typography>
                        <hr  color='#F15A29' />
                        <CityListContainer>
                           <ul>
                            {
                                
                                otherCityList.map((city,index)=>
                                   <Link to={`/shifting/${City.toLocaleLowerCase()}-to-${city.toLocaleLowerCase()}`} key={index}>
                                     <li>
                                        <IconButton color='error'>
                                            <LocationOn/>
                                        </IconButton>
                                       Cloud Relocations {City} to {city}
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
  @media screen and (max-width: 540px) {
   
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
`
const ToOtherCity=styled.div`
    margin: 1rem 0;
    hr{
        width: 70%; 
        margin: 1rem auto;
    }
`
const CityListContainer=styled.div`
    
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
`