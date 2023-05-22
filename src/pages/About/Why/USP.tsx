import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { USPList } from './USPList';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
const USP = () => {
  return (
    <USPContainer>
      <Typography variant='h3' style={{color:'#F05A29',width:'50%',margin:'auto',textAlign:'center'}}>Why APM
      </Typography>
      <USPListContainer>
      {
        USPList.map(list=>
          list.content!=='' &&
          <div key={list.id}>
           <KeyboardVoiceIcon   fontSize='large' style={{color:'#F05A29'}}/>
            <Typography variant='h5'>{list.content}</Typography>
          </div>
          )
      }
      </USPListContainer>
    </USPContainer>
  )
}

export default USP;

const USPContainer = styled.div`
   background-color: whitesmoke;
  padding: 2rem;
`;
const USPListContainer = styled.div`
 padding-left: 2rem;
  margin-top: 1rem;
   div{
    display: flex;
    gap: 1rem;
    margin-bottom: .5rem;
    align-items: center;
  }
`