import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Header from './Header';
import Container from './Container';
import TravelingText from './TravelingText';
import ContainerCards from './ContainerCards';
import Footer from './Footer';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import apartment from './street.svg';
import SearchBar from './SearchBar';

const Home = () => {
  const theme = useTheme();

  return (
    <>
    <Header/>
    <br/>
    <br/>
    <Box
      minHeight={300}
      height={'auto'}
      position={'relative'}
    >
      <Box
        component="img"
        sx={{
          float: 'left',

        }}
        alt="The house from the offer."
        src={apartment}
      />
      <Container position={'relative'} zIndex={2} >
        <Box>
          
          <Box marginBottom={4}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                zIndex: 100,
                position: 'absolute',
                top: '300px',
                left: '260px',
                fontWeight: 900,
                color: 'Black',
                textAlign: 'center',


              }}
            >
              A Home Far Away From Home
            </Typography>
          </Box>
          <SearchBar/>
        </Box>
        <ContainerCards/>
    <TravelingText/>
    <Template1/>
    <Template2/>
    <Template3/>
      </Container>
    </Box>
    <Footer/>
    </>
  );
};

export default Home;