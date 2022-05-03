import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import Container from "./Container";

const mock = [
  {
    title: "Jerry Gao's TA",
    subtitle:
      "I love to use LikeHome in my spare time to look for new views to grade the homework of CMPE 187 students to.",
  },
  {
    title: "Spring 2021 CMPE 133 Sec 02 Note Taker",
    subtitle:
      "Working with LikeHome is a good way for me to get some nice chill vibes while moderating the CMPE 165 class Discord server and it gives me another opportunity to roast Dan. #SproutGang",
  },
  {
    title: "David R",
    subtitle:
      "A few of my students actually happened to work on LikeHome, it's such a great site to make reservations with my family when we take trips down to SoCal!",
  },
];

const ContainerCards = () => {
  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Typography
            fontWeight={700}
            variant={"h4"}
            sx={{
              paddingTop: "750px",
            }}
          >
            Some reviews from our power users:
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            paddingTop: "30px",
          }}
        >
          {mock.map((item, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Box display={"block"} width={1} height={1}>
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  display={"flex"}
                  flexDirection={"column"}
                  bgcolor={"alternate.main"}
                >
                  <CardContent>
                    <Typography
                      variant={"h6"}
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
