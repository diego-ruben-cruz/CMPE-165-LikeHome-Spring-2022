import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProfileButton = () => {
  return (
    <Button
      style={{ marginLeft: "10px", borderRadius: "50px", marginBottom: "5px" }}
      variant="contained"
    >
      <Link
        to="/profile"
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        Profile
      </Link>
    </Button>
  );
};

export default ProfileButton;
