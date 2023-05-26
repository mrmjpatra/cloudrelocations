import { LocationOn } from '@mui/icons-material'
import { Button, TextField, Typography } from '@mui/material'
import { FormEvent, useState } from 'react';
import styled from 'styled-components'
import emailjs from '@emailjs/browser';


const BetweenCities = () => {
  const [city, setCity] = useState('');
  const [custName, setCustName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [orginAddrs, setOrginAddrs] = useState('')
  const [destAddrs, setDestAddrs] = useState('')
  const [date, setDate] = useState('');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    var templateParams = {
      custName,
      phoneNumber,
      email,
      city,
      orginAddrs,
      destAddrs,
      date
    };
    emailjs.send('service_eqr5wbk', 'template_tzw7ww2', templateParams, 'hk2zPs2bNYI1ofWO_')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (err) {
        console.log('FAILED...', err);
      });
    setCity('')
    setCustName('')
    setPhoneNumber('')
    setEmail('')
    setOrginAddrs('')
    setDestAddrs('')
    alert("Sent")
  }
  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <ExtraInputField>
            <TextField size='small' variant='outlined' label='Name' name={custName} value={custName} onChange={(e) => setCustName(e.target.value)} />
            <TextField size='small' variant='outlined' label='Phone Number' name={phoneNumber} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <TextField size='small' variant='outlined' label='Email' name={email} value={email} onChange={(e) => setEmail(e.target.value)} />
          </ExtraInputField>
          <Typography variant='h6' marginBottom='1rem'>Search your Locality</Typography>
          <InputControlContainer>
            <InputControl>
              <input type="text" name={orginAddrs} value={orginAddrs} placeholder='From' onChange={(e) => setOrginAddrs(e.target.value)} />
            </InputControl>
            <LocationIcon>
              <LocationOn />
            </LocationIcon>
          </InputControlContainer>
          <InputControlContainer>
            <InputControl>
              <input type="text" name={destAddrs} value={destAddrs} placeholder='To' onChange={(e) => setDestAddrs(e.target.value)} />
            </InputControl>
            <LocationIcon>
              <LocationOn />
            </LocationIcon>
          </InputControlContainer>
          <dl>
            <dt>Date</dt>
            <dd><input type="date" onChange={(e) => setDate(e.target.value)} /></dd>
          </dl>
          <Button onClick={handleSubmit} fullWidth variant='contained'>Book Now</Button>
        </form>
      </Container>
    </>
  )
}

export default BetweenCities;
const Container = styled.div`
    min-width: 200;
    
    @media screen and (max-width: 540px) {
    h6{
        font-size: 1rem;
    }
  }
  input[type='date']{
        width: 100%;
        margin: 0.7rem 0;
        height: 2rem;
        border: 2px solid black;
        border-radius: 0.2rem;
        padding: 0.4rem;
    }
    dl dt{
        font-size: 1.2rem;
        font-weight: 500;
    }
`
const InputControlContainer = styled.div`
    position: relative;
    margin-bottom: 1.2rem;
    input[type=text]{
        outline: none;
        border: 1.7px solid black;
        padding: 0.3rem 2rem;
        font-size: 1rem;
        border-radius: 5px;
        width: 100%;
    }
    @media screen and (max-width: 540px) {
    input[type=text]{
        font-size: 1rem;
        padding: 0.3rem 1.7rem;
        width: 100%;
    }
  }
`;
const InputControl = styled.div`
    position: relative;
`;
const LocationIcon = styled.div`
    position: absolute;
    left: 0px;
    top: 0.3rem;
    padding-left: 0.4rem;
    @media screen and (max-width: 540px) {
    top: 0.2rem;
    padding-left: 0.3rem;
    
  }
`;
const ExtraInputField = styled.div`
    margin: .3rem 0;
    display: grid;
    row-gap: .5rem;
`