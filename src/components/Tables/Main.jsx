//React Imports
import React from "react";
//Third Party Libraries
import { Button, Grid } from "@mui/material";

const Main = () => {
  //Styles
  const buttonStyle = {
    backgroundColor: "white",
    color: "#2E2270",
    width: "100%",
    height: "100px",
    fontSize: "20px",
  };
  
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xl={6} lg={6}>
          <Button sx={buttonStyle} href="/Admin/tables/scouts22">
            Scouts 2022
          </Button>
        </Grid>
        <Grid item xl={6} lg={6}>
          <Button sx={buttonStyle} href="/admin/tables/activities22">
            Actividades 2022
          </Button>
        </Grid>
        <Grid item xl={6} lg={6}>
          <Button sx={buttonStyle} href="/admin/tables/scouts21">
            Scouts 2021
          </Button>
        </Grid>
        <Grid item xl={6} lg={6}>
          <Button sx={buttonStyle} href="/admin/tables/scouts20">
            Scouts 2020
          </Button>
        </Grid>
        <Grid item xl={6} lg={6}>
          <Button sx={buttonStyle} href="/admin/tables/scouts19">
            Scouts 2019
          </Button>
        </Grid>
        <Grid item xl={6} lg={6}>
          <Button sx={buttonStyle} href="/admin/tables/scouts18">
            Scouts 2018
          </Button>
        </Grid>
        <Grid item xl={6} lg={6}>
          <Button sx={buttonStyle} href="/admin/tables/scouts-no-insurance">
            Scouts sin seguro medico
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default Main;
