import { Typography } from '@mui/material';
import React, { useEffect } from 'react'
import styled from 'styled-components';
import PopUpContact from '../../components/PopContact/PopUpContact';

const Contact = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <ContactContainer>
      <Typography variant='h2' textAlign='center' color='#fd5d1c'>Contact Us</Typography>
      <hr color='#fd5d1c' />
      <ContactFormContainer>
        <PopUpContact/>
      </ContactFormContainer>
      <ContactDetails>
        <Typography variant='h5'><b>Address</b> : 45/559, PUNAMAGATE OLDTOWN, Lingaraj, Khordha,BHUBANESWAR-751002</Typography>
        <Typography variant='h5'><b>Phone Number</b> :&nbsp;
                       <a href="tel:+919005009937">+919005009937 </a>&nbsp;
                       <a href="tel:+919005003387">+919005003387 </a>
        </Typography>
        <Typography variant='h5'><b>Email Address</b> :&nbsp;
              <a href="mailto:cloudrelocations@gmail.com">cloudrelocations@gmail.com</a> &nbsp;
              <a href="mailto:info@cloudrelocations.com">info@cloudrelocations.com </a>
          </Typography>
      </ContactDetails>
    </ContactContainer>
  )
}

export default Contact;
const ContactContainer=styled.div`
  background-color: white;
  padding: 2rem 3rem;
  h2{
    font-size: 2rem;
    font-weight: bold;
  }
  hr{
    width: 50%;
    margin:.5rem auto;
  }
@media only screen and (max-width: 414px) {
  padding: 0;
  padding-bottom: 5rem;
  h2{
    padding-top: 1rem;
    font-size: 1.8rem;
  }
  hr{
    margin:0 auto;
  }
}
`;
const ContactFormContainer=styled.div`
  width: 50%;
  margin: 1rem auto;
  @media only screen and (max-width: 912px) {
    width: 70%;
}
  @media only screen and (max-width: 540px) {
    width: 100%;
}
`
const ContactDetails=styled.div`
  padding-bottom: 2rem;
  h5{
    margin: 1rem;
  }
  @media only screen and (max-width: 540px) {
    h5{
      font-size: 1.2rem;
    }
  }
@media only screen and (max-width: 414px) {
  h5{
      font-size: 1rem;
    }
}
`