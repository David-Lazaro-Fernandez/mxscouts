import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Container,
  Box,
  Avatar,
  CssBaseline,
  Link,
  Button,
  Checkbox,
  TextField,
  FormControlLabel,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import {setProfilePic, getTestScouts} from '../firebase.config';
import Navbar from "../components/Navbar";

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { Login, currentUser, getCurrentUser, registerInFirebase}  = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await Login(email, password)
      await getCurrentUser()
      localStorage.setItem('user', JSON.stringify(currentUser))
      localStorage.setItem('profilePicture',JSON.stringify(currentUser.foto_de_perfil))
      console.log(localStorage.getItem('user'))
      currentUser.uid.length > 0 ? navigate("/admin") : console.log('(ノಠ益ಠ)ノ彡┻━┻')
    }catch(err){
      console.log(err)
      setError(true);
    }
  };
  console.log(currentUser)
  return (
    <div>
      <Navbar />
      <Container maxWidth="xs">
        <CssBaseline />
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
        >
          
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "150px",
              }}
            >
              <Avatar sx={{ bgcolor: "#2E2270" }}>
                <AcUnitIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Ingresar
              </Typography>
            </Box>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="Email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="CIA"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    sx={{
                      color: "#2E2270",
                      "&.Mui-checked": { color: "#2E2270" },
                    }}
                  />
                }
                label="Recuerdame"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: "#2E2270",
                  "&:hover": { bgcolor: "#221952" },
                }}
                onClick={handleSubmit}
              >
                Ingresar
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{ color: "#2E2270" }}>
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="/SignUp"
                    variant="body2"
                    sx={{ color: "#2E2270" }}
                  >
                    {"¿No tienes una cuenta?, Registrate aquí"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {error ? (
          <Box sx={{ marginTop: "50px" }}>
            <Alert severity="error">
              <AlertTitle>Ha ocurrido un error</AlertTitle>
              ¡Correo o contraseña incorrecta!
            </Alert>
          </Box>
        ) : null}
      </Container>
    </div>
  );
};
export default Login;
