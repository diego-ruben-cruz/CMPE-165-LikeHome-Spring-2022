import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { NavigationState } from '../NavigationContext';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, updateEmail, updateProfile } from 'firebase/auth';
import Header from './Header';
import Footer from './Footer';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Rewards from './Rewards';
import { useHistory } from 'react-router-dom';


const Profile = ({handleClose}) => {

  const [displayName, setDisplayName] = useState("");
  const [fullName, setFullName ]= useState("");
  const [phoneNumber, setPhoneNumber ]= useState("");
  const [email, setEmail ]= useState("");
  const {setAlert} = NavigationState();
  const history = useHistory()

  const handleSubmit = async () => {
    try{
      const result = await updateProfile(auth.currentUser, {
        displayName: displayName
      })

          setAlert({
            open:true,
            message: `Profile Details Set ${auth.currentUser.displayName}`,
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
      const result1 = await setDoc(doc(db, "Users", auth.currentUser.email), {
        Name:fullName ,
        Phone: phoneNumber,
        email: email,

      },
     {merge: true}
      );
      
     history.push("/")     
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
        marginTop: 50,
        marginInlineStart: 900,
        fontFamily: [
          'Monserrat',
          'sans-serif',
        ].join(','),
      }}
    >
        Profile
    </Typography>
    <div>
    <Box
      style= {{ display: "flex", flexDirection: "row"}}
    >
    <Box 
        p={3}
        style= {{ display: "flex", flexDirection: "column", gap: "20px", width:500, marginLeft: 250, marginTop: 60}}
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
            label="Full Name"
            type="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            fullWidth
            style={{marginTop: 0,}}
          />
         
          
          <TextField
           variant="outlined"
            label="Phone Number"
            type="lastName"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
            style={{ backgroundColor: "#2B6FD4", marginTop: 126, color:'white',}}
            onClick={handleSubmit}
          >
            Confirm
          </Button>
        </Box>
        <Rewards/>
        </Box>
        </div>
        <Footer/>
        </>
  )
}

export default Profile
