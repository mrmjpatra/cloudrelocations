import styled from 'styled-components';
import TransportBg from '../assets/slide2.png'
import { Typography } from '@mui/material';
import { serviceList } from './serviceList';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div style={{ position: 'relative' }}>
      <ServiceContainer>
      </ServiceContainer>
      <BlurBg>
      </BlurBg>
      <TextContainer>
        <Typography variant='h4' color='#FE5D1C'>OUR SERVICES</Typography>
        <hr color='#FE5D1C' />
      </TextContainer>
      <AnimationOnScroll animateOnce={true} animateIn="animate__backInUp">
        <div style={{ position: 'relative' }}>
          <ProvidedServiceContainer>
            {
              serviceList.map(service =>
                <Link to={service.link} key={service.id}>
                  <ServiceCard >
                    <service.icon style={{ color: '#FE5D1C', textAlign: 'center' }} />
                    <Typography variant='body1'>{service.title}</Typography>
                  </ServiceCard>
                </Link>
              )
            }
          </ProvidedServiceContainer>
        </div>
      </AnimationOnScroll>
    </div>
  )
}

export default Services;

const ServiceContainer = styled.div`
    height: 23rem;
    position :relative ;
    background: url(${TransportBg});
    background-position: center;
    background-size: cover;
  @media screen and (max-width: 540px) {
    height: 12rem;
  }
`;
const BlurBg = styled.div`
    background-color: rgba(0,0,0,0.8);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
`;
const TextContainer = styled.div`
    position: absolute;
    width: 15rem;
    left: 41%;
    top: 10%;
    h4{
      font-size: 1.7rem;
    }
    hr{
        color: #FE5D1C;
        width: 30%;
        margin: auto;
        transition: width ease-in 1s;
    }
    :hover{
        cursor: pointer;
       hr{
        width: 60%;
       }
    }
  @media screen and (max-width: 540px) {
    h4{
        font-size: 1.2rem;
    }
    hr{
        margin: 0;
    }
  }
  @media screen and (max-width: 414px) {
    h4{
        font-size: 1rem;
    }
    hr{
        width: 30%;
    }
  }
`;
const ProvidedServiceContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    position: absolute;
    left: 13%;
    padding: 2rem;
    bottom: -6rem;
    a{
      color: black;
    }
  @media screen and (max-width: 820px) {
    left: 5%;
    bottom: 0;
  }
  @media screen and (max-width: 540px) {
    left: 3.8%;
    gap: 1rem;
    padding: 1rem;
  }
  @media screen and (max-width: 414px) {
    left: 0%;
    bottom: 1.3rem;
  }
`;
const ServiceCard = styled.div`
    padding: 1rem;
    text-align: center;
    width: 13rem;
    height: 8rem;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.2);
    transition: background 0.5s, border 0.5s, border-radius 0.5s, box-shadow 0.5s;
    margin: 0px 0px 0px 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    svg{
        font-size: 3rem;
    }
    :hover{
        box-shadow:0px 2px 20px 0px rgba(254, 92, 28, 0.829) ;
        cursor: pointer;
    }
  @media screen and (max-width: 820px) {
    width: 8rem;
    height: 5rem;
    gap: .2rem;
    padding: 0.1rem .5rem;
    border-radius: .5rem;
    justify-content: center;
    svg{
        font-size: 1.2rem;
    }
    p{
        font-size: .8rem;
    }
  @media screen and (max-width: 414px) {
    width: 3.7rem;
    height: 2.5rem;
    gap: .1rem;
    padding: 0;
    border-radius: .3rem;
    svg{
        font-size: .8rem;
    }
    p{
        font-size: .35rem;
    }
  }

  }
  @media screen and (max-width: 540px) {
    border-radius: .3rem;
    width: 3.4rem;
    height: 2.2rem;
    gap: .2rem;
    padding: 0;
    justify-content: center;
    svg{
        font-size: .7rem;
    }
    p{
        font-size: .3rem;
    }
  }
`;