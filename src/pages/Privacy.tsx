import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const Privacy = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <PrivacyContainer>
            <Typography textAlign={'center'} variant='h3' color='#F05A29'>PRIVACY POLICY</Typography>
            <hr  color= '#F05A29' />
            <Typography variant='body1'>Your privacy is very important to us. Accordingly, we have developed this policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information.</Typography>
            <Typography variant='body1'>The following outlines are our privacy policy.</Typography>
            <ol>
                <li>Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</li>
                <li>We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.</li>
                <li>We will only retain personal information as long as necessary for the fulfilment of those purposes.</li>
                <li>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li>
                <li>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</li>
                <li>We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</li>
                <li>We will make readily available to customers information about our policies and practices relating to the management of personal information.</li>
                <li>We are committed to conduct our business in accordance with sound principles in order to ensure that the confidentiality of personal information is protected and maintained.</li>
            </ol>
            <Typography variant='body1'>Cloud Relocations has created this privacy policy in order to demonstrate its firm commitment to privacy. No one have access to information gathered through this website except Cloud Relocations and its agents. Cloud Relocations safeguards the privacy of information provided by you and same may be used for the purpose of mailing. You can visit our website without providing information and Cloud Relocations will never ask for your personal information.</Typography>
            <Typography variant='body1'>Cloud relocations is the possessor of the information published on this website and will not sell, share, or rent any information obtained by us via this website to others. Cloud Relocations do not share the data you provide to us with third- parties. Information collected via this website is used to provide the services offered on that area of the site.</Typography>
            <Typography textAlign={'center'} variant='h3' color='#F05A29'>Security</Typography>
            <hr color= '#F05A29' />
            <Typography variant='body1'>When people provide personal information, we will use it only for the intended purpose. Cloud Relocations is committed to your privacy seriously. All information provided by you is confidential and the same shall not be provided to others.</Typography>

            <Typography textAlign={'center'} variant='h3' color='#F05A29'>Use of Cookies</Typography>
            <hr color= '#F05A29' />
            <Typography variant='body1'>A cookie is a piece of data stored on the user's hard drive containing information about the user. Cloud Relocations uses cookies for maintaining privacy policies, security, session continuity, and customization purposes. If a user rejects a cookie, he/she may still use some information put on the website of Cloud Relocations, but may not be able to gain access to some of the Services or use some features of the site.</Typography>
            <Typography variant='body1'>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Som e of our
                affiliate/advertising partners may also use cookies.</Typography>

            <Typography textAlign={'center'} variant='h3' color='#F05A29'>Log Files</Typography>
            <hr color= '#F05A29' />
            <Typography variant='body1'>Cloud Relocations uses client IP addresses to analyze the usage of site, administer the site, track users' movements within the Cloud Relocations, and gather broad demographic information for aggregate use.</Typography>
            <Typography variant='body1'>This site contains links to other sites. Cloud Relocations is not responsible for the privacy practices or the content of such web sites.</Typography>
            <Typography variant='h6'>Mail your request to Cloud Relocations</Typography>
            <Typography variant='h6'>If you have any queries about this privacy statement, the policies and practices of this site, or your dealings with this web site, please contact:</Typography>
            <ContactDetails>
                <Typography variant='h4' color='#F05A29'>Corporate Office</Typography>
                <Typography variant='h4' color='#F05A29'>Cloud Relocations Pvt. Ltd.</Typography>
                <Typography variant='h4' color='#F05A29'>Address:<span>OLDTOWN, BHUBANESWAR-751002</span> </Typography>
                <Typography variant='h4' color='#F05A29'>Phone:<span>+91-9005003387</span> </Typography>
                <Typography variant='h4' color='#F05A29'>E-Mail:<span>info@cloudrelocations.com</span></Typography>
            </ContactDetails>
        </PrivacyContainer>
    )
}

export default Privacy

const PrivacyContainer = styled.div`
    padding: 2rem 3rem;
    background-color: whitesmoke;
    text-align: justify;
    font-size: 1.4rem;
    hr{
        width: 50%;
        margin: 1rem auto;
    }
    ol{
        padding-left: 2rem;
        line-height: 2.3rem;
        margin: 1rem 0;
    }
    p{
        line-height: 2.5rem;
        font-size: 1.4rem;
    }
  @media screen and (max-width: 540px) {
    padding: 1rem 0.4rem;
    padding-bottom: 5rem;
    h3{
        font-size: 2rem;
        font-weight: 500;
    }
    p,li{
        font-size: 1.3rem;
        line-height: 1.7rem;
    }
  }
    
`;
const ContactDetails = styled.div`
    margin-top: 2rem;
    span{
        font-size: 1.5rem;
        font-weight: 500;
        margin-left: .5rem;
        color: black;
    }
  @media screen and (max-width: 540px) {
    h4{
        font-size: 1.6rem;
    }
    span{
        font-size: 1.2rem;
    }
  }
`;