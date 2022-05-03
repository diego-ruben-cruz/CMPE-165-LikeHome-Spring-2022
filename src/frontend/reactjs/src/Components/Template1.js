import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const mock = [
  {
    title: "The Colors",
    description:
      "We used the SJSU colors as the main inspiration for this site, with some exploration done to create a darkmode with the colors. This feature was not further developed as the team decided to more closely follow the design language of hotels.com",
    illustration:
      "https://assets.maccarianagency.com/svg/illustrations/illustration4.svg",
    illustrationDark:
      "https://assets.maccarianagency.com/svg/illustrations/illustration4--dark.svg",
  },
  {
    title: "The Assets",
    description:
      "We used the MaterialUI (MUI) framework for React, which allowed us to cut the FE development times during the early development stages. This allowed us to explore different GUI elements and quickly mock up different implementations.",
    illustration:
      "https://assets.maccarianagency.com/svg/illustrations/illustration1.svg",
    illustrationDark:
      "https://assets.maccarianagency.com/svg/illustrations/illustration1--dark.svg",
  },
  {
    label: "Client portal access",
    title: "The Data",
    description:
      "We used a a mixture of our own in-house solutions and public APIs as well as Google Firebase to handle data relating to the user, hotels, reservations, and payments.",
    illustration:
      "https://assets.maccarianagency.com/svg/illustrations/illustration2.svg",
    illustrationDark:
      "https://assets.maccarianagency.com/svg/illustrations/illustration2--dark.svg",
  },
];

const Template1 = () => {
  const theme = useTheme();

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Box>
        <Box marginBottom={4}>
          <Typography variant={"h4"} sx={{ fontWeight: 700 }} align={"center"}>
            LikeHome is a web application which shares a catalog of hotels and
            properties
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            align={"center"}
          >
            LikeHome is an easy to use application, with emphasis placed on
            usability, good GUI design, and user-friendliness.
          </Typography>
          <Box marginTop={2} display={"flex"} justifyContent={"center"}>
            <Button
              color={"primary"}
              variant={"contained"}
              size={"large"}
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={20}
                  height={20}
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              }
              href="https://www.youtube.com/watch?v=b8G0ni2TTac"
              target="_blank"
            >
              Contact us
            </Button>
          </Box>
        </Box>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
              key={i}
              item
              container
              xs={12}
              spacing={4}
              direction={i % 2 === 1 ? "row-reverse" : "row"}
            >
              <Grid item container alignItems={"center"} xs={12} sm={6}>
                <Box>
                  <Typography
                    variant={"h6"}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                  <Button
                    size={"large"}
                    sx={{ marginTop: 2 }}
                    endIcon={
                      <Box
                        component={"svg"}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </Box>
                    }
                    href="https://github.com/diego-ruben-cruz/CMPE-165-LikeHome-Spring-2022"
                    target="_blank"
                  >
                    Learn more
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                container
                justifyContent={"center"}
                alignItems={"center"}
                xs={12}
                sm={6}
              >
                <Box
                  component={"img"}
                  src={`${
                    theme.palette.mode === "light"
                      ? item.illustration
                      : item.illustrationDark
                  }`}
                  alt={item.title}
                  width={1}
                  maxWidth={"80%"}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Template1;
