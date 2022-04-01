import React, { useState, useEffect } from "react";
import { Grid, CssBaseline, CircularProgress } from "@mui/material";

import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import RightMenu from "../../components/RightMenu";
import NoInsurance from "../../components/MedicalInsurancePage/NoInsurance";

import {
  getScoutsWithoutMedicalInsuranceNA,
  getScoutsWithExpiredMedicalInsurance,
  getScoutsWithoutMedicalInsurance,
} from "../../firebase.config";

const ScoutsWithoutMedicalInsurancePage = () => {
  const [insurance, setInsurance] = useState([]);
  const [fetched, setFetched] = useState(false);
  const windowHeight = window.innerHeight;
  useEffect(() => {
    const fetchData = async () => {
      //Fetch those ones with #N/A
      const naQuerySnapshot = await getScoutsWithoutMedicalInsuranceNA();
      naQuerySnapshot.forEach((doc) => {
        setInsurance((prevData) =>
          setInsurance([
            ...prevData,
            {
              grupo: doc.data().grupo,
              nombre_completo: doc.data().nombre_completo,
              seccion: doc.data().seccion,
              correo_electronico:
                doc.data().correo_electronico.length > 0
                  ? doc.data().correo_electronico
                  : "Correo no proporcionado",
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
          ])
        );
      });
      //Fetch those ones without insurance
      const noInsuranceQuerySnapshot = await getScoutsWithoutMedicalInsurance();
      noInsuranceQuerySnapshot.forEach((doc) => {
        setInsurance((prevData) =>
          setInsurance([
            ...prevData,
            {
              grupo: doc.data().grupo,
              nombre_completo: doc.data().nombre_completo,
              seccion: doc.data().seccion,
              correo_electronico:
                doc.data().correo_electronico.length > 0
                  ? doc.data().correo_electronico
                  : "Correo no proporcionado",
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
          ])
        );
      });
      //Fetch those ones with a expired insurance
      const expiredInsuranceQuerySnapshot =
        await getScoutsWithExpiredMedicalInsurance();
      expiredInsuranceQuerySnapshot.forEach((doc) => {
        setInsurance((prevData) =>
          setInsurance([
            ...prevData,
            {
              grupo: doc.data().grupo,
              nombre_completo: doc.data().nombre_completo,
              seccion: doc.data().seccion,
              correo_electronico:
                doc.data().correo_electronico.length > 0
                  ? doc.data().correo_electronico
                  : "Correo no proporcionado",
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
          ])
        );
      });
      setFetched(true);
    };

    fetchData();
  }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: "#F2F7FA",
          height: `${window.innerHeight}px`,
        }}
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
            md={2}
            sx={{ backgroundColor: "white", textAlign: "center" }}
          >
            <LeftDrawer />
          </Grid>
          <Grid
            item
            lg={9}
            md={8}
            sx={{ backgroundColor: "#F2F7FA", textAlign: "center" }}
          >
            {fetched ? (
              <NoInsurance ScoutList={insurance} />
            ) : (
              <CircularProgress sx={{ color: "#2E2270" }} />
            )}
          </Grid>
          <Grid
            item
            lg={1}
            md={2}
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
    </>
  );
};

export default ScoutsWithoutMedicalInsurancePage;
