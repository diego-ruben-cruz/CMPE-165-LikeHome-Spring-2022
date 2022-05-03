import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import town from "./town.svg";

const TravelingText = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Box position={"flex"}>
        <Grid container>
          <Grid item xs={12} sm={6} data-aos={"fade-up"}>
            <Box marginBottom={2}>
              <Typography
                variant="h4"
                color="text.primary"
                sx={{ fontWeight: 700, color: "#222B45" }}
              >
                About the Code Monkeys
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                sx={{ color: "#222B45" }}
              >
                We're a team of 10 developers, each with a different skillset,
                making a site not unlike hotels.com. We committed several crimes
                in the name of Agile development, ingested several liters of
                lessons from the house of lean, and declared war on paywalled
                features. We've built this website for the CMPE 165 course at
                San Jose State University for the Spring 2022 semester.
              </Typography>
            </Box>
            <Box
              component={Button}
              variant="contained"
              color="primary"
              size="large"
              height={54}
              href="https://youtu.be/dQw4w9WgXcQ"
              target="_blank"
            >
              Check out our other work
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
              display: { xs: "none", md: "flex" },
              paddingLeft: "60px",
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
