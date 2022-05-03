import { SignalCellularNull } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { auth, db } from "../firebase";
import { NavigationState } from "../NavigationContext";

const Rewards = () => {
  const [sealNumber, setSealNumber] = useState(0);

  const { setAlert } = NavigationState();

  const docRef = doc(db, "Users", auth.currentUser.email);
  onSnapshot(docRef, (doc) => {
    setSealNumber(doc.data().seals);
    console.log(sealNumber);
    if (!doc.data().seals) {
      setSealNumber(0);
    }
  });

  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: 500,
        marginLeft: 450,
        marginTop: 60,
        fontSize: 20,
      }}
    >
      <Typography
        style={{
          fontFamily: ["Monserrat", "sans-serif"].join(","),
          fontSize: 32,
          fontWeight: "bold",
        }}
      >
        Rewards:
      </Typography>

      <Typography
        style={{
          fontFamily: ["Monserrat", "sans-serif"].join(","),
          fontSize: 26,
        }}
      >
        Current Seals: {sealNumber}
      </Typography>

      <Typography
        style={{
          fontFamily: ["Monserrat", "sans-serif"].join(","),
          fontSize: 18,
        }}
      >
        Each seal is earned after spending a certain amount of money on a
        reservation.
        <br />
        USD &le;75 - 1 seal
        <br />
        USD 75 - USD 150 - 2 seals
        <br />
        USD 150 - USD 225 - 3 seals
        <br />
        USD USD 225+ - 4 seals
        <br />
        You earn a free night in a One Bedroom Suite from any hotel after
        obtaining 7 seals, thereafter every additional night is 4 seals each.
      </Typography>

      {sealNumber < 7 ? (
        <Typography
          style={{
            fontFamily: ["Monserrat", "sans-serif"].join(","),
            fontSize: 18,
          }}
        >
          Remaining Seals until redeemable: {7 - sealNumber}
        </Typography>
      ) : (
        <Typography
          style={{
            fontFamily: ["Monserrat", "sans-serif"].join(","),
            fontSize: 18,
          }}
        >
          Congratulations!!! You have earned enough Seals for a free night!
        </Typography>
      )}
    </Box>
  );
};

export default Rewards;
