import { SignalCellularNull } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { auth, db } from '../firebase';
import { NavigationState } from '../NavigationContext';

const Rewards = () => {

    
    const [sealNumber, setSealNumber] = useState(0);

    const {setAlert} = NavigationState();
  
    const docRef = doc(db, "Users", auth.currentUser.email)
      onSnapshot(
        docRef,  
        (doc) => {
          if(doc.data().seals){
            setSealNumber(doc.data().seals)
          }  
          
          console.log(sealNumber)
          
        }
        );
      

  return (
    <Box 
    p={3}
    style= {{  display: "flex" , flexDirection: "column", gap: "20px", width:500, marginLeft: 450, marginTop: 60, fontSize: 20}}
    >
      
      <Typography
      style={{
        fontFamily: [
            'Monserrat',
            'sans-serif',
          ].join(','),
          fontSize: 32,
          fontWeight: 'bold',
      }}
      >
        Rewards:
      </Typography>

      <Typography
      style={{
        fontFamily: [
            'Monserrat',
            'sans-serif',
          ].join(','),
          fontSize: 26,
          
      }}>
          Current Seals: {sealNumber}
      </Typography>
      
      
      <Typography
      style={{
        fontFamily: [
            'Monserrat',
            'sans-serif',
          ].join(','),
          fontSize: 18,
          
      }}
      >
          Each Seal is earned after spending a certain amount of money on a reservation.
          <br/>
          USD &le;75  - 1 Seal
          <br/>
          USD 75 - USD 150 - 2 Seals
          <br/>
          USD 150 - USD 225 - 3 Seals
          <br/>
          USD 225+ - 5 Seals
          <br/>
          You earn a free night in a One Bedroom Suite from any hotel after obtaining 7 Seals, thereafter every additional night is 4 Seals each.
      </Typography>
      
      {sealNumber<7 ? 
    
      <Typography
      style={{
        fontFamily: [
            'Monserrat',
            'sans-serif',
          ].join(','),
          fontSize: 18,
          
      }} >Remaining Seals until redeemable: {7-sealNumber}
      </Typography>
      :
      <Typography
      style={{
        fontFamily: [
            'Monserrat',
            'sans-serif',
          ].join(','),
          fontSize: 18,
          
      }}
      >Congratulations! 
      <br/>
      You have earned enough Seals for a free stay!</Typography>
      }

      
    </Box>
   
     
  )
}

export default Rewards
