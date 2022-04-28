import React from "react";
//Local Components
import Navbar from "../components/Navbar";
import CoolLink from "../components/CoolLink";
import Footer from "../components/Footer";
import GroupInfo from "../components/GroupInfo";
import InfoBar from "../components/InfoBar";
import AccordionInfo from "../components/AccordionInfo";
//Material UI components
import { Container, Grid } from "@mui/material";
//Material UI Hooks
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
//JSON data
import infoGrupos from "../infoGrupos";

const GroupsPage = () => {
  //Media Query
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  //Styles
  const containerStyle = { marginBottom: "350px" };
  const wrapper = { marginTop: "150px", marginBottom: "50px" };
  const mainTitle = {
    textAlign: "center",
    color: "#2E2270",
    fontSize: "48px",
  };
  const infobarWrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div>
      <Container style={containerStyle}>
        <Navbar />
        <Grid container spacing={0} style={wrapper}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <h1 style={mainTitle}>Conoce a los grupos en México</h1>
          </Grid>
        </Grid>

        {infoGrupos.map((grupo) => {
          return (
            <div>
              <Grid container spacing={0} style={{ marginTop: "50px" }}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <CoolLink
                    image={grupo.imagenFondo}
                    text={`Grupo ${grupo.numero}`}
                    height="150"
                    transparency="0.75"
                    href=""
                  />
                </Grid>
              </Grid>
              <GroupInfo
                titulo={grupo.titulo}
                subtitulo={grupo.subtitulo}
                escudo={grupo.escudo}
                activo={grupo.activo}
                imagenFondo2={grupo.imagenFondo2}
                matches={matches}
              />
              <Grid container spacing={0} style={{ marginBottom: "100px" }}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  style={infobarWrapper}
                >
                  {matches ? (
                    <InfoBar
                      horario={grupo.horario}
                      dias={grupo.diasDeactividad}
                      ubicación={grupo.ubicación}
                      matches={matches}
                    />
                  ) : (
                    <AccordionInfo
                      horarios={grupo.horario}
                      días={grupo.diasDeactividad}
                      ubicación={grupo.ubicación}
                    />
                  )}
                </Grid>
              </Grid>
            </div>
          );
        })}
      </Container>
      <Footer />
    </div>
  );
};

export default GroupsPage;
