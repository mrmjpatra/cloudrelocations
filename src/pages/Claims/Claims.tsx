import { Button, MenuItem, TextField, Typography } from '@mui/material';
import { FormEvent, useState } from 'react';
import styledComponent from 'styled-components';
import { stateList } from './stateList';
import { ThemeProvider, styled } from '@mui/material/styles'
import { theme } from '../../styles/styles';

const Responsive = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
            height: '3.6rem',
            color:'rgb(42, 30, 166)'
        }
    },
    [theme.breakpoints.up('xs')]: {
        '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            fontSize: '14px',
            padding: '.6rem 1rem',
          },
          '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root':{
            top:'-.4rem',
            fontSize:'.9rem'
          },
          '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
            // height: '2.4rem',
            color:'rgb(42, 30, 166)'
        }

    },
   
}))

const Claims = () => {
    const [custName, setCustName] = useState<string>('');
    const [custAddrs, setCustAddrs] = useState('');
    const [city, setCity] = useState('')
    const [state, setState] = useState('Odisha')
    const [zipCode, setZipCode] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('');
    const [originAddrs, setOriginAddrs] = useState('')
    const [destAddrs, setDestAddrs] = useState('');
    const d: any = new Date(Date.now());
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');  // Zero-padding the month
    const day = d.getDate().toString().padStart(2, '0');  // Zero-padding the day
    const dateString = `${year}-${month}-${day}`;

    const [date, setDate] = useState(dateString);
    const [description, setDescription] = useState('')


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // console.log(custName)
        // console.log(custAddrs)
        // console.log(city)
        // console.log(state)
        // console.log(zipCode)
        // console.log(email)
        // console.log(phone)
        // console.log(originAddrs)
        // console.log(destAddrs)
        // console.log(date)
        // console.log(description)
        const emailContent = `
        ${custName.toUpperCase()}
        ${custAddrs}
        ${city}, ${state}, ${zipCode}
        ${email}
        ${phone}
        ${date.split('-').reverse().join('-')}

        (Cloud Reloca􏰁ons)
        (Bhubaneswar)
        (Odisha,751002)

        Subject: Claim for Damaged Goods during Relocation 

        Dear Cloud Relocations,
        
        I ${custName} writing this letter to bring your attention to the damages incurred to my belongings during the recent relocation conducted by Cloud relocations. I engaged your services for my move from ${originAddrs} to ${destAddrs} on ${date}.

        I regret to inform you that several items have been significantly damaged as a result of inadequate handling and insufficient packing. The following is a detailed list of the damaged goods:
        
        Description:-
        ${description}

        I had entrusted your company with the responsibility of ensuring the safe transportation of my belongings, and I am extremely disappointed with the level of care provided during the process. I have attached photographs of the damaged items as evidence to support my claim.

        I would appreciate it if you could initiate an investigation into the matter promptly and provide a resolution within [reasonable timeframe, e.g., 15 business days]. Please provide clear details regarding the compensation or replacement procedure, as well as any supporting documentation required to process my claim.

        I would prefer an amicable resolution to this matter without the need for legal action. However, if we are unable to reach a satisfactory agreement, I may be compelled to seek legal recourse to protect my rights as a customer.

        I look forward to your prompt attention to this matter and a resolution that upholds your commitment to customer satisfaction. Please acknowledge the receipt of this claim letter at your earliest convenience.
                
        Thank you for your immediate attention to this matter.
        
        Yours sincerely,
        ${custName.toUpperCase()}
        ${phone}`;
        console.log(emailContent)

        // Reset the form fields
        setCustName('');
        setCustAddrs('');
        setCity('');
        setState('Odisha');
        setZipCode('');
        setEmail('');
        setPhone('');
        setOriginAddrs('');
        setDestAddrs('');
        setDescription('');
    }
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Typography variant='h3' color='#f05a29'>File A Claims</Typography>
                <hr color='#ff3b00' />
                <Typography variant='body1'>Please fill the below complaints form or please send us details about the issue you would like to claim about. Our claim department will analyze your claim and will try to resolve as soon as possible.</Typography>
                <Typography variant='body1' color='red'> IMPORTANT:  - Mandatory to attach evidence in your complaint.</Typography>
                <Responsive>
                    <ComplaintFormContainer>
                        <form name='claimform' id='claim' onSubmit={handleSubmit}>
                            <dl>
                                <Name> <TextField variant='outlined' label='Name' type="text" name={custName} value={custName} onChange={(e) => setCustName(e.target.value)} /> </Name>
                                <Address><TextField variant='outlined' label='Address' type="text" name={custAddrs} value={custAddrs} onChange={(e) => setCustAddrs(e.target.value)} /> </Address>
                                <State>
                                    <TextField  select onChange={(e) => setState(e.target.value)} defaultValue="Odisha" >
                                        {stateList.map((option) => (
                                            <MenuItem key={option.name} value={option.name}>
                                                {option.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </State>

                                <City><TextField variant='outlined' label='City' type="text" name={city} value={city} onChange={(e) => setCity(e.target.value)} /></City>

                                <ZipCode><TextField variant='outlined' label='Zip Code' type="text" name={zipCode} value={zipCode} onChange={(e) => setZipCode(e.target.value)} /> </ZipCode>
                                <DateDD><TextField variant='outlined' type="date" name={date} value={date} onChange={(e) => setDate(e.target.value)} /> </DateDD>
                                <Email><TextField variant='outlined' label='Email' type="email" name={email} value={email} onChange={(e) => setEmail(e.target.value)} /></Email>
                                <PhoneNumber><TextField variant='outlined' label='Phone Number' type="text" name={phone} value={phone} onChange={(e) => setPhone(e.target.value)} /></PhoneNumber>
                                <Origin><TextField variant='outlined' label='Origin Address' type="text" name={originAddrs} value={originAddrs} onChange={(e) => setOriginAddrs(e.target.value)} /></Origin>
                                <Destination><TextField variant='outlined' label='Destination Address' type="text" name={destAddrs} value={destAddrs} onChange={(e) => setDestAddrs(e.target.value)} /></Destination>

                                <Description><TextField multiline rows='10' name={description} value={description} onChange={(e) => setDescription(e.target.value)}></TextField> </Description>
                                <Button type='submit' variant='contained' size='large'>Submit</Button>
                            </dl>
                        </form>
                    </ComplaintFormContainer>
                </Responsive>
                <Typography variant='h5' color='InfoText'>For Faster response, you can directly mail us at &nbsp;
                    <a href="mailto:someone@example.com">info@cloudrelocations.com</a></Typography>
            </Container>
        </ThemeProvider>
    )
}

export default Claims;
const Container = styledComponent.div`
    background-color: whitesmoke;
    padding: 2rem 2.5rem;
    hr{
        width: 50%;
        height: .2rem;
    }
    p{
        font-size: 1.5rem;
        margin: 1rem 0;
    }
  @media screen and (max-width: 414px) {
    padding: 2rem 0;
    padding-left: 0.3rem;
    h3{
        font-size: 2rem;
        font-weight: 500;
    }
    p{
        font-size: 1rem;
        text-align:justify;
        padding-right:.2rem;
    }
    h5{
        font-size: 1.2rem;
        font-weight: 500;
        padding-bottom: 4rem;
    }
  }
`;

const ComplaintFormContainer = styledComponent.div`
    background-color: white;
    width: 50%;
    padding: 2rem 3rem;
    margin: 2rem auto;
    border-radius: 1rem;
    dl{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }
    @media screen and (max-width: 912px) {
        width: 80%;
    }
    @media screen and (max-width: 414px) {
        width: 90%;
        padding: 1.5rem 1rem;
        margin: 2rem auto;
        
    }
`;

const Name = styledComponent.dd`
    grid-column: 1 / span 2;
`
const Address = styledComponent.dd`
    grid-column: 1 / span 2;
`
const State = styledComponent.dd`
    /* grid-column: 1 / span 2; */
`
const City = styledComponent.dd`
    
`
const ZipCode = styledComponent.dd`
    
`
const Origin = styledComponent.dd`
    
`
const Destination = styledComponent.dd`
    
`
const Email = styledComponent.dd`
    grid-column: 1 / span 2;
    
`
const PhoneNumber = styledComponent.dd`
    grid-column: 1 / span 2;
`
const Description = styledComponent.dd`
    grid-column: 1 / span 2;
`
const DateDD = styledComponent.dd`
    
`