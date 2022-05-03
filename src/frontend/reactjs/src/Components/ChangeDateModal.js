import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Login from "./Login";
import { auth, db } from "../firebase";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { async } from "@firebase/util";
import { doc, setDoc } from "firebase/firestore";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";
import { SettingsInputAntenna } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    fontFamily: "Montserrat",
  },
}));

export default function ChangeDateModal(props) {
  const [checkout, setCheckOut] = useState("");
  const [checkin, setCheckin] = useState("");

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = async () => {
    {
      try {
        setOpen(true);
        const result1 = await setDoc(
          doc(db, "Reservations", props.id),
          {
            checkIn: checkin,
            checkOut: checkout,
          },
          { merge: true }
        );
      } catch (error) {}
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        Change Date
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography>
              {" "}
              Change Date:
              <form noValidate autoComplete="off">
                <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
                  <Box
                    width={1}
                    marginRight={{ xs: 0, md: 2 }}
                    marginBottom={{ xs: 4, md: 0 }}
                    display={"flex"}
                    flexDirection={{ xs: "column", md: "row" }}
                  >
                    <TextField
                      sx={{
                        height: 54,
                        marginRight: { xs: 0, md: 2 },
                        marginBottom: { xs: 4, md: 0 },
                      }}
                      variant="outlined"
                      color="primary"
                      size="medium"
                      label="Check in"
                      value={checkin}
                      onChange={(i) => setCheckin(i.target.value)}
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment type="number" position="start">
                            <Box
                              component={"svg"}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              width={24}
                              height={24}
                              color={"primary.main"}
                            >
                              <CalendarTodayIcon />
                            </Box>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      sx={{
                        height: 54,
                        marginRight: { xs: 0, md: 2 },
                        marginBottom: { xs: 4, md: 0 },
                      }}
                      variant="outlined"
                      color="primary"
                      size="medium"
                      label="Check Out"
                      value={checkout}
                      onChange={(o) => setCheckOut(o.target.value)}
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment type="number" position="start">
                            <Box
                              component={"svg"}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              width={24}
                              height={24}
                              color={"primary.main"}
                            >
                              <CalendarTodayIcon />
                            </Box>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Box>
              </form>
            </Typography>

            <Button
              type={"submit"}
              variant="contained"
              color="secondary"
              onClick={async () => {
                const result1 = await setDoc(
                  doc(db, "Reservations", props.id),
                  {
                    checkIn: checkin,
                    checkOut: checkout,
                  },
                  { merge: true }
                );
                window.location.reload();
              }}
            >
              Update
            </Button>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
