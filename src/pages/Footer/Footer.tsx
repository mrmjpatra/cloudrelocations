import { Email, Facebook, Instagram, LocationOn, Phone, Twitter, WhatsApp, YouTube } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContactDescContainer>
                <FooterContactDesc>
                    <Address>
                        <LocationOn color='error' fontSize='large' />
                        <Typography variant='h5'>Address</Typography>
                        <Typography variant='body1'>OLDTOWN, BHUBANESWAR-751002</Typography>
                    </Address>
                    <hr />
                    <PhoneNumber>
                        <Phone color='error' fontSize='large' />
                        <Typography variant='h5'>Phone Number</Typography>
                        <Typography variant='body1'>
                            <a href="tel:+919006106900">+919006106900</a>&nbsp;
                            <a href="tel:+919006167900">+919006167900</a>
                        </Typography>
                    </PhoneNumber>
                    <hr />
                    <EmailAddress>
                        <Email color='error' fontSize='large' />
                        <Typography variant='h5'>Email Address</Typography>
                        <Typography variant='body1'>
                            <a href="mailto:cloudrelocations@gmail.com">cloudrelocations@gmail.com</a>
                        </Typography>
                    </EmailAddress>
                </FooterContactDesc>
            </FooterContactDescContainer>
            <FooterMainContainer>
                <FooterTopContainer>
                    <FooterTop>
                        <UseFulLinks>
                            <Typography variant='h5'>USEFUL LINKS</Typography>
                            <hr style={{ width: '50%' }} color='#F05A29' />
                            <ul>
                                <li>
                                    <Link to='/about'>About</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Contact</Link> </li>
                                {/* <li>
                                    <Link to='/blog'>Blog</Link> </li> */}
                                <li>
                                    <Link to=''>Why Choose Us</Link></li>
                            </ul>
                        </UseFulLinks>
                        <OtherLinks>
                            <Typography variant='h5'>OTHER LINKS</Typography>
                            <hr style={{ width: '50%' }} color='#F05A29' />
                            <ul>
                                <li>
                                    <Link to='/faq'>FAQ</Link> </li>
                                <li>
                                    <Link to='/payment'>Payment</Link> </li>
                                <li>
                                    <Link to='/privacy'>Privacy</Link> </li>
                                <li>
                                    <Link to='/terms-condition'>Terms & Conditions</Link> </li>
                            </ul>
                        </OtherLinks>
                        <Services>
                            <Typography variant='h5'>SERVICES</Typography>
                            <hr style={{ width: '50%' }} color='#F05A29' />
                            <ul>
                                <li>
                                    <Link to='/household-shifting'>Household Shifting</Link></li>
                                <li>
                                    <Link to='/office-shifting'>Office Relocation</Link></li>
                                <li>
                                    <Link to='/local-shifting'>Local Shifting</Link></li>
                                <li>
                                    <Link to='/warehouse-shifting'>Warehouse</Link></li>
                                <li>
                                    <Link to='/car-shifting'>Car Shifting</Link></li>
                                <li>
                                    <Link to='/bike-shifting'>Bike Shifting</Link></li>
                                <li>
                                    <Link to='/bulk-shifting'>Bulk Shipment</Link></li>
                            </ul>
                        </Services>
                        <Cities>
                            <Typography variant='h5'>CITIES</Typography>
                            <hr style={{ width: '50%' }} color='#F05A29' />
                            <ul>
                                <li>
                                    <Link to='/city/bhubaneswar'>Bhubaneswar</Link> </li>
                                <li>
                                    <Link to='/city/bangloare'>Bangloare</Link></li>
                                <li>
                                    <Link to='/city/pune'>Pune</Link></li>
                                <li>
                                    <Link to='/city/mumbai'>Mumbai</Link></li>
                                <li>
                                    <Link to='/city/hyderabad'>Hyderabad</Link></li>
                                <li>
                                    <Link to='/city/delhi'>Delhi</Link></li>
                                <li>
                                    <Link to='/city/kolkata'>Kolkata</Link></li>
                            </ul>
                        </Cities>
                    </FooterTop>
                </FooterTopContainer>

                <FooterBottom>
                    <hr color='#ff2200' />
                    <SocialMedia>
                        <IconButton target='_blank' href='https://www.facebook.com/cloudrelocations/' size='large' color='primary'>
                            <Facebook fontSize='large' />
                        </IconButton>
                        <IconButton target='_blank' href='https://www.instagram.com/cloudrelocations/' size='large' color='secondary'>
                            <Instagram fontSize='large' />
                        </IconButton>
                        <IconButton target='_blank' href='https://twitter.com/CloudRelocatons' size='large' color='primary'>
                            <Twitter fontSize='large' />
                        </IconButton>
                        <IconButton href='#' target='_blank' size='large' color='error'>
                            <YouTube fontSize='large' />
                        </IconButton>
                        <IconButton target='_blank' href='https://wa.me/message/USGBMDQOXDTJI1' size='large' color='success'>
                            <WhatsApp fontSize='large' />
                        </IconButton>
                    </SocialMedia>
                    <CopyRightsContainer>
                        <CopyRights>
                            <p>&copy; 2023 Cloud Relocations.All rights reserved.</p>
                        </CopyRights>
                        <Mrmj>
                            <p>&copy; Design & Developed by @mrmjpatra</p>
                        </Mrmj>
                    </CopyRightsContainer>
                </FooterBottom>
            </FooterMainContainer>
        </FooterContainer>
    )
}

