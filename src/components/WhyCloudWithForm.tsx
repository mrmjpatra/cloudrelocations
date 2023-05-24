import React from 'react'
import styled from 'styled-components';
import { whyList } from './whycloudrelocationslist';
import { Typography } from '@mui/material';
import PopUpContact from './PopContact/PopUpContact';

const WhyCloudWithForm = () => {
  return (
    <MainContainer>
            <Container>
                    {
                        whyList.map(list =>
                            <Content key={list.id}>
                                <IconContainer>
                                    <img src={list.icon} alt="" />
                                </IconContainer>
                                <TextContainer>
                                    <Typography variant='h5'>{list.title}</Typography>
                                    <Typography variant='body1'>{list.content}</Typography>
                                </TextContainer>
                            </Content>)
                    }
            </Container>
            <ContactForm>
                <PopUpContact/>
            </ContactForm>
        </MainContainer>
  )
}

export default WhyCloudWithForm
const MainContainer = styled.div`
    background-color: whitesmoke;
    height: 100%;
    padding: 2rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
  @media screen and (max-width: 912px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 820px) {
    padding: 0;
  }
`;
const ContactForm = styled.div`
    
    
`;
const Container = styled.div`
    padding: 2rem;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 8px 32px #00aff04d;
  @media screen and (max-width: 820px) {
    width: 90%;
  }
  @media screen and (max-width: 540px) {
    width: 95%;
    padding: 1.5rem;
    border-radius: 0.7rem;
  }
  @media screen and (max-width: 414px) {
        padding: .6rem;
        margin: auto;
  }
`;
const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;
const IconContainer = styled.div`
    img{
        width: 3rem;
        height: 3rem;
    }
  @media screen and (max-width: 414px) {
    width: 2.4rem;
    height: 2.3rem;
  }
   
`;
const TextContainer = styled.div`
    p{
        margin: .5rem 0 1rem;
    }
  @media screen and (max-width: 540px) {
    p{
        line-height: 1.9 !important;
        letter-spacing: 0 !important;
    }
  }
  @media screen and (max-width: 414px) {
    h5{
        font-size: 1.3rem;
        font-weight: 500;
    }
    p{
        line-height: 1.2 !important;
        letter-spacing: 0 !important;
        margin: 0.5rem 0px 1rem;
    }
  }
    
`;