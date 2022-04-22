import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Header from './Header';
import Container from './Container';
import TravelingText from './TravelingText';
import ContainerCards from './ContainerCards';
import Footer from './Footer';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';

const Home = () => {
  const theme = useTheme();

  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Box
      minHeight={300}
      height={'auto'}
      position={'relative'}
    >
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 900,
                color: 'Black',
              }}
            >
              A Home Far Away From Home
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              sx={{
                fontWeight: 400,
                color: 'black',
              }}
            >
              With LikeHome
              <br />
              Stuff should go here
            </Typography>
          </Box>
          <Box
            padding={{ xs: 3, sm: 6 }}
            width={1}
            component={Card}
            boxShadow={1}
          >
            <form noValidate autoComplete="off">
              <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
                <Box
                  width={1}
                  marginRight={{ xs: 0, md: 2 }}
                  marginBottom={{ xs: 2, md: 0 }}
                >
                  <TextField
                    sx={{
                      height: 54,
                    }}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box
                            component={'svg'}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width={24}
                            height={24}
                            color={'primary.main'}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box>
                  <Button
                    sx={{ height: 54, whiteSpace: 'nowrap' }}
                    variant="contained"
                    color="primary"
                    size="medium"
                    fullWidth
                  >
                    Search Now
                  </Button>
                </Box>
              </Box>
            </form>

          </Box>
        </Box>
        <ContainerCards/>
    <TravelingText/>
    <Template1/>
    <Template2/>
    <Template3/>
      </Container>
    </Box>
    <Footer/>
    </>
  );
};

export default Home;