import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import { Button } from '@mui/material';

const Footer = () => {
    return (
        <>
        <Box
          style={{width:"100%",  height:120, background: 'linear-gradient(#2B6FD4, #1b59b8)'}}
          flexDirection = "column-reverse"
          color="primary"
        >
          <Box 
            display= "flex"
            flexDirection="column"
          >
            <Button
              style={{height: 30}}
            ></Button>
            <Typography
              align={'center'}
              variant={'subtitle1'}
              color="white"
              gutterBottom
              justifyContent="flex-end"
              style={{marginBottom:-50}}
            >
              &copy; Code Monkeys 2022. 
              <br/>
              All Rights Reserved
            </Typography>

            </Box>
           

        </Box>

        
       
        </>
    );
}

export default Footer;

/* <Grid  style={{ background: 'linear-gradient(#2B6FD4, #1b59b8)'}} container spacing={2} px={{ xs: 3, sm:5}} py={{ xs: 3, sm:5}} color = 'white'>
<Grid item xs={12}>
  <Box
    display={'flex'}

    justifyContent={'space-between'}
    alignItems={'center'}
    width={1}
    flexDirection={{ xs: 'column-reverse', sm: 'row' }}
  >
    <Box
      display={'flex'}
      component="a"
      width={80}
    >
    </Box>
      <Box marginTop={1}>
      </Box>
    </Box>
</Grid>
<Grid item xs={12}>
  <Typography
    align={'center'}
    variant={'subtitle1'}
    color="white"
    gutterBottom
  >
    &copy; Code Monkeys 2022. 
    <br/>
    All Rights Reserved
  </Typography>
</Grid>
</Grid> */
