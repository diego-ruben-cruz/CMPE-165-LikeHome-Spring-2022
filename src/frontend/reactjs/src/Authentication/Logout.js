import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { NavigationState } from "../NavigationContext";

const Logout = () => {
  const { setAlert } = NavigationState();

  const handleSubmit = () => {
    signOut(auth);

    setAlert({
      open: true,
      type: "success",
      message: "Come back soon!",
    });
  };

  return (
    <Button
      style={{ marginLeft: "10px", borderRadius: "50px", marginBottom: "5px" }}
      variant="contained"
      onClick={handleSubmit}
    >
      Logout
    </Button>
  );
};

export default Logout;
