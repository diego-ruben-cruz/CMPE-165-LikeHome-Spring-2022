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

const Home = () => {
  const theme = useTheme();

  return (
    <>
        <Header/>
        <Banner/>
        <RecTable/>
        <h1 className='home'>A Home Far Away From Home</h1>
        <div 
        className="h1"
        style={{
          height: 500,
        }}
        >
          <SearchBar location="City, State" numberOfPeople="Number of Guests"/>
        </div>
        


        <Footer/>
    </>
  );
};

export default Home;