import React, { useEffect, useState } from "react";
import { Grid, CssBaseline, CircularProgress } from "@mui/material";
import { getScouts } from "../../firebase.config";
import ScoutTable from "../../components/Tables/ScoutTable";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import RightMenu from "../../components/RightMenu";

const ScoutsTablePage = () => {
  const [scouts, setScouts] = useState([]);
  const [fetched, setFetched] = useState(false);
  const windowHeight = window.innerHeight;
  useEffect(() => {
    const fetchData = async () => {
      //Fetch all scouts
      const scoutQuerySnapshot = await getScouts();
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
            credencial: doc.data().credencial === '' ? 'Sin Credencial' : doc.data,
            seguro:
              typeof doc.data().seguro === "object"
                ? 
                new Date(doc.data().seguro.seconds * 1000).toLocaleDateString() < new Date().toLocaleDateString()
                  ?
                  "Vencido" : 
                  new Date(doc.data().seguro.seconds * 1000).toLocaleDateString()
                : doc.data().seguro === 'Sin Cobertura' ?
                  "Sin Cobertura" : 
                  "No proporcionado"
          },
        ]);
      });

      setFetched(true);
    };

    fetchData();
  }, []);

  return (
    <div
      style={{ backgroundColor: "#F2F7FA", height: `${window.innerHeight}px` }}
    >
      <CssBaseline />
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ heigth: "100%" }}
      >
        <Grid
          item
          lg={2}
          sx={{ backgroundColor: "white", textAlign: "center" }}
        >
          <LeftDrawer />
        </Grid>
        <Grid
          item
          lg={9}
          sx={{ backgroundColor: "#F2F7FA", textAlign: "center" }}
        >
          {fetched ? <ScoutTable ScoutList={scouts} /> : <CircularProgress sx={{color:'#2E2270'}} />}
        </Grid>
        <Grid
          item
          lg={1}
          sx={{
            backgroundColor: "#F2F7FA",
            textAlign: "center",
            height: `${windowHeight}px`,
            display: "flex",
            borderLeft: "1px solid #E1E1E1",
          }}
        >
          <RightMenu />
        </Grid>
      </Grid>
    </div>
  );
};

export default ScoutsTablePage;
