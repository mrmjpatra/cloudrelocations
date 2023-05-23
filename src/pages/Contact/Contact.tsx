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
        <Typography variant='h5'><b>Address</b> : 45/559, PUNAMAGATE OLDTOWN,Lingaraj,Khordha,BHUBANESWAR-751002</Typography>
        <Typography variant='h5'><b>Phone Number</b> : +919006106900 +919006167900</Typography>
        <Typography variant='h5'><b>Email Address</b> : cloudrelocations@gmail.com</Typography>
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
`;
const ContactFormContainer=styled.div`
  width: 50%;
  margin: 1rem auto;
`
const ContactDetails=styled.div`
  h5{
    margin: 1rem;
  }
`