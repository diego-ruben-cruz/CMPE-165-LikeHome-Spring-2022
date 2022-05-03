import React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";
import window from "./window.svg";

const mock = [
  {
    icon: (
      <svg
        width={24}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        />
      </svg>
    ),
    title: "Learn the languages",
    subtitle:
      "React was used in this project using the MaterialUI framework, along with node.js for both Front and Back ends.",
  },
  {
    icon: (
      <svg
        width={24}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Learn the technologies",
    subtitle:
      "Firebase and public APIs were used in this project, with some in-house solutions connecting the two together with typescript.",
  },
];

const Template3 = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box>
        <Grid container spacing={4} direction={isMd ? "row" : "column-reverse"}>
          <Grid item xs={12} md={6} data-aos={isMd ? "fade-right" : "fade-up"}>
            <Box marginBottom={4}>
              <Typography sx={{ fontWeight: 700 }} variant={"h4"} gutterBottom>
                What questions do you have for us?
              </Typography>
              <Typography
                variant={"h6"}
                component={"p"}
                color={"text.secondary"}
              >
                Diego - Project Manager
                <br />
                Eric - FE Technical Lead
                <br />
                Sean - BE Technical Lead
              </Typography>
            </Box>
            <List
              disablePadding
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {mock.map((item, index) => (
                <ListItem
                  key={index}
                  disableGutters
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-offset={100}
                  data-aos-duration={600}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <ListItemAvatar>
                    <Box
                      component={Avatar}
                      variant={"rounded"}
                      color={theme.palette.primary.dark}
                      bgcolor={alpha(theme.palette.primary.light, 0.2)}
                    >
                      {item.icon}
                    </Box>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={item.subtitle}
                  />
                  <Button
                    variant={"contained"}
                    sx={{ marginTop: 2 }}
                    href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo"
                    target="_blank"
                  >
                    Get started
                  </Button>
                </ListItem>
              ))}
            </List>
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
            }}
          >
            <Box height={1} width={1}>
              <Box
                component={CardMedia}
                height={1}
                width={1}
                minHeight={300}
                image={window}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Template3;
