import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CoolLink from "../components/CoolLink";
import { Typography, Container, Grid } from "@mui/material";
import infoGrupos from "../infoGrupos";
import Footer from '../components/Footer'
import GroupInfo from "../components/GroupInfo";
const GroupsPage = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Grid
          container
          spacing={0}
          style={{ marginTop: "150px", marginBottom: "50px" }}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <h1 style={{textAlign:'center', color:'#2E2270', fontSize:'48px'}}>
              Conoce a los grupos en México
            </h1>
          </Grid>
        </Grid>

        {infoGrupos.map((grupo) => {
          return (
            <div>
              <Grid container spacing={0} style={{marginTop:'50px'}}>
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
                horario = {grupo.horario}
                dias = {grupo.diasDeactividad}
                ubicacion = {grupo.ubicación}
              />

            </div>
          );
        })}
        
      </Container>
      <Footer style={{marginTop:'350px'}}/>
    </div>
  );
};

export default GroupsPage;
