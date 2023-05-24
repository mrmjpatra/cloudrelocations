import React, { useEffect } from 'react'
import styled from 'styled-components'
import paymentQR from '../../assets/payment.png'
import { Typography } from '@mui/material'
const Payment = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <Container>
            <Typography textAlign='center' color='#fd5d1c' variant='h3'>Cloud Relocations Online Payment</Typography>
            <hr color='#fd5d1c' />
            <PdfContainer>
                <QRReader>
                    <img src={paymentQR} alt="" />
                </QRReader>
                <ContactDetails>
                    <Typography variant='h5'><b>Name : </b>Cloud Relocations</Typography>
                    <Typography variant='h5'><b>Banking Name :</b> Mr Subhrajeet Ray</Typography>
                    <Typography variant='h5'><b>Email :</b> info@cloudrelocations.com </Typography>
                    <Typography variant='h5'><b>Phone Number:</b> +919006167900</Typography>
                </ContactDetails>
            </PdfContainer>
        </Container>
    )
}

export default Payment
const Container = styled.div`
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
@media only screen and (max-width: 414px) {
    padding: 1rem 0rem;
    padding-bottom: 6rem;
    h3{
        font-size: 1.6rem;
    }
}
`
const PdfContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
@media only screen and (max-width: 414px) {
    flex-direction: column;
}
`
const QRReader = styled.div`

`
const ContactDetails = styled.div`
    h5{
        margin-bottom: 1rem;
    }
`