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
var name = localStorage.getItem("name");
console.log(name);

{/*Holds the the sort and filter options*/}
var params = {};

{/*Changes based on what user wants to Sort*/}
var sortOrder = localStorage.getItem("setOrder");

{/*Changes based on event*/}
var filterHotelName = localStorage.getItem("filterHotelName");
var filterStars = localStorage.getItem("filterStars");
var filterPrice= localStorage.getItem("filterPrice");

 {/*Get Info about the Sort*/}
function checkSort(){
  if(sortOrder === ""){
    return;
  }

  if(sortOrder == 1 ){
     params = {...params, sortOrder: "PRICE_HIGHEST_FIRST" };
  }
  else if(sortOrder == 2){
    params = {...params, sortOrder: "PRICE_LOWEST_FIRST"};
  }
  else if(sortOrder == 3 ){
    params = {...params, sortOrder: "STAR_RATING_HIGHEST_FIRST"};
  }
  else if(sortOrder == 4){
     params = {...params, sortOrder: "STAR_RATING_LOWEST_FIRST"};
  }
  else if(sortOrder == 5){
    params = {...params, sortOrder: "BEST_SELLER"};
  }
  else if(sortOrder == 6){
     params = {...params, sortOrder: "PRICE"};
   }  
}
 function checkFilterStars(){
   if(filterStars === ""){
     return;
   }
   params = {...params, starsRatings: filterStars};
 }


 {/*Check if there is max/min price filter, then retrieve it*/}
 function checkFilterPrice(){
   if(filterPrice === ""){
      return;
   }

  var pointOne = 0;
  var pointTwo = 0;
  if(filterPrice === "50<"){
    pointOne = 50;
    params = {...params, maxPrice: pointOne};
  }
  else if(filterPrice === ">500"){
    pointOne = 500;
    params = {... params, minPrice: pointOne};
  }
  else{
    const arr = filterPrice.split("-");
    pointOne = arr[0];
    pointTwo = arr[1];
    params = {...params, minPrice: pointOne, maxPrice: pointTwo};
  }
 }

 

export default function SearchResults() {
  const classes = useStyles();

  const [price, setPrice] = useState(price);
  useEffect(() => {
    // storing input name
    localStorage.setItem("price", price);
  }, [price]);

  const [urlimage, setUrlimage] = useState(urlimage);
  useEffect(() => {
    // storing input name
    localStorage.setItem("urlimage", urlimage);
  }, [urlimage]);

  const [hotelname, setHotelName] = useState(hotelname);
  useEffect(() => {
    // storing input name
    localStorage.setItem("hotelname", hotelname);
  }, [hotelname]);


  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  checkSort();

  checkFilterPrice();

  checkFilterStars();
  
  const getData = async () => {
    try {
      setLoading(true);
      api.hotel.search({...params, location: name}).then((res) =>setState(res));
    } catch (err) {
      alert(err.message);
    }
  };

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

  return (
    <Grid container spacing={4}>
      {loading &&
        state.map((card, index) => (
          <Grid item key={card} xs={12} sm={6} md={7}>
            <Card
              className={classes.card}
              key={index}
              link="/reservationpage/${card.id}"
            >
              <Box>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.optimizedThumbUrls.srpDesktop}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h1">
                    {card.name}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h1">
                    {card.address.streetAddress}, {card.address.locality},{" "}
                    {card.address.postalCode}, {card.address.region}
                  </Typography>
                  <Typography>Rewards</Typography>
                  <Typography>{card.guestReviews.rating}</Typography>
                  <Typography>Price: {card.ratePlan.price.current}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="secondary"
                    value={price}
                    onChange={(card) => setPrice(card.ratePlan.price.current)}
                    sx={{ position: "absolute", top: "-305px", left: "380px" }}
                    onClick={() => {
                      localStorage.setItem("price", card.ratePlan.price.current)
                      localStorage.setItem("urlimage", card.optimizedThumbUrls.srpDesktop)
                      localStorage.setItem("hotelname", card.name)
                    }}
                    href="/reservationpage/"
                  >
                    Book Now
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}
