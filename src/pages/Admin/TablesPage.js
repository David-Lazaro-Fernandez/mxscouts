import React,{useState} from "react";

import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import {useTheme} from '@mui/material/styles';
import LeftDrawer from '../../components/LeftDrawer/LeftDrawer';
import Main from '../../components/Tables/Main';
import {useAuth} from '../../context/AuthContext';
const TablesPage = (props) => {
 
  const { pageName } = props;
  const navigate = useNavigate();
  const {LogOut} = useAuth()
  //LeftDrawer hooks
  const theme = useTheme();
  const [open, setOpen] = useState(false)
  return (
    <Box>
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
        <Main />
      </Box>
    </Box>
    </Box>
  );
};

export default TablesPage;
