import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useTheme} from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import NoInsurance from "../../components/MedicalInsurancePage/NoInsurance";

import {
  getScoutsWithoutMedicalInsuranceNA,
  getScoutsWithExpiredMedicalInsurance,
  getScoutsWithoutMedicalInsurance,
} from "../../firebase.config";
import {useAuth} from '../../context/AuthContext';
const ScoutsWithoutMedicalInsurancePage = (props) => {
  const navigate = useNavigate();
  const {LogOut} = useAuth()
  //Left Drawer states
  const { pageName } = props;
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  //Main content states
  const [insurance, setInsurance] = useState([]);
  const [fetched, setFetched] = useState(false);
  
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
          <NoInsurance ScoutList={insurance} />
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

export default ScoutsWithoutMedicalInsurancePage;
