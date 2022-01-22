import React from "react";
import { Grid, Container } from "@mui/material";

const Footer = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#E7E4FA" }}>
      <Container>
        <Grid
          container
          spacing={3}
          justifycontent="center"
          direction="row"
          alignitems="center"
          style={{ marginTop: "50px", paddingBot: "50px" }}
        >
          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item style={{ display: "flex", justifyContent: "center" }}>
                <h3
                  style={{
                    width: "80%",
                    color: "#2E2270",
                    fontFamily: "Roboto",
                    textDecoration: "underline",
                  }}
                >
                  Asociación De Grupos De Scouts De México A.C
                </h3>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item style={{ display: "flex", justifyContent: "center" }}>
                <p
                  style={{
                    width: "80%",
                    color: "#2E2270",
                    fontFamily: "Roboto",
                    lineHeight: "19px",
                  }}
                >
                  Fundada en 2006 con el objeto de coadyuvar en la formación del
                  caracter de niñ@s y jovenes, inculcandoles el cumplimiento de
                  sus deberes religiosos, patrióticos y cívicos; asi como
                  principios de disciplina, lealtad y ayuda al prójimo.
                  Capacitandolos para bastarse a si mismos, ayudándoles a
                  desarrollarse física, mental y espiritualmente; todo esto
                  conforme a los lineamientos que señalo el fundador del
                  movimiento scout Sir Robert Stephenson Smith Lord Baden Powell
                  of Gilwell.
                </p>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <h3
                  style={{
                    width: "80%",
                    color: "#2E2270",
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  FAQ
                </h3>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item style={{ display: "flex", justifyContent: "center" }}>
                <ul
                  style={{
                    width: "80%",
                    color: "#2E2270",
                    marginLeft: "25px",
                    fontFamily: "Roboto",
                    lineHeight: "33px",
                    textDecoration: "underline",
                  }}
                >
                  <a href="#faq" style={{color:'#2E2270'}}><li key="1">¿Qué son los Scouts?</li></a>
                  <a href="#faq" style={{color:'#2E2270'}}><li key="2">¿Cómo puedo convertirme en uno?</li></a>
                  <a href="#faq" style={{color:'#2E2270'}}><li key="3">¿Qué es una tropa?</li></a>
                  <a href="#faq" style={{color:'#2E2270'}}><li key="4">¿Cómo puedo unirme a una tropa?</li></a>
                  <a href="#faq" style={{color:'#2E2270'}}><li key="5">¿Ser un Scout cuesta dinero?</li></a>
                  <a href="#faq" style={{color:'#2E2270'}}><li key="6">¿Qué implica ser un Scout?</li></a>
                  <a href="#faq" style={{color:'#2E2270'}}><li key="7">¿Cada cuanto hacen actividades?</li></a>
                  <a href="#faq" style={{color:'#2E2270'}}><li key="8">¿Cómo puedo apoyar a los Scouts?</li></a>
                </ul>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <h3
                  style={{
                    width: "80%",
                    color: "#2E2270",
                    fontFamily: "Roboto",
                    textDecoration: "underline",
                  }}
                >
                  Enlaces
                </h3>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item style={{ display: "flex", justifyContent: "center" }}>
                <ul
                  style={{
                    width: "80%",
                    color: "#2E2270",
                    marginLeft: "25px",
                    fontFamily: "Roboto",
                    lineHeight: "33px",
                  }}
                >
                  <li key="1">Mi perfil de scout</li>
                  <li key="2">Mis insignias</li>
                  <li key="3">Conviertete en un Scout </li>
                  <li key="4">Encuentra tu tropa</li>
                  <li key="5">El libro de oro</li>
                </ul>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item style={{ display: "flex", justifyContent: "center" }}>
                <h3
                  style={{
                    width: "80%",
                    color: "#2E2270",
                    fontFamily: "Roboto",
                    textDecoration: "underline",
                  }}
                >
                  Contacto
                </h3>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item style={{ display: "flex", justifyContent: "center" }}>
                <span>
                  <img
                    src="/img/phone.png"
                    style={{
                      width: "25px",
                      marginRight: "10px",
                      filter:
                        "invert(17%) sepia(21%) saturate(4315%) hue-rotate(228deg) brightness(92%) contrast(105%)",
                    }}
                    alt="Telefono"
                  />
                </span>
                <a href="tel:+52-555-555-5555"> +52 555 555 5555</a>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item style={{ display: "flex", justifyContent: "center" }}>
                <span>
                  <img
                    src="/img/mail.png"
                    style={{
                      width: "25px",
                      marginRight: "10px",
                      filter:
                        "invert(17%) sepia(21%) saturate(4315%) hue-rotate(228deg) brightness(92%) contrast(105%)",
                    }}
                    alt="Correo"
                  />
                </span>
                <a href="mailto:agscm@gmail.org.mx"> agscm@gmail.org.mx</a>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item style={{ display: "flex", justifyContent: "center" }}>
                <h3 style={{ color: "#2E2270", fontFamily: "Roboto" }}>
                  Redes Sociales
                </h3>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid
                item
                xl={4}
                lg={4}
                md={4}
                sm={2}
                xs={2}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <a href="https://www.facebook.com/ags.scouts/" target="_blank" rel="noreferrer">
                  <img
                    src="/img/fb.png"
                    style={{
                      width: "50px",
                      filter:
                        "invert(17%) sepia(21%) saturate(4315%) hue-rotate(228deg) brightness(92%) contrast(105%)",
                    }}
                    alt="Logo de Facebook"
                  />
                </a>
              </Grid>
              <Grid
                item
                xl={4}
                lg={4}
                md={4}
                sm={2}
                xs={2}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <img
                  src="/img/tiktok.png"
                  alt="logo de tiktok"
                  style={{
                    width: "50px",
                    filter:
                      "invert(17%) sepia(21%) saturate(4315%) hue-rotate(228deg) brightness(92%) contrast(105%)",
                  }}
                />
              </Grid>
              <Grid
                item
                xl={4}
                lg={4}
                md={4}
                sm={2}
                xs={2}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <a href="https://www.flickr.com/photos/agsmac/albums" target="_blank" rel="noreferrer" >
                    <img
                    src="/img/flickr.png"
                    style={{ width: "50px" }}
                    alt="Logo de Flickr"
                    />
                </a>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{ marginTop: "25px" }}>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src="/img/scout logo.png"
                style={{ width: "70px" }}
                alt="Logo de los Scouts"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
