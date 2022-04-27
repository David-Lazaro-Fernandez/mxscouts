import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import ScoutTable from "../../components/Tables/ScoutTable";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";

import { getScoutsWithoutMedicalInsuranceNA, getScoutsWithoutMedicalInsurance, getScoutsWithExpiredMedicalInsurance } from "../../firebase.config";
import { useAuth } from "../../context/AuthContext";

const ScoutsWithoutMITable = (props) => {
  const navigate = useNavigate();
  const { LogOut, currentUser } = useAuth();
  const [user, setUser] = useState({});
  //Left Drawer states
  const { pageName } = props;
  const [open, setOpen] = useState(false);
  const theme = useTheme();
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
                  doc.data().credencial === "" ? "Sin Credencial" : doc.data().credencial,
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
                  doc.data().credencial === "" ? "Sin Credencial" : doc.data().credencial,
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
                  doc.data().credencial === "" ? "Sin Credencial" : doc.data().credencial,
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
      {JSON.parse(localStorage.getItem('user')).uid.length > 0 ? (
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
            {fetched ? (
              <ScoutTable ScoutList={insurance} />
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress
                  sx={{ color: "#2E2270", marginTop: "100px" }}
                />
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

export default ScoutsWithoutMITable;