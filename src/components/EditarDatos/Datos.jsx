import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import DatosPersonales from "./DatosPersonales";
import Direccion from "./Direccion";
import DatosDeScout from "./DatosDeScout";
import { updateScoutData } from "../../firebase.config";
import ImageButton from "./ImageButton";

import { uploadProfilePicture } from "../../firebase.config";

const boxStyle = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",
  border: "solid #D3D3D3 1px",
  borderRadius: "10px",
};

const mainGrid = { margin: "20px 0px 0px 0px" };
const userImg = { border: "0px", borderRadius: "50%", width: "100px" };
const greetTypography = {
  color: "#2E2270",
  fontWeight: "600",
  marginTop: "10px",
};
const header = { color: "#2E2270", fontWeight: "600" };
const subHeader = { color: "#9E9E9E", fontWeight: "300" };
const buttonStyle = {
  p: 2,
  backgroundColor: "#2E2270",
  marginBottom: "40px",
  color: "white",
  "&:hover": { color: "#2E2270" },
};

const Datos = (props) => {
  const {
    fileURL,
    setFileURL,
    fileImage,
    setFileImage,
    image,
    setImage,
    scoutData,
    setScoutData,
    sex,
    setSex,
    birthDate,
    setBirthDate,
    section,
    setSection,
    group,
    setGroup,
    secondaryGroup,
    setSecondaryGroup,
    currentUser,
    snackBar,
    setSnackBar,
    error,
    setError,
  } = props;

  const handleSubmit = async () => {
    const scoutEmail = JSON.parse(localStorage.getItem("user")).email;
    try {
      await updateScoutData(scoutEmail, scoutData);
      setSnackBar(true);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const handleImageUpload = async (file) =>
    await uploadProfilePicture(file, scoutData.correo_electronico);

  const handleInfoUpdate = (fileURL) => {
    setScoutData({
      ...scoutData,
      foto_de_perfil: fileURL
        ? fileURL
        : JSON.parse(localStorage.getItem("user")).foto_de_perfil,
      correo_electronico: JSON.parse(localStorage.getItem("user")).email,
      seccion: JSON.parse(localStorage.getItem("user")).seccion,
      nombre_completo:
        scoutData.nombres +
        " " +
        scoutData.apellido_paterno +
        " " +
        scoutData.apellido_materno,
      edad:
        scoutData.fecha_de_nacimiento > 0
          ? new Date().getMonth() >= scoutData.fecha_de_nacimiento.getMonth()
            ? new Date().getYear() - scoutData.fecha_de_nacimiento.getYear()
            : new Date().getYear() - scoutData.fecha_de_nacimiento.getYear() - 1
          : "",
      mes: scoutData.fecha_de_nacimiento.getMonth(),
      edad_con_meses:
        //Year Calculation
        scoutData.fecha_de_nacimiento > 0
          ? new Date().getMonth() >= scoutData.fecha_de_nacimiento.getMonth()
            ? new Date().getYear() -
              scoutData.fecha_de_nacimiento.getYear() +
              " años " +
              //Month Calculation
              scoutData.fecha_de_nacimiento.getMonth() +
              " meses"
            : new Date().getYear() -
              scoutData.fecha_de_nacimiento.getYear() -
              1 +
              " años " +
              //Month Calculation
              scoutData.fecha_de_nacimiento.getMonth() +
              " meses"
          : "",
    });
  };

  const handleUpload = async () => {
      const response = await handleImageUpload(fileImage)
      handleInfoUpdate(await response)
      handleSubmit();
  };
  return (
    <>
      <Box sx={boxStyle}>
        <Container>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
            sx={mainGrid}
          >
            <Grid
              item
              lg={12}
              md={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageButton
                fileImage={fileImage}
                setFileImage={setFileImage}
                image={image}
                setImage={setImage}
              />
              <Typography variant="h4" sx={greetTypography}>
                Saludos{" "}
                {JSON.parse(localStorage.getItem("user")).nombre_completo} 👋
              </Typography>
            </Grid>

            <Grid
              item
              lg={12}
              md={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h5" sx={header}>
                Datos Personales
              </Typography>
              <Typography variant="body" sx={subHeader}>
                Usados para poder contactarnos contigo
              </Typography>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <DatosPersonales
                currentUser={currentUser}
                sex={sex}
                setSex={setSex}
                scoutData={scoutData}
                setScoutData={setScoutData}
                birthDate={birthDate}
                setBirthDate={setBirthDate}
              />
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h5" sx={header}>
                Dirección
              </Typography>
              <Typography variant="body" sx={subHeader}>
                Usados para poder conocer tu grupo más cercano
              </Typography>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Direccion scoutData={scoutData} setScoutData={setScoutData} />
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h5" sx={header}>
                Datos De Scout
              </Typography>
              <Typography variant="body" sx={subHeader}>
                Usados para identificar tu sección y grupo
              </Typography>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <DatosDeScout
                section={section}
                setSection={setSection}
                group={group}
                setGroup={setGroup}
                secondaryGroup={secondaryGroup}
                setSecondaryGroup={setSecondaryGroup}
                scoutData={scoutData}
                setScoutData={setScoutData}
              />
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Button onClick={handleUpload} sx={buttonStyle}>
                Actualizar Mis Datos
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Datos;
