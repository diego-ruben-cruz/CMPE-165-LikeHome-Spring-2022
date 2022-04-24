import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './Footer.css';

const Footer = () => {
    return (
        <>
        <Box color = 'white'>
        <Grid  style={{ background: 'linear-gradient(#2B6FD4, #1b59b8)'}} container spacing={2} px={{ xs: 3, sm:5}} py={{ xs: 3, sm:5}} color = 'white'>
        <Grid item xs={12}>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            width={1}
            flexDirection={{ xs: 'column', sm: 'row' }}
          >
            <Box
              display={'flex'}
              component="a"
              width={80}
            >
            </Box>
            <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
              <Box marginTop={1} marginRight={2}>
                  Home
              </Box>
              <Box marginTop={1} marginRight={2}>
                About Us
              </Box>
              <Box marginTop={1}>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            align={'center'}
            variant={'subtitle2'}
            color="white"
            gutterBottom
          >
            &copy; Code Monkeys. 2022. All rights reserved
          </Typography>
        </Grid>
        </Grid>
        </Box>
        </>
    );
}

export default Footer;
