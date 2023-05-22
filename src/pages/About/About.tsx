import { Typography } from '@mui/material';
import { usePath } from '../../hooks/usePath';
import { aboutMenuContent } from './aboutMenuContent';
import styled from 'styled-components';
const About = () => {
  const path = usePath();
  const Component = aboutMenuContent.find(menu => menu.path === path)?.component || DefaultAbout;

  return (
    <>
      <Component />
    </>
  )
}
const DefaultAbout = () =>
  <AboutContainer>
    <Typography variant='h3' color={'#F05A29'}>About Cloud Relocations Private Limited</Typography>
    <Typography variant='body1'> About Cloud Relocations Private Limited
    Cloud Relocations Private Limited One of the leading moving and
    sifting service providers Bhubaneswar as well as in India, we also
    present these services abroad. Though we have our main business
    headquarter in Bhubaneswar, we exactly present flawed house and
    intercontinental moving services. We take excellent care of each and
    every one items to be sifted or relocate by us equally at the time of
    loading/packing and sifting/moving at the same crosswise every
    corner on the world by water or oxygen cargo.</Typography>
    <Typography variant='body1'>It is one of the leading packers and mover’s companies in the
    industry. Our registered office is situated at Bhubaneswar. We are
    specialized in the relocation of Household objects, cars, bikes, office
    furniture and other heavy objects. As a service-based organization, we
    remain on our toes 24x7 to serve our customers with reasonable
    prices.</Typography>
    <Typography variant='body1'>We make use of cellophane sheets, bubble wraps, waterproof cartons,
    corrugated boxes as well as cello tapes for your items and ensure they
    are sent in carriers which have locks, seals. Our team follows the
    transparent process every time and our customer executives have all
    the answers to your queries/concerns.</Typography>
  </AboutContainer>;


export default About;

const AboutContainer=styled.div`
    background-color: whitesmoke;
    padding: 2rem;
    h3{
      margin: 1.4rem 0;
    }
    p{
      text-align: justify;
      line-height: 1.8rem;
      margin-bottom: 1.8rem;
      word-spacing: .15rem;
      font-size: 1.3rem;
    }
`