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
import {styled}from '@mui/material/styles'
// const CustomInput = styled(TextField)({
//     '&:hover fieldset':{
//         bgColor:'red'
//     }
// })
const SignUp = () => {
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
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="Nombre"
                      required
                      fullWidth
                      id="nombre"
                      label="Nombre"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="apellidos"
                      label="Apellidos"
                      name="Apellidos"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="E-mail"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="contraseña"
                      label="Contraseña"
                      type="password"
                      id="contraseña"
                      autoComplete="new-password"
                    />
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
      </Container>
    </div>
  );
};
export default SignUp;
