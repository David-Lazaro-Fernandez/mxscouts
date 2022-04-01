import React from "react";
import {Button, Grid} from '@mui/material'
const buttonStyle = { backgroundColor: "white", color: "#2E2270", width:'100%', height:'100px', fontSize:'20px' };

const Main = () => {
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
          <Button sx={buttonStyle} href='/Admin/tables/scouts22'>Scouts 2022</Button>
        </Grid>
        <Grid item xl={6} lg={6}>
          <Button sx={buttonStyle} href="/admin/tables/activities22">Actividades 2022</Button>
        </Grid>
        <Grid item xl={6} lg={6}>
          <Button sx={buttonStyle}>Scouts 2021</Button>
        </Grid>
        <Grid item xl={6} lg={6}>
          <Button sx={buttonStyle}>Scouts 2020</Button>
        </Grid>
        <Grid item xl={6} lg={6}>
          <Button sx={buttonStyle}>Scouts 2019</Button>
        </Grid>
        <Grid item xl={6} lg={6}>
          <Button sx={buttonStyle}>Scouts 2018</Button>
        </Grid>

      </Grid>
    </>
  );
};
export default Main;
