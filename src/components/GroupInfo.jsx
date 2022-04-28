//React Import
import React from "react";
//Third Party Libraries
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const GroupInfo = (props) => {
  const { titulo, subtitulo, escudo, activo, imagenFondo2, matches } = props;

  //Styles
  const mainWrapper = { height: "650px" };
  const fullHeight = { height: "100%" };
  const titleStyle = {
    color: "#2E2270",
    fontWeight: "bold",
    margin: "50px 0px 50px 0px",
  };
  const subtitleStyle = {
    color: "#2E2270",
    fontWeight: "300",
    margin: "0px 0px 30px 0px",
  };
  const wrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const leftWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "#2E2270",
    width: "100px",
    height: "100px",
  };
  const shieldStyle = { width: "80%", height: "80%" };
  const shieldTitleStyle = {
    color: "#2E2270",
    fontWeight: "300",
    textAlign: "center",
  };
  const groupWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const activeGroupWrapper = {
    borderRadius: "50%",
    backgroundColor: "#2E2270",
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const icon = {
    width: "80%",
    filter:
      "invert(100%) sepia(100%) saturate(0%) hue-rotate(203deg) brightness(104%) contrast(104%)",
  };
  const isActiveStyle = {
    color: "#2E2270",
    textAlign: "center",
    fontWeight: "300",
  };
  const groupHero = {
    width: "100%",
    height: `${matches ? "600px" : "300px"}`,
    objectFit: "cover",
  }
  return (
    <div style={mainWrapper}>
      <Grid container spacing={0} style={fullHeight}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Container>
            <Typography variant="h4" style={titleStyle}>
              {titulo}
            </Typography>
            <Typography variant="h5" style={subtitleStyle}>
              {subtitulo}
            </Typography>
            <Grid container spacing={0} style={{ marginTop: "20px" }}>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={wrapper}>
                <div style={leftWrapper}>
                  <img src={escudo} alt="escudo" style={shieldStyle} />
                </div>
                <Typography variant="h5" style={shieldTitleStyle}>
                  Escudo del grupo
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={groupWrapper}
              >
                <div style={activeGroupWrapper}>
                  {activo === 1 ? (
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Grupos%2Fcheck.png?alt=media&token=2cefc4fd-eb0f-4138-baff-532fca3424da"
                      style={icon}
                      alt="Active icon"
                    />
                  ) : (
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Grupos%2Fx.png?alt=media&token=fa633732-9235-4268-9b6c-524366473bba"
                      style={icon}
                      alt="Unactive icon"
                    />
                  )}
                </div>
                <Typography variant="h5" style={isActiveStyle}>
                  Actualmente activo
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <img
            src={imagenFondo2}
            style={groupHero}
            alt="An image of the particular scout group"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default GroupInfo;
