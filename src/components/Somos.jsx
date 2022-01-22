import React from "react";
import { Grid, Container } from "@mui/material";

const Somos = (props) => {
  const { tropasArray, numero } = props;
  const tropa = tropasArray[0];
  const icono = tropa[numero].icono;
  const somosTitulo = tropa[numero].somosTitulo;
  const somosArray = tropa[numero].somos;
  const parrafos = somosArray[0];
  const parrafos2 = [];
  for (const par in parrafos) {
    parrafos2.push(<p style={{color:'#2E2270'}}>{parrafos[par]}</p>);
  }

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
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <img src={icono} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4 style={{ textAlign: "center", color:'#2E2270' }}>{somosTitulo}</h4>
            {parrafos2}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Somos;
