import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { NavigationState } from "../NavigationContext";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Container from "./Container";
import { useHistory } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const { setAlert } = NavigationState();

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: "passwords do not match",
        type: "error",
      });
      return;
    }

    try {
      const result1 = await setDoc(
        doc(db, "Users", `${email}`),
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          seals: 0,
        },
        { merge: true }
      );

      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(result);

      history.push("/login");

      setAlert({
        open: true,
        message: "Thank you for joining LikeHome.com!",
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  return (
    <>
      <br />
      <br />
      <Header />
      <Box bgcolor={"alternate.main"}>
        <Container maxWidth={800}>
          <Box marginBottom={4}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
              }}
            >
              Create an account
            </Typography>
            <Typography color="text.secondary">
              Fill out the form to get started.
            </Typography>
          </Box>
          <Card sx={{ p: { xs: 4, md: 6 } }}>
            <form>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
                    Enter your first name
                  </Typography>
                  <TextField
                    label="First name *"
                    variant="outlined"
                    name={"firstName"}
                    fullWidth
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
                    Enter your last name
                  </Typography>
                  <TextField
                    label="Last name *"
                    variant="outlined"
                    name={"lastName"}
                    fullWidth
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
                    Enter your email
                  </Typography>
                  <TextField
                    label="Email *"
                    variant="outlined"
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
                    Enter your password
                  </Typography>
                  <TextField
                    label="Password *"
                    variant="outlined"
                    name={"password"}
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
                    Re-enter Password
                  </Typography>
                  <TextField
                    label="Password *"
                    variant="outlined"
                    name={"repassword"}
                    type={"repassword"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item container xs={12}>
                  <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    alignItems={{ xs: "stretched", sm: "center" }}
                    justifyContent={"space-between"}
                    width={1}
                    maxWidth={600}
                    margin={"0 auto"}
                  >
                    <Box marginBottom={{ xs: 1, sm: 0 }}>
                      <Typography variant={"subtitle2"}>
                        Already have an account?{" "}
                        <Link
                          component={"a"}
                          color={"primary"}
                          href={"/login/"}
                          underline={"none"}
                        >
                          Log in.
                        </Link>
                      </Typography>
                    </Box>
                    <Button
                      size={"large"}
                      variant={"contained"}
                      onClick={handleSubmit}
                    >
                      Sign up
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Typography
                    variant={"subtitle2"}
                    color={"text.secondary"}
                    align={"center"}
                  >
                    By clicking "Sign up" button you agree with our{" "}
                    <Link
                      component={"a"}
                      color={"primary"}
                      href={"#"}
                      underline={"none"}
                    >
                      Company Terms and Conditions.
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default SignUp;
