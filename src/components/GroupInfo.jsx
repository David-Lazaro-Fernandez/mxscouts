import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import InfoBar from "./InfoBar";
const GroupInfo = (props) => {
  const {
    titulo,
    subtitulo,
    escudo,
    activo,
    imagenFondo2,
    matches
  } = props;
  return (
    <div style={{ height: "650px" }}>
      <Grid container spacing={0} style={{ height: "100%" }}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Container>
            <Typography
              variant="h4"
              style={{
                color: "#2E2270",
                fontWeight: "bold",
                margin: "50px 0px 50px 0px",
              }}
            >
              {titulo}
            </Typography>
            <Typography
              variant="h5"
              style={{
                color: "#2E2270",
                fontWeight: "300",
                margin: "0px 0px 30px 0px",
              }}
            >
              {subtitulo}
            </Typography>
            <Grid container spacing={0} style={{ marginTop: "20px" }}>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    backgroundColor: "#2E2270",
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <img
                    src={escudo}
                    alt="escudo"
                    style={{ width: "80%", height: "80%" }}
                  />
                </div>
                <Typography
                  variant="h5"
                  style={{
                    color: "#2E2270",
                    fontWeight: "300",
                    textAlign: "center",
                  }}
                >
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
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#2E2270",
                    width: "100px",
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {activo == 1 ? (
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Grupos%2Fcheck.png?alt=media&token=2cefc4fd-eb0f-4138-baff-532fca3424da"
                      style={{
                        width: "80%",
                        filter:
                          "invert(100%) sepia(100%) saturate(0%) hue-rotate(203deg) brightness(104%) contrast(104%)",
                      }}
                    />
                  ) : (
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Grupos%2Fx.png?alt=media&token=fa633732-9235-4268-9b6c-524366473bba"
                      style={{
                        width: "80%",
                        filter:
                          "invert(100%) sepia(100%) saturate(0%) hue-rotate(203deg) brightness(104%) contrast(104%)",
                      }}
                    />
                  )}
                </div>
                <Typography
                  variant="h5"
                  style={{
                    color: "#2E2270",
                    textAlign: "center",
                    fontWeight: "300",
                  }}
                >
                  Actualmente activo
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <img
            src={imagenFondo2}
            style={{ width: "100%", height: `${matches ? '600px': '200px'}`, objectFit: "cover" }}
          />
        </Grid>
      </Grid>

    </div>
  );
};

export default GroupInfo;
