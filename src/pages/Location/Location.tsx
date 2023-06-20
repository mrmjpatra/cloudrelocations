import { LocationOn } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { topCityList } from '../CityWise/city'



const Location = () => {

  return (
    <Container>
      <ToOtherCity>
        <Typography textAlign='center' variant='h3' color='#FD5D1C'>Locations We Covered</Typography>
        <hr color='#F15A29' />
        <CityListContainer>
          <ul>
            {
              topCityList.map((city, index) =>
                <li key={index}>
                  <Link to={`/city/${city}`}>
                    <IconButton color='error'>
                      <LocationOn />
                    </IconButton>
                    {city}
                  </Link>
                </li>)
            }
          </ul>
        </CityListContainer>
      </ToOtherCity>
    </Container>
  )
}

export default Location;

const Container = styled.div`
  background-color: white;

`
const ToOtherCity = styled.div`
  padding-top: 1rem;
    hr{
        width: 70%; 
        margin: 1rem auto;
    }
    @media screen and (max-width: 640px) {
        hr{
          margin: .2rem auto;
        }
        h3{
          font-size: 1.5rem;
        }
    }
`;
const CityListContainer = styled.div`
    width: 90%;
    margin-left: 12.7rem;
    ul{
         display: grid;
         grid-template-columns: repeat(3,1fr);
         column-gap: 2rem;
        li{
            list-style: none;
        }
        a{
            color: black;
            font-weight: 500;
            :hover{
                color: #fd0909;
            }
        }
    }
    @media screen and (max-width: 640px) {
      width: 100%;
      margin-left: 0;
      ul{
        grid-template-columns: 50% 50%;
      }
    }
`