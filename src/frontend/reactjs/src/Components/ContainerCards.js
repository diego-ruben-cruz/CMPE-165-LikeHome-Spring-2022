import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import Container from './Container';

const mock = [
  {
    title: 'Lorem 1',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Lorem 2',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Lorem 3',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const ContainerCards = () => {

  return (
    <Container>
      <Box>
        <Box marginBottom={4} >
          <Typography fontWeight={700} variant={'h4'} sx={{
              paddingTop: '750px',
            }}>
            Lorem
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{
              paddingTop: '30px',
            }}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Box
                display={'block'}
                width={1}
                height={1}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  display={'flex'}
                  flexDirection={'column'}
                  bgcolor={'alternate.main'}
                >
                  <CardContent>
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      sx={{ fontWeight: 500 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                  <Box flexGrow={1} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ContainerCards;