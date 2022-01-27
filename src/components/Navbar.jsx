import React from "react";
import { Grid, Container } from "@mui/material";
import CoolButton from "./CoolButton";

const Navbar = (props) => {
  const { matches } = props;
  return (
    <div style={{width:'100%'}}>
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <img src="/img/Logo.png" alt="AGSMAC Logo" />
      </Grid>

      <Grid item xl={1} lg={1} md={1} sm={1} xs={1}></Grid>

      <Grid
        item
        xl={5}
        lg={5}
        md={5}
        sm={5}
        xs={5}
        style={{
          display: `${matches ? "flex" : "none"}`,
        }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justify="flex-end"
        >
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            style={{
              display: "flex",
              direction: "row",
              justifyContent: "flex-end",
            }}
          >
            <CoolButton type="secondary" text="Mapa" width="160" height="60" />
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            style={{
              display: "flex",
              direction: "row",
              justifyContent: "flex-end",
            }}
          >
            <CoolButton
              type="primary"
              text="Ingresar"
              width="160"
              height="60"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
