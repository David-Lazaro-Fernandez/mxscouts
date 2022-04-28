//React imports
import React from "react";
//Third Party Libraries
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Progresion = (props) => {
  const { tropasArray, numero } = props;
  const tropa = tropasArray[0];

  const adelantoProgresivo = tropa[numero].adelantoProgresivo;
  const insigniaMaxima = tropa[numero].insigniaMaxima;
  const nombreInsigniaMaxima = tropa[numero].nombreInsigniaMaxima;
  const rangosIconos = tropa[numero].rangosIconos;
  const rangos = tropa[numero].rangos;
  const especialidades = tropa[numero].especialidades;
  const especialidadesIconos = tropa[numero].especialidadesIconos;

  const arrayRangosIconos = [];
  const arrayRangos = [];
  const arrayEspecialidadesIconos = [];
  const arrayEspecialidades = [];
  let i = 0;
  for (const icono in rangosIconos) {
    arrayRangosIconos.push(
      <img
        src={rangosIconos[icono]}
        style={{ width: "60px" }}
        alt={`Imagen de rango ${i}`}
      />
    );
    i++;
  }
  for (const rango in rangos) {
    arrayRangos.push(
      <p key={i} style={{ color: "#2E2270", textAlign: "center" }}>
        {rangos[rango]}
      </p>
    );
    i++;
  }
  for (const icono in especialidadesIconos) {
    arrayEspecialidadesIconos.push(
      <img src={especialidadesIconos[icono]} style={{ width: "60px" }} />
    );
  }
  for (const especialidad in especialidades) {
    arrayEspecialidades.push(
      <p style={{ color: "#2E2270", textAlign: "center" }}>
        {especialidades[especialidad]}
      </p>
    );
    i++;
  }

  //Styles
  const wrapper = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "0px",
  };
  const adelantoProg = { textAlign: "center", color: "#2E2270" };
  const insigniaMax = {
    textAlign: "center",
    color: "#2E2270",
    fontSize: "28px",
  };
  const insigniaName = { textAlign: "center", color: "#2E2270" };
  const rangosTitle = { textAlign: "center", color: "#2E2270" };
  const rangosWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
    marginTop: "20px",
  };
  const especialidadesTitle = { textAlign: "center", color: "#2E2270" };

  return (
    <div>
      <Container fixed>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <p style={adelantoProg}>{adelantoProgresivo}</p>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={wrapper}>
            <h3 style={insigniaMax}>Insignia Máxima</h3>
            <h2 style={insigniaName}>{nombreInsigniaMaxima}</h2>
            <img
              src={insigniaMaxima}
              widt="150px"
              alt="Imagen de la insignia máxima"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <h2 style={rangosTitle}>Rangos</h2>
            {arrayRangos.map((element, index) => {
              return (
                <div key={index} style={rangosWrapper}>
                  <div style={{ marginRight: "25px" }}>{element}</div>
                  {arrayRangosIconos[index]}
                </div>
              );
            })}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h2 style={especialidadesTitle}>Especialidades</h2>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {arrayEspecialidades.map((element, index) => {
              return (
                <div key={index} style={rangosWrapper}>
                  <div style={{ marginRight: "25px" }}>{element}</div>
                  {arrayEspecialidadesIconos[index]}
                </div>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Progresion;
