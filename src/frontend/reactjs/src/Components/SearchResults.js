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
import { WindowSharp } from "@mui/icons-material";

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

var name = localStorage.getItem("name");
console.log(name);

{
  /*Holds the the sort and filter options*/
}
var params = {};

{
  /*Changes based on what user wants to Sort*/
}
var sortOrder = localStorage.getItem("sortOrder");

{
  /*Changes based on event*/
}
var filterHotelName = localStorage.getItem("filterHotelName");
var filterStars = localStorage.getItem("filterStars");
var filterPrice = localStorage.getItem("filterPrice");

{
  /*Get Info about the Sort*/
}
function checkSort() {
  if (sortOrder === "") {
    return;
  }

  if (sortOrder == 1) {
    params = { ...params, sortOrder: "PRICE_HIGHEST_FIRST" };
  } else if (sortOrder == 2) {
    params = { ...params, sortOrder: "PRICE" };
  } else if (sortOrder == 3) {
    params = { ...params, sortOrder: "STAR_RATING_HIGHEST_FIRST" };
  } else if (sortOrder == 4) {
    params = { ...params, sortOrder: "STAR_RATING_LOWEST_FIRST" };
  }
}

function checkFilterStars() {
  if (filterStars === "" || filterStars == -1) {
    return;
  }
  params = { ...params, starRatings: filterStars };
}

{
  /*Check if there is max/min price filter, then retrieve it*/
}
function checkFilterPrice() {
  if (filterPrice === "") {
    return;
  }

  var pointOne = 0;
  var pointTwo = 0;
  if (filterPrice === "50<") {
    pointOne = 50;
    params = { ...params, priceMax: pointOne };
  } else if (filterPrice === ">500") {
    pointOne = 500;
    params = { ...params, priceMin: pointOne };
  } else {
    const arr = filterPrice.split("-");
    pointOne = Number(arr[0]);
    pointTwo = Number(arr[1]);
    params = { ...params, priceMin: pointOne, priceMax: pointTwo };
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
      console.log(params);
      api.hotel
        .search({ ...params, location: name })
        .then((res) => setState(res));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Grid container spacing={4}>
      {state.map((card, index) => (
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
                    localStorage.setItem("price", card.ratePlan.price.current);
                    localStorage.setItem(
                      "url",
                      card.optimizedThumbUrls.srpDesktop
                    );
                    localStorage.setItem("hotelname", card.name);
                    localStorage.setItem("id", card.id);
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
