import React from 'react';
import {Box, Grid} from '@mui/material';
const InfoBar = () =>{
    return(
        <div>
            <Box
            sx={{
              width: "80%",
              height: "150px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
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
                height:'100%',
                marginLeft:'10px'
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
                    style={{ width: "100%", filter:'invert(18%) sepia(15%) saturate(7317%) hue-rotate(233deg) brightness(84%) contrast(102%)' }}
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
                  <h3 style={{color:'#898989'}}>Horario</h3>
                  <h4 style={{color:'#2E2270'}}>9:00 - 13:00 H</h4>
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
                height:'100%',
                marginLeft:'10px'
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
                    style={{ width: "100%", filter:'invert(18%) sepia(15%) saturate(7317%) hue-rotate(233deg) brightness(84%) contrast(102%)' }}
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
                  <h3 style={{color:'#898989'}}>Días de actividad</h3>
                  <h4 style={{color:'#2E2270'}}>Sábados</h4>
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
                height:'100%',
                marginLeft:'10px'
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
                    style={{ width: "100%", filter:'invert(18%) sepia(15%) saturate(7317%) hue-rotate(233deg) brightness(84%) contrast(102%)' }}
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
                  <h3 style={{color:'#898989'}}>Contacto</h3>
                  <h4 style={{color:'#2E2270'}}>contacto@agsmac.org</h4>
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
                height:'100%',
                marginLeft:'10px'
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
                    style={{ width: "100%", filter:'invert(18%) sepia(15%) saturate(7317%) hue-rotate(233deg) brightness(84%) contrast(102%)' }}
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
                  <h3 style={{color:'#898989'}}>Ubicación</h3>
                  <h4 style={{color:'#2E2270'}}>Tercero de Cobián Centro, 27000 Torreón, Coah.</h4>
                </Grid>
              </Grid>
            </Grid>
            
          </Box>
        </div>
    );
}

export default InfoBar;