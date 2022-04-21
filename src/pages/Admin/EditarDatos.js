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

const EditarDatos = (props) => {
  const navigate = useNavigate();
  const { LogOut, currentUser } = useAuth();
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
  const [image, setImage] = useState(
    `https://exploringbits.com/wp-content/uploads/2022/01/Luffy-PFP-1-1024x1024.jpg`
  );
  const [fileImage, setFileImage] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  //Snackbar
  const [snackBar, setSnackBar] = useState(false);
  const [error, setError] = useState(false);

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
  console.log(scoutData.fecha_de_nacimiento);
  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    setUser({ ...user, ...u });
  }, []);

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
