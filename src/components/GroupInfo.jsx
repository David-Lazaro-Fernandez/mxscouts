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
    horario,
    dias,
    ubicacion,
  } = props;
  return (
    <div style={{ height: "650px" }}>
      <Grid container spacing={0} style={{ height: "100%" }}>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
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
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <img
            src={imagenFondo2}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "90%",
              height: "150px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              display: "flex",
            }}
          >
            {/*Horario*/}
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                marginLeft: "10px",
              }}
            >
              <Grid
                container
                spacing={3}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Grupos%2Fwatch.png?alt=media&token=f66075be-1d35-4130-a12b-f5eb9768b0ca"
                    style={{
                      width: "100%",
                      filter:
                        "invert(18%) sepia(15%) saturate(7317%) hue-rotate(233deg) brightness(84%) contrast(102%)",
                    }}
                    alt="watch icon"
                  />
                </Grid>
                <Grid
                  item
                  xs={9}
                  sm={9}
                  md={9}
                  lg={9}
                  xl={9}
                  style={{
                    displaY: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4 style={{ color: "#898989", margin: "0px" }}>Horario</h4>
                  <h3
                    style={{
                      color: "#2E2270",
                      margin: "0px",
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    {horario}
                  </h3>
                </Grid>
              </Grid>
            </Grid>

            {/*Dias de actividad*/}
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                marginLeft: "10px",
              }}
            >
              <Grid
                container
                spacing={3}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Grupos%2Fcalendar%20(1).png?alt=media&token=110c33d0-240d-449e-b471-e79eed8c37ba"
                    style={{
                      width: "100%",
                      filter:
                        "invert(18%) sepia(15%) saturate(7317%) hue-rotate(233deg) brightness(84%) contrast(102%)",
                    }}
                    alt="calendar icon"
                  />
                </Grid>
                <Grid
                  item
                  xs={9}
                  sm={9}
                  md={9}
                  lg={9}
                  xl={9}
                  style={{
                    displaY: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4 style={{ color: "#898989", margin: "0px" }}>
                    Días de actividad
                  </h4>
                  <h3
                    style={{
                      color: "#2E2270",
                      margin: "0px",
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    {dias}
                  </h3>
                </Grid>
              </Grid>
            </Grid>

            {/*Contacto*/}
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                marginLeft: "10px",
              }}
            >
              <Grid
                container
                spacing={3}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Grupos%2Fuser-location.png?alt=media&token=469bd5ae-43a5-499f-b3b9-5877c2d9d2f8"
                    style={{
                      width: "100%",
                      filter:
                        "invert(18%) sepia(15%) saturate(7317%) hue-rotate(233deg) brightness(84%) contrast(102%)",
                    }}
                    alt="Contact icon"
                  />
                </Grid>
                <Grid
                  item
                  xs={9}
                  sm={9}
                  md={9}
                  lg={9}
                  xl={9}
                  style={{
                    displaY: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4 style={{ color: "#898989", margin: "0px" }}>Contacto</h4>
                  <h3
                    style={{
                      color: "#2E2270",
                      margin: "0px",
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    contacto@agsmac.org
                  </h3>
                </Grid>
              </Grid>
            </Grid>

            {/*Ubicación*/}
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                marginLeft: "10px",
              }}
            >
              <Grid
                container
                spacing={3}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Grupos%2Flocation-pin.png?alt=media&token=597f16eb-31e1-499b-8cdf-77857f0eb2b0"
                    style={{
                      width: "100%",
                      filter:
                        "invert(18%) sepia(15%) saturate(7317%) hue-rotate(233deg) brightness(84%) contrast(102%)",
                    }}
                    alt="Location icon"
                  />
                </Grid>
                <Grid
                  item
                  xs={9}
                  sm={9}
                  md={9}
                  lg={9}
                  xl={9}
                  style={{
                    displaY: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4 style={{ color: "#898989", margin: "0px" }}>Ubicación</h4>
                  <h3
                    style={{
                      color: "#2E2270",
                      margin: "0px",
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    {ubicacion}
                  </h3>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default GroupInfo;
