import React, { useState } from "react";
import {
  Grid,
  CssBaseline,
} from "@mui/material";
import LeftMenu from '../components/LeftMenu';

const AdminPage = () => {
 
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
        sx={{ heigth: "100%",  }}
      >
        <Grid item lg={2} sx={{ backgroundColor: "white", textAlign:'center' }}>
          <LeftMenu/>
        </Grid>
        <Grid item lg={9} sx={{ backgroundColor: "white",  textAlign:'center'}}>
          Hola chula
        </Grid>
        <Grid item lg={1} sx={{ backgroundColor: "white", textAlign:'center'}}>
          Menu con botones a interactuar
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminPage;
