import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { testimonialList } from './testimonial';

const Reviews = () => {
    const options: Options = {
        type: 'loop',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        perPage:2 ,
        breakpoints: {
            820: {
              perPage: 1,
            },
            540:{

            }
          },
     }
    return (
        <ReviewsContainer>
            <ReviewTitle>
                <Typography variant='h3' color='#F05A29'>REVIEWS</Typography>
                <Typography variant='h5'>OUR HAPPY CUSTOMERS</Typography>
                <hr color='#F05A29' style={{ width: '50%' }} />
            </ReviewTitle>
            <Tesimonial>
                <Splide options={options} aria-labelledby="autoplay-example-heading"
                    hasTrack={false}>
                  
                        <SplideTrack>
                            {
                                testimonialList.map(item=> 
                                    <SplideSlide key={item.id}>
                                        <Card>
                                            <img src={item.photo} alt="" />
                                            <PesonName>
                                                <Typography color='#F05A29'>{item.name},</Typography>
                                                <Typography>{item.location}</Typography>
                                            </PesonName>
                                            <Typography style={{textAlign:'justify'}}>
                                            {item.review.length>80?`${item.review.substring(0,210)}...`:item.review}
                                            </Typography>
                                        </Card>
                                    </SplideSlide>)
                            }
                        </SplideTrack>
                </Splide>
            </Tesimonial>
        </ReviewsContainer>
    )
}

export default Reviews;

const ReviewsContainer = styled.div`
    background-color: whitesmoke;
    padding: 1rem 0;
`;
const ReviewTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 540px) {
    h3{
        font-size: 2rem;
    }
    h5{
        font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 414px) {
    h3{
        font-size: 1.8rem;
    }
      h5{
        font-size: 1rem;
      }
  }
`;
const Tesimonial = styled.div`
    /* position: relative; */
`;
const PesonName = styled.div`
    display: flex;
    justify-content: center;
    margin-top:.5rem;
    p{
        font-size: 1.5rem;
        font-weight: 500;
    }
  @media screen and (max-width: 540px) {
    p{
        font-size: 1rem;
    }
  }
`;

const Card=styled.div`
    padding: 2rem;
    width: 70%;
    border-radius: 1.5rem;
    box-shadow: rgba(72, 72, 72, 0.827) 0px 2px 20px 0px;
    background-color: white;
    margin: 3rem 2rem;
    img{
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 50%;
        position: absolute;
        left: 45%;
        top: 5%;
        z-index: 100;
        box-shadow: rgba(255, 59, 10, 0.781) 0px 2px 20px 0px;
    }
  @media screen and (max-width: 540px) {
    width: 80%;
    border-radius: 1rem;
    padding: 1rem;
    img{
        width: 3.5rem;
        height: 3.5rem;
    }
  }
  @media screen and (max-width: 414px) {
        width: 73%;
        border-radius: 0.5rem;
        padding: 0.5rem;
        p{
            font-size: 0.75rem;
            line-height: 1.5;
        }
        img{
            top: 8%;
        }
  }

`