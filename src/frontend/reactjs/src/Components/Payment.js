import React, {useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from './Container';
import Card from '@mui/material/Card';
import Footer from './Footer';
import Header from './Header';
import { auth, db } from '../firebase';
import { doc, query, setDoc, collection, getDocs, where } from 'firebase/firestore';
import { signInWithEmailAndPassword, updateEmail, updateProfile } from 'firebase/auth';
import * as api from '../api';
import { NavigationState } from '../NavigationContext';




const Payment = ({handleClose}) => {

  //reservation portion
  //using a dummy for now.

  //Payment portion
  const [email, setEmail] = useState("");
  const [cvc, setCvc] = useState("");
  const [country, setCountry] = useState("");
  const [name, setFullName] = useState("");
  const [expiration, setExp] = useState("");
  const [number, setNumber] = useState(""); //credit card number
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [cardname, setCardName] = useState("");
  const {setAlert} = NavigationState();
  
  //const [name, setName] = useState("");
  

  const handleSubmit = async () => {
    

    try {
      const q = query(collection(db,"Reservations"), where("accountId", "==", auth.currentUser.email));
      const querySnapshot= await getDocs(q);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const date = doc.data().checkIn
        console.log(doc.data().checkIn)
        console.log(localStorage.getItem("checkin"))
        
        if(date == (localStorage.getItem("checkin"))){
          console.log(doc.data().checkIn)
          setAlert({
            open: true,
            message: 'Cannot Reserve a Hotel on the same day',
            type:'error',
          });
          return;
        }
      });

      const reservationResp = await api.reservation.create({
        
        accountId: email,
        // hotelId: "624429",
        price: localStorage.getItem("price"),
        checkIn: localStorage.getItem("checkin"),
        checkOut: localStorage.getItem("checkout"),
        guests: localStorage.getItem("guests")
      }) 


      const paymentResp = await api.payment.pay({

        //Dummy for now
        accountId: email,
        reservationId: reservationResp.id,
        paymentDetails: {
            cvc: cvc,
            exp: expiration,
            number: number,
            country: country,
            fullname: name,
            city: city,
            address: address,
            zip: zip,

           },
        saveDetails: true
        
      })
      console.log(paymentResp);

    } catch (error) {
      console.log(error);
    }
  };





  return (
      <>
      <Header/>
    <Box bgcolor={'alternate.main'}>
    <Container maxWidth={800}>
    <Card sx={{ p: { xs: 4, md: 6 } }}>
        <Box>
          <Typography variant="h6" gutterBottom fontWeight={700}>
            Payment
          </Typography>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <Box>
            <form>
              <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Enter your first name
                </Typography>



                <TextField
                  label="Full name *"
                  variant="outlined"
                  name={'fullName'}
                  value = {name}
                  onChange={(e) => setFullName(e.target.value)}
                  fullWidth
                />
              </Grid>



              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Enter your email
                </Typography>
                <TextField
                  label="Email *"
                  variant="outlined"
                  name={'email'}
                  value = {email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
              </Grid>



              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Country
                </Typography>
                <TextField
                  label="Country *"
                  variant="outlined"
                  name={'country'}
                  value ={country}
                  onChange ={(e) => setCountry(e.target.value)}
                  fullWidth
                />
              </Grid>



              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  City
                </Typography>
                <TextField
                  label="City *"
                  variant="outlined"
                  name={'city'}
                  value ={city}
                  onChange ={(e) => setCity(e.target.value)}
                  fullWidth
                />
              </Grid>



              <Grid item xs={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Enter your address
                </Typography>
                <TextField
                  label="Address *"
                  variant="outlined"
                  name={'address'}
                  value ={address}
                  onChange ={(e) => setAddress(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item container xs={12}>
              </Grid>
            </Grid>


              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Enter your card number
                  </Typography>
                  <TextField
                    label="Card number *"
                    variant="outlined"
                    name={'cardNumber'}
                    value = {number}
                    onChange={(e) => setNumber(e.target.value)}
                    fullWidth
                  />
                </Grid>



                <Grid item xs={12}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Name on the card
                  </Typography>
                  <TextField
                    label="Name *"
                    variant="outlined"
                    name={'name'}
                    value ={cardname}
                    onChange ={(e) => setCardName(e.target.value)}
                    fullWidth
                  />
                </Grid>




                <Grid item xs={12} sm={4}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Expiration date
                  </Typography>
                  <TextField
                    label="Expiration date *"
                    variant="outlined"
                    name={'date'}
                    value = {expiration}
                    onChange={(e) => setExp(e.target.value)}
                    fullWidth
                  />
                </Grid>



                <Grid item xs={12} sm={4}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Billing zip code
                  </Typography>
                  <TextField
                    label="Zip code *"
                    variant="outlined"
                    name={'zip'}
                    value ={zip}
                    onChange ={(e) => setZip(e.target.value)}
                    fullWidth
                  />
                </Grid>


                <Grid item xs={12} sm={4}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    CVC
                  </Typography>
                  <TextField
                    label="Card CVC *"
                    variant="outlined"
                    name={'cvc'}
                    value = {cvc}
                  onChange={(e) => setCvc(e.target.value)}
                    fullWidth
                  />
                </Grid>


                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item container xs={12}>
                  <Box
                    display="flex"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    alignItems={{ xs: 'stretched', sm: 'center' }}
                    justifyContent={'space-between'}
                    width={1}
                    margin={'0 auto'}
                  >
                    <Button
                      size={'large'}
                      variant="contained"
                      //type={'submit'}
                      onClick = {handleSubmit}
                    >
                      Submit
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
        </Card>
    </Container>
    </Box>
    <Footer/>
    </>
  );
};

export default Payment;