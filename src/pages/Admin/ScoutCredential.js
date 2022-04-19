import React, { useState, useEffect, useRef, forwardRef } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ReactToPrint from "react-to-print";

import Credential from "../../components/Credential/Credential";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import { useAuth } from "../../context/AuthContext";

const ScoutCredential = (props) => {
  const { pageName } = props;
  const navigate = useNavigate();
  const { LogOut, currentUser } = useAuth();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const componentRef = useRef();

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    setUser({ ...user, ...u });
  }, []);

  const buttonStyle = {
    p: 2,
    backgroundColor: "#2E2270",
    color: "white",
    marginTop: "25px",
    "&:hover": {
      color: "#2E2270",
      backgroundColor: "#E7E4FA",
    },
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
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
            <Credential ref={componentRef} />
            <div style={containerStyle}>
              <ReactToPrint
                trigger={() => (
                  <Button sx={buttonStyle}>Imprimir mi credencial</Button>
                )}
                content={() => componentRef.current}
              />
            </div>
          </Box>
        </Box>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default ScoutCredential;
