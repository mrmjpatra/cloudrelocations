import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { ValuesList } from './ValuesList';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
const Values = () => {
  return (
    <ValuesContainer>
      <Typography variant='h5'>Drs Management Believes In Transparency In All The Activities It Does And Ensure That Customers Delight Is Achieved Through Team Work, Innovation & Service And At The Same Time Contributing For Nation , Society and Environment.</Typography>
      <ListValues>
        {
          ValuesList.map(values=>
            values.content!=='' &&
          <div key={values.id}>
            <KeyboardVoiceIcon   fontSize='large' style={{color:'#F05A29'}}/>
            <Typography variant='overline'>{values.content}</Typography>
          </div>)
        }
      </ListValues>
    </ValuesContainer>
  )
}

export default Values;
const ValuesContainer = styled.div`
  background-color: whitesmoke;
  padding: 2rem;
`
const ListValues = styled.div`
  padding-left: 2rem;
  margin-top: 1rem;
  div{
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: .5rem;
  }
`