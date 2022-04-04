import React, {useState} from "react";
import {useTheme} from '@mui/material/styles';
import Box from "@mui/material/Box";

import LeftDrawer from '../../components/LeftDrawer/LeftDrawer';
import Datos from '../../components/EditarDatos/Datos';
const EditarDatos = (props) => {
    const {pageName} = props;
    const theme = useTheme();
    const [open,setOpen] = useState(false)

    return (
    <>
      <Box sx={{ display: "flex" }}>
        <LeftDrawer
          open={open}
          setOpen={setOpen}
          theme={theme}
          pageName={pageName}
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
          
            <Datos />
          
        </Box>
      </Box>
    </>
  );
};

export default EditarDatos;
