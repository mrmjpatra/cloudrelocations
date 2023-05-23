import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import Step1 from '../assets/process_step_1.png'
import Step2 from '../assets/process_step_2.png'
import Step3 from '../assets/process_step_3.png'
import Step4 from '../assets/process_step_4.png';
import Step5 from '../assets/process_step_5.png';
import Arrow1 from '../assets/arrow_1.webp'
import Arrow2 from '../assets/arrow_2.webp'
import Arrow3 from '../assets/arrow_3.webp'
import Arrow4 from '../assets/arrow_4.webp'

const OurProcess = () => {
    return (
        <OurProcessContainer>
            <Typography textAlign={'center'} variant='h3' color={'#F05A29'} >Our Process</Typography>
            <Typography textAlign={'center'} variant='h6'>Processes of our packing and moving services are as under:</Typography>
            <hr />
            <ProcessContainer>
                <Process1>
                    <LeftOfProcess>
                        <img src={Step2} alt="Step1" />
                    </LeftOfProcess>
                    <RightOfProcess>
                        <ContentContainer>
                            <UnitLeft>
                                <div>
                                    <span>1</span>
                                </div>
                            </UnitLeft>
                            <UnitBody>
                                <h4>Meeting With The Customer</h4>
                                <p>In the first meeting, we get all your requirements and discuss all your relocation needs.</p>
                            </UnitBody>
                        </ContentContainer>
                        <ArrowContainer>
                            <img src={Arrow1} alt="" />
                        </ArrowContainer>
                    </RightOfProcess>
                </Process1>
                <Process2>
                    <RightOfProcess>
                        <ContentContainer>
                            <UnitLeft>
                                <div>
                                    <span>2</span>
                                </div>
                            </UnitLeft>
                            <UnitBody>
                                <h4>We Consider And Analyze The Relocation Needs</h4>
                                <p>After getting your requirement we analyze and proceed to discuss the relocation plan and consult the best.</p>
                            </UnitBody>
                        </ContentContainer>
                        <ArrowContainer>
                            <img src={Arrow2} alt="" />
                        </ArrowContainer>
                    </RightOfProcess>
                    <LeftOfProcess>
                        <img src={Step1} alt="Step1" />
                    </LeftOfProcess>
                </Process2>
                <Process1>
                    <LeftOfProcess>
                        <img src={Step3} alt="Step1" />
                    </LeftOfProcess>
                    <RightOfProcess>
                        <ContentContainer>
                            <UnitLeft>
                                <div>
                                    <span>3</span>
                                </div>
                            </UnitLeft>
                            <UnitBody>
                                <h4>Get Free Online Or Offline Quotation</h4>
                                <p>After all, discuss and we submit the best prices quotation analyze online or hard quotation as per your flexibility</p>
                            </UnitBody>
                        </ContentContainer>
                        <ArrowContainer>
                            <img src={Arrow3} alt="" />
                        </ArrowContainer>
                    </RightOfProcess>
                </Process1>
                <Process2>
                    <RightOfProcess>
                        <ContentContainer>
                            <UnitLeft>
                                <div>
                                    <span>4</span>
                                </div>
                            </UnitLeft>
                            <UnitBody>
                                <h4>Book And Finalize The Moving Date</h4>
                                <p>Afters Solving to all your query you can finalize the date and we will line up men power and acquired vehicle for that date.</p>
                            </UnitBody>
                        </ContentContainer>
                        <ArrowContainer>
                            <img src={Arrow4} alt="" />
                        </ArrowContainer>
                    </RightOfProcess>
                    <LeftOfProcess>
                        <img src={Step4} alt="Step4" />
                    </LeftOfProcess>
                </Process2>
                <Process1>
                    <LeftOfProcess>
                        <img src={Step5} alt="Step5" />
                    </LeftOfProcess>
                    <RightOfProcess>
                        <ContentContainer>
                            <UnitLeft>
                                <div>
                                    <span>5</span>
                                </div>
                            </UnitLeft>
                            <UnitBody>
                                <h4>Pack & Deliver It To Your Address</h4>
                                <p>On the date of moving our packing professional with a dedicated manager will finish your shifting under the supervision of Cloud Packer's circumstance.</p>
                            </UnitBody>
                        </ContentContainer>
                        {/* <ArrowContainer>
                            <img src={Arrow3} alt="" />
                        </ArrowContainer> */}
                    </RightOfProcess>
                </Process1>
            </ProcessContainer>
        </OurProcessContainer>
    )
}

export default OurProcess;

const OurProcessContainer = styled.div`
    background-color: whitesmoke;
    border-radius: .5rem;
    /* text-align: center; */
    padding: 1rem;
`;
const ProcessContainer = styled.div`
    margin-top: 2rem;
    padding: 2rem;
    display: grid;
    place-items: center;
`;
const Process1 = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
   
`;
const Process2 = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    
`;
const LeftOfProcess = styled.div`

`;
const RightOfProcess = styled.div`
    padding: 1rem;
    margin-left: 3rem;

`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    
`;
const UnitLeft = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #F05A29;
    color: #fff;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    line-height: 70px;
    box-shadow: 0 8px 32px #ff9674;
    /* margin: 0 auto; */
    
`;
const UnitBody = styled.div`
    margin-left: 2rem;
    margin-bottom: 0.4rem;
    h4{
        color:#F05A29 ;
    }
    p{
        width: 70%;
        text-align: justify;
        margin: .5rem 0;
    }
    
`;

const ArrowContainer = styled.div`
    
`;