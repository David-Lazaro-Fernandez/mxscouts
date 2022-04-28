//React Imports
import React, { useState, useEffect } from "react";
//Third Party Libraries
import { useNavigate, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
//Local Components
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import Main from "../../components/Tables/Main";
//Context
import { useAuth } from "../../context/AuthContext";

const TablesPage = (props) => {
  const { pageName } = props;
  const theme = useTheme();
  const navigate = useNavigate();
  const { LogOut, currentUser } = useAuth();
  //LeftDrawer hooks
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    setUser({ ...user, ...u });
  }, []);

  //Styles
  const mainBox = { display: "flex" };
  const main = {
    width: "100%",
    p: 3,
    marginTop: "60px",
    backgroundColor: "#F2F7FA",
  };

  return (
    <>
      {JSON.parse(localStorage.getItem("user")).uid.length > 0 ? (
        <Box>
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
              <Main />
            </Box>
          </Box>
        </Box>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default TablesPage;
