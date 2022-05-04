import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import { Button } from '@mui/material';

const Footer = () => {
    return (
        <>
        <Box
          style={{width:"100%",  height:80, background: 'linear-gradient(#2B6FD4, #1b59b8)', position: 'fixed', bottom: 0, left: 0}}
          flexDirection = "column-reverse"
          color="primary"
          justifyContent="flex-end"
          
        >
        
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

        
       
        </>
    );
}

export default Footer;