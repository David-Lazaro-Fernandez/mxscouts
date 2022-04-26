import React, { useState, useEffect } from "react";

import { useNavigate, Navigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import Datos from "../../components/EditarDatos/Datos";

import { useAuth } from "../../context/AuthContext";
import {updateScoutData} from '../../firebase.config';

const EditarDatos = (props) => {
  const navigate = useNavigate();
  const { LogOut, currentUser} = useAuth();
  //LeftDrawer States
  const { pageName } = props;
  const theme = useTheme();
  const SCOUT = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  //Select TextFields
  const [sex, setSex] = useState(SCOUT.sex);
  const [birthDate, setBirthDate] = useState(
    new Date(SCOUT.fecha_de_nacimiento.seconds * 1000)
  );
  const [section, setSection] = useState(SCOUT.seccion);
  const [group, setGroup] = useState(SCOUT.grupo);
  const [secondaryGroup, setSecondaryGroup] = useState(SCOUT.grupo_2);
  //Profile Picture
  const [image, setImage] = useState(localStorage.getItem("profilePicture"));
  const [fileImage, setFileImage] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  //Snackbar
  const [snackBar, setSnackBar] = useState(false);
  const [error, setError] = useState(false);
  //Upload handler
  const [uploadRequest, setUploadRequest] = useState(1);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBar(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const [scoutData, setScoutData] = useState({
    id: SCOUT.id,
    sexo: SCOUT.sexo,
    nombre_completo: SCOUT.nombre_completo,
    apellido_paterno: SCOUT.apellido_paterno,
    apellido_materno: SCOUT.apellido_materno,
    nombres: SCOUT.nombres,
    fecha_de_nacimiento: new Date(SCOUT.fecha_de_nacimiento.seconds * 1000),
    edad_con_meses: SCOUT.edad_con_meses,
    edad: SCOUT.edad,
    mes: SCOUT.mes,
    calle: SCOUT.calle,
    num_exterior: SCOUT.num_exterior,
    num_interior: SCOUT.num_interior,
    colonia: SCOUT.colonia,
    cp: SCOUT.cp,
    delegacion: SCOUT.delegacion,
    telefono_casa: SCOUT.telefono_casa,
    telefono_emergencia: SCOUT.telefono_emergencia,
    correo_electronico: SCOUT.correo_electronico,
    seccion: SCOUT.seccion,
    grupo: SCOUT.grupo,
    grupo_2: SCOUT.grupo_2,
  });

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    setUser({ ...user, ...u });
  }, []);

  useEffect(() => {
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
    handleSubmit()
  }, [uploadRequest]);
  return (
    <>
      {JSON.parse(localStorage.getItem("user")).uid.length > 0 ? (
        <Box sx={{ display: "flex" }}>
          <LeftDrawer
            open={open}
            setOpen={setOpen}
            theme={theme}
            pageName={pageName}
            navigate={navigate}
            LogOut={LogOut}
          />
          <Box
            component="main"
            sx={{
              width: "100%",
              p: 3,
              marginTop: "60px",
              backgroundColor: "#F2F7FA",
            }}
          >
            <Datos
              uploadRequest={uploadRequest}
              setUploadRequest = {setUploadRequest}
              fileURL={fileURL}
              setFileURL={fileURL}
              fileImage={fileImage}
              setFileImage={setFileImage}
              image={image}
              setImage={setImage}
              error={error}
              setError={setError}
              snackBar={snackBar}
              setSnackBar={setSnackBar}
              scoutData={scoutData}
              setScoutData={setScoutData}
              sex={sex}
              setSex={setSex}
              birthDate={birthDate}
              setBirthDate={setBirthDate}
              section={section}
              setSection={setSection}
              group={group}
              setGroup={setGroup}
              secondaryGroup={secondaryGroup}
              setSecondaryGroup={setSecondaryGroup}
            />
            <Snackbar
              open={snackBar}
              autoHideDuration={3000}
              onClose={handleClose}
              message="Tus Datos se han actualizado 🎉"
              action={action}
            />
          </Box>
        </Box>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default EditarDatos;
