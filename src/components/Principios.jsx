import React from "react";
import { Grid, Container } from "@mui/material";

const Principios = (props) => {
  const { tropasArray, numero } = props;
  const tropa = tropasArray[0];
  const ley = tropa[numero].ley;
  const normas = tropa[numero].normas;
  const oración = tropa[numero].oración;
  const promesa = tropa[numero].promesa;

  return (
    <div>
      <Container fixed>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            xl={8}
            lg={8}
            md={8}
            sm={8}
            xs={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <span>
              <img
                src="/img/ley.png"
                width="50"
                style={{ marginRight: "30px" }}
              />
            </span>
            <h4 style={{ color: "#2E2270" }}> Ley y Normas</h4>
          </Grid>
          <Grid
            item
            xl={8}
            lg={8}
            md={8}
            sm={8}
            xs={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#2E2270" }}>
              {ley}
            </p>
            <p style={{  color: "#2E2270" }}>
              {normas}
            </p>
          </Grid>

          <Grid
            item
            lg={8}
            md={8}
            xl={8}
            sm={8}
            xs={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>
              <img
                src="/img/oración.png"
                width="50"
                style={{ marginRight: "30px" }}
              />
            </span>
            <h4 style={{ color: "#2E2270" }}> Oración</h4>
          </Grid>
          <Grid
            item
            xl={8}
            lg={8}
            md={8}
            sm={8}
            xs={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#2E2270" }}>
              {oración}
            </p>
          </Grid>

          <Grid
            item
            xl={8}
            lg={8}
            md={8}
            sm={8}
            xs={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>
              <img
                src="/img/promesa.png"
                width="50"
                style={{ marginRight: "30px" }}
              />
            </span>
            <h4 style={{ color: "#2E2270" }}> Promesa</h4>
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            sm={8}
            xs={8}
            xl={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "0px",
            }}
          >
            <p style={{ color: "#2E2270" }}>
              {promesa}
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Principios;
