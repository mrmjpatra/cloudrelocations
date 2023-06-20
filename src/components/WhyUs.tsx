import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import Mover from '../assets/moverinuniform.png'

const WhyUs = () => {
    return (
        <div style={{ backgroundColor: 'white' }} >
            <WhyUSContainer>
                <WhyUsLeft>
                    <Typography variant='h3' color='#F05A29'>WHY US</Typography>
                    <Typography variant='h4'>BEST MOVERS AROUND</Typography>
                    <hr color='#F05A29'/>
                    <Typography variant='body2' color='#535353'>We have a head office at Bhubaneswar and operational offices at Bangalore, Pune, Hyderabad and Mumbai. Starting from March 2019 we are able to serve 50,00+ clients, 500+ business and 16+ branches in all over India and are still growing. Safe delivery with Customer satisfaction is our No#1 priority.
                    </Typography>
                    <li>
                        <div>01</div>
                        Free visit
                    </li>
                    <li>
                        <div>02</div>
                        Affordable Rates</li>
                    <li>
                        <div>03</div>
                        FAST AND SAFE DELIVERY</li>
                    <li>
                        <div>04</div>
                        24*7 customer service</li>
                    <li>
                        <div>05</div>
                        PAN INDIA NETWORK
                    </li>
                </WhyUsLeft>
                <WhyUsRight>
                    <img src={Mover} alt="Mover in uniform" />
                </WhyUsRight>
            </WhyUSContainer>
        </div>
    )
}

export default WhyUs;
const WhyUSContainer = styled.div`
    margin: 7rem auto 0;
    padding: 3rem 0;
    max-width: 1140px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  @media screen and (max-width: 820px) {
    margin: 0 auto 0;
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 640px) {
    padding: 1rem 1rem;
  }
`;
const WhyUsLeft = styled.div`
    
    li{
        margin-top: 1rem;
        list-style: none;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: bold;
        div{
            color: #F05A29;
            font-size: 1.2rem;
            font-weight: bold;
        }
    }
    p{
        line-height: 1.8rem;
        text-align: justify;
    }
    hr{
        width: 50%;
        margin: 1rem 0;
    }
  @media screen and (max-width: 820px) {
    margin-top: 2rem;
    h4{
        font-size: 1.5rem !important;
    }
    p{
        line-height: 1.5rem;
    }
    li{
        gap: 8px;
        font-weight: 500;
        div{
            color: #F05A29;
            font-size: 1rem;
            font-weight: 500;
        }
    }
  }
  @media screen and (max-width: 540px) {
    margin-top: 0;
     h3{
        font-size: 2rem !important;
    }
    h4{
        font-size: 1rem;
        margin: 0.2rem;
    }
    p{
        line-height: 1.2rem;
        text-align: justify;
    }
    hr{
        margin: .2rem 0;
    }
  }
 
  
    
`;
const WhyUsRight = styled.div`
    display: grid;
    place-items: center;
    img{
        border-radius: 1rem;
        width: 30rem;
        height: 20rem;
    }
  @media screen and (max-width: 820px) {
        img{
            width: 20rem;
        height: 12rem;
        }
       
    }
  @media screen and (max-width: 540px) {
    display: none;
  }
`;