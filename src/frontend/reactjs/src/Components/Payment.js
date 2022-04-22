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
import { doc, setDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword, updateEmail, updateProfile } from 'firebase/auth';
import * as api from '../api';


const Payment = ({handleClose}) => {

  const [email, setEmail] = useState("");
  const [ccv, setCcv] = useState("");
  const [country, setCountry] = useState("");
  const [name, setFullName] = useState("");
  const [expiration, setExp] = useState("");
  const [number, setNumber] = useState(""); //credit card number
  
  
  //const [name, setName] = useState("");
  

  const handleSubmit = async () => {
    try {
      const paymentResp = await api.payment.pay({

        //Dummy for now
        accoundId: email,
        reservationId: '08592959-0906-4086-a50c-05dc3ac5c8ec',
        paymentDetails: {
            ccv: ccv,
            exp: expiration,
            number: number,
            country: country,
            fullname: name,
            

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
                  label="First name *"
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
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    CVV
                  </Typography>
                  <TextField
                    label="Card CVV *"
                    variant="outlined"
                    name={'cvv'}
                    value = {ccv}
                  onChange={(e) => setCcv(e.target.value)}
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
                      type={'submit'}
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
