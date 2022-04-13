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
  MenuItem,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";

import Navbar from "../components/Navbar";

import { useAuth } from "../context/AuthContext";
import {registerScoutInFirestore} from '../firebase.config';

const SignUp = () => {
  
  const inputTextField = { width: "100%" };

  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { signUp, getCurrentUser } = useAuth();
  const [selectedSection,setSelectedSection] = useState("")
  const [scoutData, setScoutData] = useState({
    email: "",
    password: "",
    nombre_completo: "",
    seccion: "",
    userImg: "",
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(scoutData.email, scoutData.password);
      const userAuthData = getCurrentUser()
      console.log(userAuthData)
      await registerScoutInFirestore(userAuthData, scoutData)
    } catch (err) {
      setError(true);
      console.log(err)
    }
  };

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
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "150px",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#2E2270" }}>
                <AcUnitIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Registrate
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      type="email"
                      required
                      fullWidth
                      id="email"
                      label="E-mail"
                      name="email"
                      autoComplete="email"
                      onChange={(e) =>
                        setScoutData({ ...scoutData, email: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="contraseña"
                      label="CIA"
                      type="password"
                      id="contraseña"
                      autoComplete="new-password"
                      onChange={(e) =>
                        setScoutData({ ...scoutData, password: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      required
                      fullWidth
                      id="nombre-completo"
                      label="Nombre Completo"
                      name="Nombre Completo"
                      autoComplete="email"
                      onChange={(e) =>
                        setScoutData({ ...scoutData, nombre_completo: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      select
                      id="scout-id"
                      label="Sección"
                      variant="outlined"
                      sx={inputTextField}
                      value={selectedSection}
                      onChange={(e) => {
                        setSelectedSection(e.target.value)
                        setScoutData({ ...scoutData, seccion: e.target.value });
                        console.log(scoutData)
                      }}
                    >
                      {[
                        "CC",
                        "JCC",
                        "ML",
                        "JML",
                        "MG",
                        "JMG",
                        "TS",
                        "JTS",
                        "TMS",
                        "JTMS",
                        "CR",
                        "JCR",
                        "CP",
                        "JCP",
                        "SN",
                        "JSN",
                      ].map((item) => {
                        return (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        );
                      })}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="allowExtraEmails"
                          sx={{
                            color: "#2E2270",
                            "&.Mui-checked": { color: "#2E2270" },
                          }}
                        />
                      }
                      label="Afirmo que soy mayor de 18 años, y en el caso de no serlo, cuento con el permiso de mis padres para registrarme en la asociación"
                    />
                  </Grid>
                </Grid>
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
                  Registrate
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      href="/Login"
                      variant="body2"
                      sx={{ color: "#2E2270" }}
                    >
                      ¿Ya eres un Scout? Ingresa aquí
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {error ? (
          <Box sx={{ marginTop: "50px" }}>
            <Alert severity="error">
              <AlertTitle>Ha ocurrido un error</AlertTitle>
              ¡Asegurate de que tu correo sea el adecuado y que tu contraseña
              sea de más de 6 caracteres!
            </Alert>
          </Box>
        ) : null}
      </Container>
    </div>
  );
};
export default SignUp;
