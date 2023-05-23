import React, { useEffect } from 'react'
import styled from 'styled-components'
import paymentQR from '../../assets/payment.png'
import { Typography } from '@mui/material'
const Payment = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
   
  return (
    <Container>
        <Typography textAlign='center' color='#fd5d1c' variant='h3'>Cloud Relcations Online Payment</Typography>
        <hr color='#fd5d1c' />
        <PdfContainer>
           <QRReader>
                 <img src={paymentQR} alt="" />
           </QRReader>
           <ContactDetails>
                <Typography variant='h5'>Name : Cloud Relocations</Typography>
                <Typography variant='h5'>Banking Name : Mr Subhrajeet Ray</Typography>
                <Typography variant='h5'>Email : info@cloudrelocations.com </Typography>
                <Typography variant='h5'>Phone Number: +919006167900</Typography>
           </ContactDetails>
        </PdfContainer>
    </Container>
  )
}

export default Payment
const Container=styled.div`
    background-color: white;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    hr{
        width: 50%;
       text-align: center;
        margin: .5rem auto 1rem auto;
    }
`
const PdfContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`
const QRReader=styled.div`

`
const ContactDetails=styled.div`

`