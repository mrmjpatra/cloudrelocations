import styled from 'styled-components';
import { IconButton, Typography } from '@mui/material';
import {  EmailRounded, Facebook, LinkedIn } from '@mui/icons-material';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import PopUpContact from './PopContact/PopUpContact';
const ContactAbout = () => {
    return (
        <ContactAboutMainContainer>
            <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
                <ContactAboutContainer>
                   <MainPopUpContainer>
                   <PopUpContactContainer>
                        <PopUpContact/>
                    </PopUpContactContainer>
                   </MainPopUpContainer>
                    <AboutUs>
                        <Typography variant='h3' color='#F15A29'>ABOUT</Typography>
                        <Typography variant='h4'>TRANSPORT & LOGISTICS</Typography>
                        <hr color='#F15A29' style={{ width: '70%', marginBottom: '1.4rem' }} />
                        <Typography variant='subtitle2' >We have all the necessary infrastructure and a decent workforce to take care of everything that you want or need to relocate. .</Typography>
                        <Typography variant='subtitle2' style={{ marginTop: '1rem' }}>We have a 100% track record of meeting the service expectations that our bona fide clients may have from us.
                        </Typography>
                        <Typography variant='subtitle2' >Talk to our authorities for all your queries related to home shifting and/or office relocation services in Bhubaneswar and elsewhere in India.</Typography>
                        <IconButtonContainer>
                            <IconButton style={{ backgroundColor: 'black', color: 'white' }} size='large'>
                                <EmailRounded />
                            </IconButton>
                            <IconButton style={{ backgroundColor: 'black', color: 'white' }} size='large'>
                                <Facebook />
                            </IconButton>
                            <IconButton style={{ backgroundColor: 'black', color: 'white' }} size='large'>
                                <LinkedIn />
                            </IconButton>
                        </IconButtonContainer>
                    </AboutUs>
                </ContactAboutContainer>
            </AnimationOnScroll>
        </ContactAboutMainContainer>
    )
}

export default ContactAbout;
const ContactAboutMainContainer=styled.div`
    background-color: whitesmoke;
    padding-bottom: 5rem;
  @media screen and (max-width: 540px) {
    padding-bottom: 1rem;
  }
`
const MainPopUpContainer=styled.div`
        /* position: relative; */
        height: 35rem;
        margin-bottom: 1rem;
  @media screen and (max-width: 540px) {
    height: 30rem;
  }
`
const PopUpContactContainer=styled.div`
     position: absolute;
     top: -12%;
  @media screen and (max-width: 820px) {
    top: 1%;
    left: 25%;
  }
  @media screen and (max-width: 540px) {
    left: 8%;
  }
    @media screen and (max-width: 393px) {
    left: 6.5%;
    }
`
const ContactAboutContainer = styled.div`
    display: grid;
    grid-template-columns: 55% 45%;
    column-gap: 1rem;
    width: 75%;
    margin: auto;
    position: relative;
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    width: 97%;
    position: initial;
  }
  @media screen and (max-width: 393px) {
    width: 100%;
  }
`;

const AboutUs = styled.div`
    padding: 1rem 2rem;
    display: grid; 
    place-content: center;
    text-align: justify;
    h6{
        margin-bottom: 1.2rem;
        margin-Top: 1.2rem;
    }
  @media screen and (max-width: 540px) {
    h3{
        font-size: 2rem;
    }
    h4{
        font-size: 1.6rem;
    }
    h6{
        margin-bottom: .5rem;
        margin-Top:.2rem;
    }
    
  }
`;
const IconButtonContainer = styled.div`
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 2rem;
  @media screen and (max-width: 540px) {
    margin-top: 0;
    gap: 1rem;
  }
`