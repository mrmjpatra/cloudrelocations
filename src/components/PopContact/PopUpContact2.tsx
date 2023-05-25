import { Box, IconButton, Tab, Tabs, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import styledComp from 'styled-components';
import WithInCity from './WithInCity';
import BetweenCities from './BetweenCities';
import CityTempo from './CityTempo';
import { Close } from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const Responsive = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    '.css-1h9z7r5-MuiButtonBase-root-MuiTab-root': {
      padding: '0px 7px !important',
      fontSize: '0.675rem !important',
    }
  },
  [theme.breakpoints.up('xs')]: {
    '.css-1h9z7r5-MuiButtonBase-root-MuiTab-root': {
      padding: '0px 7px !important',
      fontSize: '0.6rem !important',
    }
  },

}))
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };

}

interface ChildProps {
  setIsOpen: (isOpen: boolean) => void;
}
const PopUpContact2 = React.forwardRef(({ setIsOpen }: ChildProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <PopUpContactContainer>
      <IconButton color='error' size='large' style={{ float: 'right' }} onClick={() => setIsOpen(false)}>
        <Close />
      </IconButton>
      <Typography variant='h5' color='#F15A29' margin='1rem 0'>Where are you going to relocate?</Typography>
      <Responsive>
        <TabContainer>
          <Tabss textColor="primary" indicatorColor="secondary" value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Within the City" {...a11yProps(0)} />
            <Tab label="Between Cities" {...a11yProps(1)} />
            <Tab label="City Tempo" {...a11yProps(2)} />
          </Tabss>
        </TabContainer>
      </Responsive>
      <TabPanel value={value} index={0}>
        <WithInCity />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BetweenCities />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CityTempo />
      </TabPanel>

    </PopUpContactContainer>
  )
});

export default PopUpContact2;
const PopUpContactContainer = styledComp.div`
  /* background: linear-gradient(180deg,#F15A29,#ED1E24); */
  background-color: white;
  box-shadow: 0 8px 32px #00aff04d;
  border: 0 solid #e5e7eb;
  color: #464646;
  font-size: 14px;
  border-radius: 1rem;
  margin:.2rem auto;
  padding: 1rem;
  width: 35%;
  h5{
    margin: 1rem 0;
  }
  @media screen and (max-width: 912px) {
    width: 100%;
    font-size: 10px;
    margin: 0;
    h5{
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 540px) {
    width: 100%;
    font-size: 10px;
    margin: 0;
    h5{
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 540px) {
    width: 100%;
    font-size: 10px;
    margin: 0;
    h5{
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 393px) {
   h5{
    font-size: 1rem;
    font-weight: 500;
   }
  }
    
`;
const TabContainer = styledComp.div`
    border-bottom: 1;
    border-color: 'divider'
`;
const Tabss = styledComp(Tabs)`
    background-color:#F2F2F2;
    /* padding: 0.8rem; */
    border-radius: 1rem;
    color: ${(props) => props.textColor === "secondary" ? "red" : "inherit"};
    & .MuiTabs-indicator {
    background-color: ${(props) => props.indicatorColor === "secondary" ? "#FD5D1C" : "inherit"};
  }
`