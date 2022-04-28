//React Imports
import React, { useState, useEffect } from "react";
//Third Party Libraries
import { useNavigate, Navigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
//Local Components
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import NoInsurance from "../../components/MedicalInsurancePage/NoInsurance";
//Firebase Functions
import {
  getScoutsWithoutMedicalInsuranceNA,
  getScoutsWithExpiredMedicalInsurance,
  getScoutsWithoutMedicalInsurance,
} from "../../firebase.config";
//Context
import { useAuth } from "../../context/AuthContext";

const ScoutsWithoutMedicalInsurancePage = (props) => {
  const navigate = useNavigate();
  const { LogOut } = props;
  useAuth();
  const { pageName } = props;
  //Left Drawer states
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  //Main content states
  const [insurance, setInsurance] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      //Gets user from localStorage
      const u = JSON.parse(localStorage.getItem("user"));
      setUser({ ...user, ...u });

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

  //Styles
  const mainBox = { display: "flex" };
  const main = {
    width: "100%",
    p: 3,
    marginTop: "60px",
    backgroundColor: "#F2F7FA",
  };
  const circularProgressWrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };
  const circularProgress = { color: "#2E2270", marginTop: "100px" };

  return (
    <>
      {JSON.parse(localStorage.getItem("user")).uid.length > 0 ? (
        <Box sx={mainBox}>
          <LeftDrawer
            open={open}
            setOpen={setOpen}
            theme={theme}
            pageName={pageName}
            navigate={navigate}
            LogOut={LogOut}
          />
          <Box component="main" sx={main}>
            {fetched ? (
              <NoInsurance ScoutList={insurance} />
            ) : (
              <div style={circularProgressWrapper}>
                <CircularProgress sx={CircularProgress} />
              </div>
            )}
          </Box>
        </Box>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default ScoutsWithoutMedicalInsurancePage;
