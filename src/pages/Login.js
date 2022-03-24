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
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
const Login = () => {
  return (
    <div>
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
                marginTop: "100px",
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
                label="CIA"
                name="CIA"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
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
      </Container>
    </div>
  );
};
export default Login;
