import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import SiteLogo from '../../assets/Cloud.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '@mui/material';
import PopUpContact from '../PopContact/PopUpContact2';
import { useNavigate } from 'react-router-dom';

const MiddleHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const myRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <MiddleHeaderContainer>
      <Logo onClick={() => navigate('/')}>
        <img src={SiteLogo} alt="SiteLogo" />
      </Logo>
      <ContentContainer>
        <a href="tel:+919006167900">
          <DialerMenu>
            <Dialer>
              <FontAwesomeIcon icon={faPhone} />
            </Dialer>
            <span>+919006167900</span>
          </DialerMenu>
        </a>
        <FreeQuote onClick={() => setIsOpen(true)}>
          GET A QUOTE NOW
        </FreeQuote>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <PopUpContact setIsOpen={setIsOpen} ref={myRef} />
        </Modal>
      </ContentContainer>
    </MiddleHeaderContainer>
  )
}

export default MiddleHeader;
const MiddleHeaderContainer = styled.div`
    display: flex;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
     a{
      text-decoration: none;
     }
    @media screen and (max-width: 663px) {
      padding-bottom:4rem;
    }
    @media screen and (max-width: 540px) {
      padding:0;
    }
    @media screen and (max-width: 393px) {
      padding-bottom:4rem;
    }
  

`;
const Logo = styled.div`
  img{
    width: 6rem;
    height: 5rem;
  }
  @media screen and (max-width: 540px) {
    img{
      width: 5rem;
      height: 4rem;
    }
  }
`;
const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  @media screen and (max-width:663px) {
    position: relative;
  }
  @media screen and (max-width:393px) {
    position: relative;
  }
 
`;
const pulse = keyframes`
  0% {
    transform: scale(.5);
    opacity: 0;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
`
const Dialer = styled.div`
    position: relative;
    right: 0;
    left: 26px;
    height: 44px;
    width: 44px;
    background-color: #F05A29;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: ${pulse};
    ::before{
      box-sizing: border-box;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
      position: absolute;
      content: "";
      border: 1px solid #ff3115;
      border-radius: 50%;
      animation: 1s linear infinite ${pulse};
    }
    ::after{
      box-sizing: border-box;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
      position: absolute;
      content: "";
      border: 1px solid #ff3115;
      border-radius: 50%;
      animation: 1s linear .3s infinite ${pulse};
    }
    svg{
      color: white;
      font-size: 26px;
      margin-right: 0px;
    }
   
`;
const DialerMenu = styled.div`
  display: flex;
  span{
    color: #000;
    transition: .3s;
    text-decoration: none!important;
    outline: 0!important;
    font-size: 1.5rem;
    font-weight: 900;
    margin-left: 54px;
    line-height: 42px;
    :hover{
      color: #ff3115;
    }
  }
`;
const FreeQuote = styled.div`
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    padding: 18px 40px;
    position: relative;
    font-family: "Poppins";
    background-color: #fa4216;
    transition: 500ms all ease;
    cursor: pointer;
    ::before{
      top: 0;
      width: 0;
      height: 0;
      content: "";
      left: -40px;
      position: absolute;
      border-top: 54.4px solid rgb(250, 66, 22);
      transition: all 500ms ease 0s;
      border-left: 40.5px solid transparent;
      @media screen and (max-width: 663px) {
      border-top: 3.9rem solid rgb(250, 66, 22);
    }
    @media screen and (max-width: 540px) {
      border-top: 26.4px solid rgb(250, 66, 22);
    }
    @media screen and (max-width: 393px) {
      border-top: 3.2rem solid rgb(250, 66, 22);
    }
   
  }  
  @media screen and (max-width:663px) {
    position: absolute;
    font-size: 1.4rem;
    top: 4rem;
    left: -64%;
  }
  @media screen and (max-width: 540px) {
    font-size: 14px;
    font-weight: 500;
    padding: 5px 5px
  }
  @media screen and (max-width:393px) {
      position: absolute;
      font-size: 2.2rem;
      top: 4rem;
      left: -4rem;
  }
 
`;