import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import styled from 'styled-components';

const TermsCondition = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <TermsConditionContainer>
            <Typography textAlign={'center'} variant='h3' color='#F05A29'>TERMS AND CONDITIONS</Typography>
            <hr color='#F05A29' />
            <Typography variant='body1'>Welcome to Cloud Relocations, one of the leading shifting experts in India with branches spread across every nook and corner of the country with a website
                <a href='www.cloudrelocations.com' target='_blank'> www.cloudrelocations.com</a> by using this website, you agree to abide by the following terms and conditions in this notice.</Typography>
            <Typography textAlign={'center'} variant='h3' color='#F05A29'>GENERAL</Typography>
            <hr color='#F05A29' />
            <Typography variant='body1'>This Web Site and the information, names, images, pictures, logos, symbols, tag line and icons is concerning or relating to Cloud Relocations and its associates and the services are provided on an "as is" and "as available" basis, without any representation or endorsement being made, and without warranty of any kind, whether implied or expressed, including but not limited to, an implied warranty of merchantability, fitness for a particular purpose, or non-infringement of other' intellectual property rights. Under no circumstances, Cloud Relocations or any of its affiliates, contractors, employees, directors or officers shall be liable for any damages, including but not limited to direct, indirect, special or consequential damages (INCLUDING BUT NOT LIMITED TO ANY DAMAGES FOR LOSS OF PROFITS, BUSINESS DISTURBANCE OR INFORMATION) resulting from access to or use of, or inability to access to or use of, this Web Site or arising out of any resources, materials, information, qualifications, opinions or recommendations on this Web Site. We reserve a right to alter the contents of the website at any point of time without any pre- intimation or permission.</Typography>
            <Typography variant='body1'>Cloud Relocations has the right to make alterations and modifications to any information incorporated within this site without giving any prior notice. Also, Cloud Relocations reserves the right to alter any of the Terms of Use without prior notice. Access to particular Services on this website may be subject to additional or different terms and conditions, as stipulated by Cloud Relocations from time to time.</Typography>
            <Typography textAlign={'center'} variant='h3' color='#F05A29'>Law & Jurisdiction</Typography>
            <hr color='#F05A29' />
            <Typography variant='body1'>You accept that any claims arising against Cloud Relocations, shall be subject to the exclusive jurisdiction of the Bhubaneswar Court at Odisha and the laws of India shall apply therein. However, we reserve the right to take legal proceedings in country other than India, to protect our interests or to enforce our rights whenever we face any circumstance which deems it appropriate to do so.</Typography>
            <Typography textAlign={'center'} variant='h3' color='#F05A29'>Online Payment Terms & Conditions</Typography>
            <hr color='#F05A29' />
            <Typography variant='body1'>All on-line payments made towards packing and transportation shall be taken into consideration only when the relevant amount is received and credited in the company's bank account. In case of cancellation of the booking, after making on-line payment, refund of the amount shall be paid within 30 working days after the said amount is received and credited in company's bank account. For any refund amount of cancellation please contact us in our customer care no +91-9005009937.</Typography>
        </TermsConditionContainer>
    )
}

export default TermsCondition;
const TermsConditionContainer=styled.div`
    padding: 2rem 3rem;
    text-align: justify;
    background-color: whitesmoke;
    p{
        line-height: 2.5rem;
        font-size: 1.5rem;
        margin: 1rem 0;
    }
    hr{
        width: 50%;
        margin: 1rem auto;
    }
  @media screen and (max-width: 540px) {
    padding: 1rem;
    padding-bottom: 6rem;
    h3{
        font-size: 2rem;
        font-weight: 500;
    }
    hr{
        margin:.5rem auto;
    }
    p{
        line-height: 2rem;
        font-size: 1.4rem;
        margin: 0.4rem 0px;
    }
  }
  @media screen and (max-width: 393px) {
    padding-bottom: 3rem;
    h3{
        font-size: 1.5rem;
    }
    p{
        font-size: 1rem;
    }
  }
`;