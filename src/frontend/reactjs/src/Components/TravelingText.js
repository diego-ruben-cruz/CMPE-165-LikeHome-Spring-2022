import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import town from './town.svg';

const TravelingText = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <Box position={'flex'}>
      <Grid container>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ fontWeight: 700, color: '#222B45' }}
            >
              Stuff here about Traveling.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              sx={{ color: '#222B45' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat nisl pretium fusce id. In dictum non consectetur a erat. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. In dictum non consectetur a erat nam at lectus.
            </Typography>
          </Box>
          <Box
            component={Button}
            variant="contained"
            color="primary"
            size="large"
            height={54}
          >
            Discover the offer
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
            paddingLeft: '60px',
          }}
        >
          <Box height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image={town}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default TravelingText;
