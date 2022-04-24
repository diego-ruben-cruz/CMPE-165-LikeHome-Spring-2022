import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import HotelData from './data.json';
// import Axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '250px',
      width: '1250px',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '25%',
      float: 'left',
      width: '25%',
      height: '125px'
    },
    cardContent: {
      flexGrow: 1,
      position: 'relative',
      left: '10px',
      top: '5px'
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const getData = ()  => {
  //   Axios.get('http://localhost:8080/api/hotel/search?location=Los Angeles');
  // }
  
    export default function SearchResults (){
    const classes = useStyles();
    return (
        <Grid container spacing={4}>
          <Button onClick={() => {
    alert('clicked');
  }} href='/reservationpage/' size="small" color="primary" >
                  Book Now
                </Button>
        {HotelData.map((card, index) => (
          <Grid item key={card} xs={12} sm={6} md={7}>
            <Card className={classes.card} key={index} link='/reservationpage/${card.id}'>
                <Box>
              <CardMedia
                className={classes.cardMedia}
                image={card.optimizedThumbUrls.srpDesktop}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.name}
                </Typography>
                <Typography>
                {card.address.streetAddress}, {card.address.locality}, {card.address.postalCode}, {card.address.region}
                </Typography>
                <Typography>
                Rewards
                </Typography>
                <Typography>
                {card.guestReviews.rating}
                </Typography>
                <Typography>
                {card.ratePlan.price.fullyBundledPricePerStay}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => {
    alert('clicked');
  }} href='/reservationpage/' size="small" color="primary" >
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