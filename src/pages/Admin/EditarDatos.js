import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import Datos from "../../components/EditarDatos/Datos";

import {useAuth} from '../../context/AuthContext';

const EditarDatos = (props) => {
  const navigate = useNavigate();
  const {LogOut} = useAuth();

  const { pageName } = props;
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  //Select TextFields
  const [sex, setSex] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [section, setSection] = useState('');
  const [group, setGroup] = useState('');
  const [secondaryGroup, setSecondaryGroup] = useState('');

  const [scoutData, setScoutData] = useState({
    id: "",
    sexo: "",
    nombre_completo: "",
    apellido_paterno: "",
    apellido_materno: "",
    nombres: "",
    fecha_de_nacimiento: "",
    edad_con_meses: "",
    edad: "",
    mes: "",
    calle: "",
    num_exterior: "",
    num_interior: "",
    colonia: "",
    cp: "",
    delegacion: "",
    telefono_casa: "",
    telefono_emergencia: "",
    correo_electronico: "",
    seccion: "",
    grupo: "",
    grupo_2: "",
  });
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <LeftDrawer
          open={open}
          setOpen={setOpen}
          theme={theme}
          pageName={pageName}
          navigate = {navigate}
          LogOut = {LogOut}
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
          scoutData={scoutData} 
          setScoutData={setScoutData} 
          sex = {sex}
          setSex = {setSex}
          birthDate = {birthDate}
          setBirthDate = {setBirthDate}
          section = {section}
          setSection = {setSection}
          group = {group}
          setGroup = {setGroup}
          secondaryGroup = {secondaryGroup}
          setSecondaryGroup = {setSecondaryGroup}
          />
        </Box>
      </Box>
    </>
  );
};

export default EditarDatos;