export default Footer;
const FooterContainer = styled.div`
    margin-top: 10rem;
    background-color: white;
    color: white;
   
`;
const FooterContactDescContainer = styled.div`
    background-color:#15113c ;
    position: relative;
    h5{
        font-size: 1rem;
    }
    @media screen and (max-width: 640px) {
        margin-top: 6rem;
    }

`;
const FooterContactDesc = styled.div`
    box-shadow: 0 0 20px rgba(0,0,0,.7);
    background-color: rgb(12 10 39);
    border-radius: 2rem;
    position: absolute;
    bottom: -6rem;
    left: 25%;
    display: grid;
    grid-template-columns: 27.1% 0.1% 39% 0.1% 33%;
    justify-content: center;
    padding: 2rem;
     a{
        color: white;
    }
    @media screen and (max-width: 	1024px) {
        left: 14.6%;
    }
    @media screen and (max-width: 820px) {
        left: 7%;
    }
    @media screen and (max-width: 768px) {
        left: 0;
        border-radius: 0;
    }
    @media screen and (max-width: 640px) {
        grid-template-columns: 100%;
        width: 100%;
        border-radius: 1rem 0.5rem 0 0;
        padding: 1.5rem;
        row-gap: .5rem;
    }
`;
const Address = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    p{
        font-size: .8rem;
        width: 80%;
        text-align: center;
    }
    @media screen and (max-width: 820px) {
        svg{
            font-size: 1.5rem;
        }
        h5{
            font-size: 1.3rem;
        } 
        p{
            font-size: 0.9rem;
        }
    }
  @media screen and (max-width: 640px) {
  }
  @media screen and (max-width: 540px) {
        svg{
            font-size: 1.4rem;
        }
        h5{
            font-size: 1rem;
        } 
  }
`;
const PhoneNumber = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    p{
        width: 90%;
        text-align: justify;
    }
   
    @media screen and (max-width: 820px) {
        svg{
            font-size: 1.5rem;
        }
        h5{
            font-size: 1.3rem;
        } 
        p{
            width: 93%;
            font-size: 0.9rem;
        }
    }
  @media screen and (max-width: 640px) {
    svg{
            font-size: 1.4rem;
        }
        h5{
            font-size: 1rem;
        } 
        p{
            width: 90%;
            text-align: center;
        }
  }
`;
const EmailAddress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    p{
        width: 87%;
    }
    @media screen and (max-width: 820px) {
        svg{
            font-size: 1.5rem;
        }
        h5{
            font-size: 1.3rem;
        } 
        p{
            font-size: 0.9rem;
        }
    }
  @media screen and (max-width: 640px) {
    p{
        width: 33%;
    }
  }
  @media screen and (max-width: 480px) {
    p{
        width: 45%;
    }
  }
  @media screen and (max-width: 414px) {
    p{
        width: 52%;
    }
  }
  @media screen and (max-width: 393px) {
    p{
        width: 48%;
    }
  }
`;
const FooterMainContainer = styled.div`
    background-color:#0A081F ;

`;
const FooterTopContainer = styled.div`
    padding: 1rem 4rem;
  @media screen and (max-width: 540px) {
    padding: 1rem;
  }
`;
const FooterTop = styled.div`
    margin-top: 10rem;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    justify-items: center;
    ul{
        margin-top: 1rem;
        list-style-type: ">";
        padding-left: 10px;
        a{
            color: white;
            :hover{
            color: #F05A29;
            }
        }
    }
    li{
        line-height: 2rem;
        cursor: pointer;
        ::before {
            content: "";
            margin-right: 10px;
        }
        
    }
    @media screen and (max-width: 540px) {
        grid-template-columns: 1fr 1fr;
        /* justify-items: start; */
        justify-items: flex-start;
    }
    @media screen and (max-width: 375px) {
        margin-top: 7rem;
       h5{
        font-size: 1rem;
       }
       ul{
        margin-top: 0.3rem;
       }
       li{
        font-size: .6rem;
        line-height: 1rem;
       }
    }

`;

const UseFulLinks = styled.div`
    
`;
const OtherLinks = styled.div`
    
`;
const Services = styled.div`
    
`;
const Cities = styled.div`
    
`;
const FooterBottom = styled.div`
    position: relative;
`;
const SocialMedia = styled.div`
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    
`;
const CopyRightsContainer = styled.div`
    position: relative;
    @media screen and (max-width: 540px) {
        display: flex;
        flex-direction: column;
    }
`
const CopyRights = styled.div`
    text-align: center;
    p{
        padding: 1rem 0;
    }
`;
const Mrmj = styled.div`
    text-align: center;
    position: absolute;
    bottom: 0;
    right: .2rem;
    p{
        padding: 1rem 0;
    }
    @media screen and (max-width: 540px) {
        position: static;
        p{
        padding:0;
    }
    }
`;
