import React, { useState, useEffect } from "react";
import { useNavigate, Navigate} from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Credential from "../../components/Credential/Credential";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import { useAuth } from "../../context/AuthContext";

const ScoutCredential = (props) => {
  const { pageName } = props;
  const navigate = useNavigate();
  const { LogOut, currentUser } = useAuth();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [user,setUser] = useState({})

  useEffect( ()=>{
    const u = JSON.parse(localStorage.getItem('user'))
    setUser({...user, ...u})
  },[])

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
        <Credential />
      </Box>
    </Box>
    ) : <Navigate to="/login" /> }
    </>
  )
};

export default ScoutCredential;
