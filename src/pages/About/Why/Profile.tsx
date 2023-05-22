import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { ProfileList } from './ProfileList';
import { KeyboardVoice } from '@mui/icons-material';

const Profile = () => {
  return (
    <ProfileContainer>
      <Typography variant='h3' style={{ color: '#F05A29',textAlign:'center'}}>Cloud Relocations Profile</Typography>
      <Typography variant='body1'>Agarwal Packers and Movers is the excellent name among packers and movers service providers of India. We offer world class packing, loading, unloading, transportation, unpacking, car transportation services including warehousing of household goods and commercial goods in India. We provide services to all cities in India. Our relocation experts are always committed to provide International quality relocation solutions for each and every type of requirements.</Typography>
      <Typography variant='body1'>Agarwal Movers and Packers conducts more than 40,000 relocations every year, transferring Corporate and government employees and moving individual customers. The company operates in more than 100 self owned branches across India and an extensive network of franchisees and other service providers across pan India.Top Packers and Movers management team includes some of our industry's most respected leaders-men who redefine relocation every day in their words and deeds. They are charged with ensuring that 100% reliable packers and mover is moving the relocation industry forward, and that Best Packers and Movers itself leads the charge. Our management team insists upon excellence in all that we do; most notably, in serving our customers.</Typography>
      <Typography variant='body1'>Winning business today is more than just delivering customer service; it's about earned trust, daily accountability and long-term partnerships. That describes the value-add Agarwal Packers & Movers brings. In the household goods corporate relocation industry, we serve more than 200 companies and growing. For your high-quality domestic or cross-border services, you'll want APM on your team.</Typography>
      <ProfileListContainer>
        {
          ProfileList.map(list =>
            list.content!=='' &&
            <div key={list.id}>
              <KeyboardVoice   fontSize='large' style={{color:'#F05A29'}}/>
              <Typography variant='body1'>{list.content}</Typography>
            </div>)
        }
      </ProfileListContainer>
    </ProfileContainer>
  )
}

export default Profile;
const ProfileContainer = styled.div`
  background-color: whitesmoke;
  padding: 2rem;
  p{
    text-align: justify;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;
const ProfileListContainer = styled.div`
  padding-left: 2rem;
  margin-top: 1rem;
   div{
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
    p{
    margin-bottom: 0 !important;
    }
  }
`;