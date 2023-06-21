import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import DeliveryMan from '../assets/man.png'

const HeaderContainer = () => {
    return (
        <HeaderContainers>
            <HeaderLeftContainers>
                <TextContent>
                    <Typography variant='h2' color='#d07200' fontWeight='bold' >MOVING</Typography>
                    <Typography variant='h2' fontWeight='bold'>WAS NEVER</Typography>
                    <Typography variant='h2' fontWeight='bold'>SO EASY</Typography>
                    <hr color='#d07200' />
                    <Typography variant='h5' fontWeight='bold'>FAST AND SECURE MOVE</Typography>
                </TextContent>
            </HeaderLeftContainers>
            <HeaderRightContainers>
                <img src={DeliveryMan} alt="" />
            </HeaderRightContainers>
        </HeaderContainers>
    )
}

export default HeaderContainer;
const HeaderContainers = styled.div`
    max-width: 1140px;
    display: flex;
    align-items: center;
    margin: auto;
    padding: 2rem 2rem 0 2rem;
    position: relative;
    @media screen and (max-width: 540px) {
        padding: 1rem 1rem 0;
    }
    @media screen and (max-width: 414px) {
        padding: .7rem .4rem 0;
        flex-direction: column-reverse;
        row-gap: 1rem;
    }
    @media screen and (max-width: 393px) {
        padding: .7rem .4rem 0;
        flex-direction: column-reverse;
        row-gap: 1rem;
    }
`;
const HeaderLeftContainers = styled.div`
    width: 50%;
   @media screen and (max-width: 414px) {
    width: 80%;
   }
`;
const TextContent = styled.div`
    h5{
        margin-top: 2rem;
    }
    @media screen and (max-width: 540px) {
        h2{
            font-size: 1.5rem;
        }
    }
   @media screen and (max-width: 414px) {
    h5{
        margin-top: 0rem;
    }
   }
`
const HeaderRightContainers = styled.div`
    display: flex;
    justify-content: flex-end;
   img{
    width: 100%;
    height: 100%;
    filter: drop-shadow(8px 8px 8px black);
   }
   @media screen and (max-width: 640px) {
    justify-content: flex-start;
   }
`;