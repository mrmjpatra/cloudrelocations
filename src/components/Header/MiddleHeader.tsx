import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import SiteLogo from '../../assets/Cloud.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Modal, Typography } from '@mui/material';
import PopUpContact from '../PopContact/PopUpContact2';
import { useLocation, useNavigate } from 'react-router-dom';

const MiddleHeader = () => {
  const location=useLocation().pathname;
  const city=location.indexOf('/city');
  let cityName=''
  if (city!==-1) {
    cityName=location.slice(6)
  }
  const [isOpen, setIsOpen] = useState(false);
  const myRef = useRef(null);
  const navigate = useNavigate();
  const path=useLocation().pathname;
  const timing=path==='/'?5000:10000
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, timing);
    return () => clearTimeout(timeout);
  }, [location,timing]);
  return (
    <MiddleHeaderContainer>
      <Logo onClick={() => navigate('/')}>
        <img src={SiteLogo} alt="SiteLogo" />
        <Typography variant='h5'>Your Shifting | Our Responsibility</Typography>
      </Logo>
      <ContentContainer>
        <a href="tel:+919006167900">
          <DialerMenu>
            <Dialer>
              <FontAwesomeIcon icon={faPhone} />
            </Dialer>
            <span>
              {
                cityName==='bhubaneswar'?'+919006106900':'+919006167900'
              }
            </span>
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
     @media screen and (max-width: 762px) {
       flex-direction: column;
       gap: 1rem;
     }
    @media screen and (max-width: 663px) {
      flex-direction: row;
      justify-content: flex-start;
    }
    @media screen and (max-width: 640px) {
      flex-direction: column;
      padding: 1rem 1rem 4rem .5rem;
    }
    @media screen and (max-width: 540px) {

    }
    @media screen and (max-width: 414px) {

    }
  

`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  img{
    width: 6rem;
    height: 5rem;
  }
  h5{
    font-weight: 500;
    color: #F64217;
    box-shadow: 7px 7px 8px #888888;
    padding: 0.4rem;
    border-radius: 0.5rem;
  }
  @media screen and (max-width: 912px) {
    flex-direction: column;
    gap: 0;
    h5{
        font-size: .8rem;
    }
  }
  @media screen and (max-width: 820px) {
    h5{
        font-size: .8rem;
        /* box-shadow: none; */
    }
  }
  @media screen and (max-width: 640px) {
    h5{
      display: none;
    }
  }
  @media screen and (max-width: 540px) {
    img{
      width: 5rem;
      height: 4rem;
    }
  }
  @media screen and (max-width: 414px) {
   
  }
`;
const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  @media screen and (max-width:762px) {
     gap: 3rem;
  }
  @media screen and (max-width:663px) {
    position: relative;
    display: block;
    display: flex;
    
  }
  @media screen and (max-width:640px) {
   width: 100%;
  }
  @media screen and (max-width:414px) {
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
    left: 1.8rem;
    height: 2.7rem;
    width: 2.7rem;
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
    @media screen and (max-width: 640px) {
      ::after{
        width: calc(100% + 10px);
        height: calc(100% + 10px);
      }
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
    margin-left: 2.6rem;
    line-height: 42px;
    :hover{
      color: #ff3115;
    }
  }
`;
const FreeQuote = styled.div`
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    padding: 1.094rem 2.4rem;
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
    @media screen and (max-width: 768px) {
      border-top: 3.4rem solid rgb(250, 66, 22);
    }
    @media screen and (max-width: 762px) {
      border-top: 3.4rem solid rgb(250, 66, 22);
    }
    @media screen and (max-width: 663px) {
      border-top: 3.4rem solid rgb(250, 66, 22);
    }

    @media screen and (max-width: 540px) {
      border-top: 26.4px solid rgb(250, 66, 22);
    }
    @media screen and (max-width: 414px) {
      border-top: 2.4rem solid rgb(250, 66, 22);
    }
   
  }  
  @media screen and (max-width:640px) {
    padding: 0.795rem 2.4rem;
    position: absolute;
    font-size: 1.5rem;
    top: 0;
    right: 0;
  }
  @media screen and (max-width: 540px) {
    font-weight: 500;
    padding: 5px 5px
  }
  @media screen and (max-width:414px) {
      position: absolute;
      top: 4rem;
  }
 
`;