import { LocationOn } from '@mui/icons-material';
import { Button, FormControl, FormHelperText, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { FormEvent, useState } from 'react'
import styled from 'styled-components';
import { topCityList } from '../../pages/CityWise/city';

const WithInCity = () => {
    const [city, setCity] = useState('');
    const [custName, setCustName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [orginAddrs, setOrginAddrs] = useState('')
    const [destAddrs, setDestAddrs] = useState('')
    const handleSubmit = (e: FormEvent) => {

        e.preventDefault();
        setCity('')
        setCustName('')
        setPhoneNumber('')
        setEmail('')
        setOrginAddrs('')
        setDestAddrs('')
    }
    return (
        <WithInCityContainer>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Typography variant='h6' marginBottom='1rem'>Search your Locality</Typography>
                    <FormControl fullWidth>
                        <Select
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                topCityList.map(city => <MenuItem key={city} value={city}>{city}</MenuItem>)
                            }

                        </Select>
                        <FormHelperText>Select City</FormHelperText>
                    </FormControl>
                    <ExtraInputField>
                        <TextField size='small' variant='outlined' label='Name' name={custName} value={custName} onChange={(e)=>setCustName(e.target.value)} />
                        <TextField  size='small'variant='outlined' label='Phone Number' name={phoneNumber} value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
                        <TextField size='small' variant='outlined' label='Email' name={email} value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </ExtraInputField>

                    <Typography variant='h6'>Address</Typography>
                    <InputControlContainer>
                        <InputControl>
                            <input type="text" name={orginAddrs} value={orginAddrs} placeholder='From' onChange={(e)=>setOrginAddrs(e.target.value)} />
                        </InputControl>
                        <LocationIcon>
                            <LocationOn />
                        </LocationIcon>
                    </InputControlContainer>
                    <InputControlContainer>
                        <InputControl>
                            <input type="text" name={destAddrs} value={destAddrs} placeholder='To' onChange={(e)=>setDestAddrs(e.target.value)} />
                        </InputControl>
                        <LocationIcon>
                            <LocationOn />
                        </LocationIcon>
                    </InputControlContainer>
                    <Button type='submit' fullWidth variant='contained'>Book Now</Button>
                </form>
            </Container>
        </WithInCityContainer>
    )
}

export default WithInCity;
const WithInCityContainer = styled.div`
  @media screen and (max-width: 540px) {
    h6{
        font-size: 1rem;
    }
  }
`;
const Container = styled.div`
    min-width: 200;
    form h6{
        margin-bottom: .3rem;
        font-size: 1rem;
    }
`
const InputControlContainer = styled.div`
    position: relative;
    margin-bottom: .5rem;
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
        padding: 0.2rem 1.7rem;
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

const ExtraInputField=styled.div`
    margin: .3rem 0;
    display: grid;
    row-gap: .5rem;
`