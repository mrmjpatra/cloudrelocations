import { LocationOn } from '@mui/icons-material';
import { Button, FormControl, FormHelperText, MenuItem, Select, TextField, Typography } from '@mui/material';
import { FormEvent, useState } from 'react'
import styled from 'styled-components';
import { topCityList } from '../../pages/CityWise/city';

const CityTempo = () => {
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
        <div>
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
                        <TextField size='small' variant='outlined' label='Name' name={custName} value={custName} onChange={(e) => setCustName(e.target.value)} />
                        <TextField size='small' variant='outlined' label='Phone Number' name={phoneNumber} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        <TextField size='small' variant='outlined' label='Email' name={email} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </ExtraInputField>
                    <Typography variant='h6'>Address</Typography>
                    <InputControlContainer>
                        <InputControl>
                            <input type="text" name="from" placeholder='From' />
                        </InputControl>
                        <LocationIcon>
                            <LocationOn />
                        </LocationIcon>
                    </InputControlContainer>
                    <InputControlContainer>
                        <InputControl>
                            <input type="text" name="to" placeholder='To' />
                        </InputControl>
                        <LocationIcon>
                            <LocationOn />
                        </LocationIcon>
                    </InputControlContainer>
                    <Button fullWidth variant='contained'>Book Now</Button>
                </form>
            </Container>
        </div>
    )
}

export default CityTempo;
const Container = styled.div`
    min-width: 200;
    form h6{
        margin-bottom: .3rem;
        font-size: 1rem;
    }
    @media screen and (max-width: 540px) {
    h6{
        font-size: 1rem;
    }
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