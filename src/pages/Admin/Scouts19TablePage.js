import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import ScoutTable from "../../components/Tables/ScoutTable";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";

import { getScouts19 } from "../../firebase.config";
import {useAuth} from '../../context/AuthContext';
const Scouts19TablePage = (props) => {
  const navigate = useNavigate();
  const {LogOut} = useAuth()
  //Left Drawer states
  const { pageName } = props;
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  //Main content states
  const [scouts, setScouts] = useState([]);
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      //Fetch all scouts
      const scoutQuerySnapshot = await getScouts19();
      scoutQuerySnapshot.forEach((doc) => {
        setScouts((prevData) => [
          ...prevData,
          {
            id: doc.data().id,
            nombre_completo: doc.data().nombre_completo,
            apellido_paterno: doc.data().apellido_paterno,
            apellido_materno: doc.data().apellido_materno,
            nombres: doc.data().nombres,
            fecha_de_nacimiento: new Date(
              doc.data().fecha_de_nacimiento.seconds * 1000
            ).toLocaleDateString(),
            edad_con_meses: doc.data().edad_con_meses,
            edad: doc.data().edad,
            mes: doc.data().mes,
            num_exterior: doc.data().num_exterior,
            num_interior:
              doc.data().num_interior === ""
                ? "No tiene"
                : doc.data().num_interior,
            colonia:
              doc.data().colonia === ""
                ? "No proporcionado"
                : doc.data().colonia,
            cp: doc.data().cp,
            telefono_casa: doc.data().telefono_casa,
            telefono_emergencia:
              doc.data().telefono_emergencia === ""
                ? "Sin numero de emergencia"
                : doc.data().telefono_emergencia,
            correo_electronico:
              doc.data().correo_electronico === ""
                ? "No proporcionado"
                : doc.data().correo_electronico,
            seccion: doc.data().seccion,
            grupo: doc.data().grupo,
            grupo_2: doc.data().grupo_2,
            cia: doc.data().cia,
            sexo: doc.data().sexo,
            remesa: doc.data().remesa,
            credencial:
              doc.data().credencial === "" ? "Sin Credencial" : doc.data,
            seguro:
              typeof doc.data().seguro === "object"
                ? new Date(
                    doc.data().seguro.seconds * 1000
                  ).toLocaleDateString() < new Date().toLocaleDateString()
                  ? "Vencido"
                  : new Date(
                      doc.data().seguro.seconds * 1000
                    ).toLocaleDateString()
                : doc.data().seguro === "Sin Cobertura"
                ? "Sin Cobertura"
                : "No proporcionado",
          },
        ]);
      });

      setFetched(true);
    };

    fetchData();
  }, []);

  return (
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
        {fetched ? (
          <ScoutTable ScoutList={scouts} />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress sx={{ color: "#2E2270", marginTop: "100px" }} />
          </div>
        )}
      </Box>
    </Box>
  );
};

export default Scouts19TablePage;