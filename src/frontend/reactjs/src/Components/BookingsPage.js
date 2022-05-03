import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import HotelData from "./data.json";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import SearchBar from "./SearchBar";
import * as api from "../api";
import {
  signInWithEmailAndPassword,
  updateEmail,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../firebase";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { async } from "@firebase/util";
import { doc, setDoc } from "firebase/firestore";
import ChangeDateModal from "./ChangeDateModal";
import Footer from "./Footer";
import Header from "./Header";
import NavigationState from "../NavigationContext";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "250px",
    width: "1250px",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "25%",
    float: "left",
    width: "25%",
    height: "125px",
  },
  cardContent: {
    flexGrow: 1,
    position: "relative",
    left: "10px",
    top: "5px",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const getData = ()  => {
//   Axios.get('http://localhost:8080/api/hotel/search?location=Los Angeles').then((response)=> {
//     console.log(response);
//   })
// }

// async componentDidMount() {
//         const { data } = await axios.get('/api/all')
//         this.setState({posts: data, isLoading: false})
//         console.log(this.state.posts)
//     }

//   useEffect(() => {
//     fetch("http://localhost:8080/api/hotel/search?location=Las Vegas")
//     .then(response => response.json())
//     .then(res => setState(res))
//  }, [])

//  const getContacts = async () => {
//    try {
//      const res = axios.get("http://localhost:8080/api/hotel/search?location=Los Angeles")
//      setContacts(res)
//      setLoading(true);
//    } catch (err) {
//      alert(err.message)
//    }
//  }

export default function BookingsPage(props) {
  const classes = useStyles();

  const [checkout, setCheckOut] = useState("");
  const [checkin, setCheckin] = useState("");
  const [state, setState] = useState([]);
  // const { setAlert } = NavigationState();

  const getReservation = async () => {
    try {
      // console.log(auth.currentUser.email)
      // const reservationGet = await api.reservation.getAll(auth.updateCurrentUser.email)
      // console.log(auth.currentUser.email)
      // setState(reservationGet)
      let reservationGet = [];
      onAuthStateChanged(auth, async (user) => {
        reservationGet = await api.reservation.getAll(user.email);
        console.log(reservationGet);
        setState(reservationGet.reservations);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReservation();
  }, []);

  // (!state.name)? 'Nope':state.name;
  // (!state.url)? 'Nope':state.url;
  // (!state.checkin)? 'Nope':state.checkin;
  // (!state.checkout)? 'Nope':state.checkout;
  // (!state.price)? 'Nope':state.price;

  return (
    <>
      <Header />
      <Typography
        style={{
          fontSize: 50,
          alignItems: "center",
          marginTop: 50,
          marginInlineStart: 750,
          fontFamily: ["Monserrat", "sans-serif"].join(","),
        }}
      >
        My Reservations
      </Typography>
      <Grid container spacing={4}>
        {state.map((card, index) => (
          <Grid item key={card} xs={12} sm={6} md={7}>
            <Card className={classes.card} key={index}>
              <Box>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.url}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h1">
                    Name : {card.hotename}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h1">
                    Check in: {card.checkIn}, Check out: {card.checkOut}
                  </Typography>

                  <Typography>Price: {card.price}</Typography>
                </CardContent>

                <CardActions>
                  <ChangeDateModal id={card.id} />

                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={async () => {
                      await api.reservation.delete(card.id);
                      window.location.reload();

                      // setAlert({
                      //   open: true,
                      //   message: `Reservation successfully cancelled. You have incurred a cancellation fee of USD 25 and will be subject to further fees/penalties from the hotel.`,
                      //   type: "success",
                      // });
                      // setTimeout(function () {
                      //   window.location.reload();
                      // }, 4000);
                    }}
                  >
                    Cancel Reservation
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </>
  );
}
