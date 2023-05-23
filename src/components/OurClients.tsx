import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import '@splidejs/react-splide/css';
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { clientsList } from './clientsList';

const OurClients = () => {
    const options:Options = {
        type         : 'loop',
        gap          : '1rem',
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: false,
        height       : '20rem',
        perPage:3,
        breakpoints: {
            820: {
              perPage: 2,
            },
          },
      };
    return (
        <OurClientsContainer>
            <Typography textAlign='center' variant='h3' color='#F05A29'>Our Successful Clients</Typography>
            <hr  color='#F15A29' />
            <Typography variant='h5' textAlign='center'>Who trusted us!</Typography>
            <ClientsCarousel>
                <Splide options={options} aria-labelledby="autoplay-example-heading"
                        hasTrack={false}>
                        <SplideTrack>
                                {
                                    clientsList.map((image,index)=> 
                                        <SplideSlide key={index}>
                                            <Card>
                                                <img src={image} alt="" />
                                            </Card>
                                        </SplideSlide>)
                                }
                            </SplideTrack>
                    </Splide>
            </ClientsCarousel>
        </OurClientsContainer>
    )
}

export default OurClients;
const OurClientsContainer = styled.div`
    background-color: white;
    hr{
        width: 70%; 
        margin: 1rem auto;
        color: #F15A29;
    }
  @media screen and (max-width: 540px) {
    h3{
        font-size: 2rem !important;
    }
     hr{
        margin: .5rem auto;
    }
  }
`;
const ClientsCarousel = styled.div`
    background-color: whitesmoke;
    border-radius: 1rem;
`;
const Card = styled.div`
  @media screen and (max-width: 540px) {
    margin-bottom: 2rem;
    img{
        width: 8rem;
        height: 8rem;
    }
  }
    
`;