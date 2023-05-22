import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { howitworklist } from './howitworklist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HowItWork = () => {
  return (
    <Container>
        <Typography variant='h3' textAlign='center' color='#FD5D1C'>How it Work?</Typography>
        <hr color='#FD5D1C' />
        <HowItWorkContainer>
            {
                howitworklist.map(list=> 
                <Row key={list.id}>
                    <ImageContainer>
                        <FontAwesomeIcon size='2x' color='#FD5D1C' icon={list.icon}/>
                    </ImageContainer>
                    <TextContainer>
                        <Typography variant='h5'>{list.title}</Typography>
                        <Typography variant='body1'>{list.content}</Typography>
                    </TextContainer>
                </Row>)
            }
           
        </HowItWorkContainer>
    </Container>
  )
}

export default HowItWork;
const Container=styled.div`
    background-color: whitesmoke;
    padding: 1rem;
    hr{
        width: 50%;
        margin: 1rem auto;
    }
  @media screen and (max-width: 540px) {
    padding: 0;
    padding-bottom: 1rem;
    h3{
        font-size: 2rem;
    }
    hr{
        margin: .6rem auto;
    }
  }
  @media screen and (max-width: 393px) {
    h3{
      padding-top: 1rem;
    }
  }
`;
const HowItWorkContainer=styled.div`
    padding: 2rem;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 8px 32px #00aff04d;
    width: 50%;
    margin: 2rem auto;
    @media screen and (max-width: 820px) {
       width: 90%;
    }
  @media screen and (max-width: 540px) {
    width: 95%;
    padding: 1.5rem;
    border-radius: .6rem;
  }
  @media screen and (max-width: 393px) {
    padding: 1rem;
    border-radius: .5rem;
    margin: .5rem auto;
  }
`;
const Row=styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  @media screen and (max-width: 393px) {
    margin-bottom: 1rem;
  }

`;
const ImageContainer=styled.div`
    
`;
const TextContainer=styled.div`
  @media screen and (max-width: 393px) {
    h5{
      font-size: 1rem;
      font-weight: 500;
    }
  }
    
`;