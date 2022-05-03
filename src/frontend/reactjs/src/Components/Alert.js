import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { NavigationState } from "../NavigationContext";
import React from "react";

const Alert = () => {
  const { alert, setAlert } = NavigationState();

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };

  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
      style={{
        height: 220,
      }}
    >
      <MuiAlert
        onClose={handleCloseAlert}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
