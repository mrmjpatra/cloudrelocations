import React, { useEffect } from 'react'
import styled from 'styled-components'
import paymentpdf from '../../assets/payment.png'
import { Typography } from '@mui/material'
const Payment = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
   
  return (
    <Container>
        <Typography textAlign='center' color='#fd5d1c' variant='h2'>24X7 PACKERS AND MOVERS ONLINE PAYMENT</Typography>
        <hr color='#fd5d1c' />
        <PdfContainer>
            <img src={paymentpdf} alt="" />
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
       margin: 1rem 0;
    }
`
const PdfContainer=styled.div`
    width: 60%; /* Adjust the width as needed */
    height: 1000px; /* Adjust the height as needed */
    display: flex;
    justify-content: center;
   
`