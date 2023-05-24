import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { RoutesConfig } from './Routes/RoutesConfig';
import Footer from './pages/Footer/Footer';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import whatsappicon from './assets/whatsapp.png'

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar />
        <RoutesConfig />
        <Footer/>
        <BubbleWhatsapp>
          <IconButton color='success' href='https://wa.me/message/USGBMDQOXDTJI1' target='_blank' style={{ background: 'transparent' }}  >
            <img src={whatsappicon} alt='whatsappicon' />
          </IconButton>
       </BubbleWhatsapp>
      </BrowserRouter>
    </div>
  );
}

export default App;
const BubbleWhatsapp=styled.div`
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      img{
        width: 5.5rem;
        height:5.5rem;
      }
  @media screen and (max-width: 540px) {
    right: 0;
    img{
        width: 5rem;
        height:5rem;
      }
  }
  @media screen and (max-width: 414px) {
    bottom: 15%;
    right: 0;
    img{
      width: 4rem;
      height:4rem;
    }
  }
  @media screen and (max-width: 375px) {
    bottom: 2%;
    right: 2%;
    img{
      width: 4rem;
      height:4rem;
    }
  }
`