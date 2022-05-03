import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Footer from "./Footer";
import Header from "./Header";
import Container from "./Container";
import CardMedia from "@mui/material/CardMedia";
import { NavigationState } from "../NavigationContext";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAlert } = NavigationState();

  const history = useHistory();

  const handleSubmit = async () => {
    if (!email || !password) {
      setAlert({
        open: true,
        message: " missing email or password",
        type: "error",
      });
      return;
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      setAlert({
        open: true,
        message: `Welcome Back ${result.user.email}`,
        type: "success",
      });

      history.push("/profile");
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
              Welcome back
            </Typography>
            <Typography color="text.secondary">
              Login to manage your account.
            </Typography>
          </Box>
          <Card sx={{ p: { xs: 4, md: 6 } }}>
            <form>
              <Grid container spacing={4}>
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
                  <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    alignItems={{ xs: "stretched", sm: "center" }}
                    justifyContent={"space-between"}
                    width={1}
                    marginBottom={2}
                  >
                    <Box marginBottom={{ xs: 1, sm: 0 }}>
                      <Typography variant={"subtitle2"}>
                        Enter your password
                      </Typography>
                    </Box>
                    <Typography variant={"subtitle2"}>
                      <Link
                        component={"a"}
                        color={"primary"}
                        href={"#"}
                        underline={"none"}
                      >
                        Forgot your password?
                      </Link>
                    </Typography>
                  </Box>
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
                        Don't have an account yet?{" "}
                        <Link
                          component={"a"}
                          color={"primary"}
                          href={"#"}
                          underline={"none"}
                        >
                          Sign up here.
                        </Link>
                      </Typography>
                    </Box>
                    <Button
                      size={"large"}
                      variant={"contained"}
                      onClick={handleSubmit}
                    >
                      Login
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Container>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Login;
