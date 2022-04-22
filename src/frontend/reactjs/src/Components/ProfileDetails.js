import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { NavigationState } from '../NavigationContext';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, updateEmail, updateProfile } from 'firebase/auth';
import Header from './Header';
import Footer from './Footer';
import { doc, setDoc } from 'firebase/firestore';

const Profile = ({handleClose}) => {

  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName ]= useState("");
  const [lastName, setLastName ]= useState("");
  const [email, setEmail ]= useState("");
  const {setAlert} = NavigationState();

  const handleSubmit = async () => {
    try{
      const result = await updateProfile(auth.currentUser, {
        displayName: displayName
      })

          setAlert({
            open:true,
            message: `Welcome Back ${auth.currentUser.displayName}`,
            type: 'success',
          });

          
    }catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: 'error',
      });
    }
    try{
      const result1 = await setDoc(doc(db, "Users", auth.currentUser.uid), {
        firstName:firstName ,
        lastName: lastName,
        email: email,
      });
      
          
    }catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: 'error',
      });
    }
  };
  
  return (
    <>
    <Header/>
    <Typography
      style={{
        fontSize:50,
        alignItems: 'center',
        marginInlineStart: 900,
        fontFamily: [
          'Monserrat',
          'sans-serif',
        ].join(','),
      }}
    >
        Profile
    </Typography>
    <Box 
        p={3}
        style= {{ display: "flex", flexDirection: "column", gap: "20px", width:500, marginLeft: 700, marginTop: 60}}
        >
          
          <TextField
            variant="outlined"
            type="displayName"
            label="Set Username"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            fullWidth
          />
          
          
          
            
          <TextField
            variant="outlined"
            label="First Name"
            type="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            style={{marginTop: 0,}}
          />
         
          
          <TextField
           variant="outlined"
            label="Last Name"
            type="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            style={{marginTop: 0,}}
          >
          </TextField>
          
          <TextField
           variant="outlined"
            label="User email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            style={{marginTop: 0,}}
          >
          </TextField>

     

          <Button
            variant="contained"
            size="large"
            style={{ backgroundColor: "#0055A2", marginTop: 126, color:'white',}}
            onClick={handleSubmit}
          >
            Confirm
          </Button>
        </Box>
        <Footer/>
        </>
  )
}

export default Profile
