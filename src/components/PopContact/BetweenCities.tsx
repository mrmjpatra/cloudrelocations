import { LocationOn } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import styled from 'styled-components'

const BetweenCities = () => {
  return (
    <div>
      <Container>        
        <Typography variant='h6' marginBottom='1rem'>Search your Locality</Typography>
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
      </Container>
    </div>
  )
}

export default BetweenCities;
const Container=styled.div`
    min-width: 200;
    padding: 1rem;
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
        padding: 0.7rem 2rem;
        font-size: 1.2rem;
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
    top: 0.7rem;
    padding-left: 0.4rem;
    @media screen and (max-width: 540px) {
    top: 0.2rem;
    padding-left: 0.3rem;
    
  }
`;