//React Imports
import React from "react";
//Third Party Libraries
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Footer = () => {
  //Styles
  const wrapper = { width: "100%", backgroundColor: "#E7E4FA" };
  const mainContainer = { marginTop: "50px", paddingBot: "50px" };
  const itemWrapper = { display: "flex", justifyContent: "center" };
  const itemWrapperStart = { display: "flex", justifyContent: "flex-start" };
  const title = {
    width: "80%",
    color: "#2E2270",
    fontFamily: "Roboto",
    textDecoration: "underline",
  };
  const paragraph = {
    width: "80%",
    color: "#2E2270",
    fontFamily: "Roboto",
    lineHeight: "19px",
  };
  const underlineList = {
    width: "80%",
    color: "#2E2270",
    marginLeft: "25px",
    fontFamily: "Roboto",
    lineHeight: "33px",
    textDecoration: "underline",
  };
  const link = { color: "#2E2270" };
  const icon = {
    width: "25px",
    marginRight: "10px",
    filter:
      "invert(17%) sepia(21%) saturate(4315%) hue-rotate(228deg) brightness(92%) contrast(105%)",
  };
  const socialIcon = {
    width: "50px",
    filter:
      "invert(17%) sepia(21%) saturate(4315%) hue-rotate(228deg) brightness(92%) contrast(105%)",
  };
  const phone = { textDecoration: "underline", color: "#2E2270" };
  const socialMedia = { color: "#2E2270", fontFamily: "Roboto" };
  return (
    <div style={wrapper}>
      <Container>
        <Grid
          container
          spacing={3}
          justifycontent="center"
          direction="row"
          alignitems="center"
          style={mainContainer}
        >
          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item style={itemWrapper}>
                <h3 style={title}>
                  Asociación De Grupos De Scouts De México A.C
                </h3>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item style={itemWrapper}>
                <p style={paragraph}>
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
                style={itemWrapper}
              >
                <h3 style={title}>FAQ</h3>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item style={itemWrapper}>
                <ul style={underlineList}>
                  <a href="#faq" style={link}>
                    <li key="1">¿Qué son los Scouts?</li>
                  </a>
                  <a href="#faq" style={link}>
                    <li key="2">¿Cómo puedo convertirme en uno?</li>
                  </a>
                  <a href="#faq" style={link}>
                    <li key="3">¿Qué es una tropa?</li>
                  </a>
                  <a href="#faq" style={link}>
                    <li key="4">¿Cómo puedo unirme a una tropa?</li>
                  </a>
                  <a href="#faq" style={link}>
                    <li key="5">¿Ser un Scout cuesta dinero?</li>
                  </a>
                  <a href="#faq" style={link}>
                    <li key="6">¿Qué implica ser un Scout?</li>
                  </a>
                  <a href="#faq" style={link}>
                    <li key="7">¿Cada cuanto hacen actividades?</li>
                  </a>
                  <a href="#faq" style={link}>
                    <li key="8">¿Cómo puedo apoyar a los Scouts?</li>
                  </a>
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
                style={itemWrapper}
              >
                <h3 style={title}>Enlaces</h3>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item style={itemWrapper}>
                <ul style={underlineList}>
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
              <Grid item style={itemWrapper}>
                <h3 style={title}>Contacto</h3>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item style={itemWrapper}>
                <span>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/phone.png?alt=media&token=f9ad2474-c172-4bdf-b100-c4a8b479b612"
                    style={icon}
                    alt="Telefono"
                  />
                </span>
                <a href="tel:+52-555-555-5555" style={phone}>
                  {" "}
                  +52 555 555 5555
                </a>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item style={itemWrapper}>
                <span>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/mail.png?alt=media&token=6750afb3-9f81-42d9-9a69-0539372e4842"
                    style={icon}
                    alt="Correo"
                  />
                </span>
                <a style={phone} href="mailto:agscm@gmail.org.mx">
                  {" "}
                  agscm@gmail.org.mx
                </a>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item style={itemWrapper}>
                <h3 style={socialMedia}>Redes Sociales</h3>
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
                style={itemWrapperStart}
              >
                <a
                  href="https://www.facebook.com/ags.scouts/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/fb.png?alt=media&token=67763eac-1ce1-417a-8c2e-34beaa194f5f"
                    style={socialIcon}
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
                style={itemWrapperStart}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/tiktok.png?alt=media&token=f6013be2-8209-47ff-9509-dc98f0686a83"
                  alt="logo de tiktok"
                  style={socialIcon}
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
                <a
                  href="https://www.flickr.com/photos/agsmac/albums"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/flickr.png?alt=media&token=1f5899c6-5d16-4a44-be46-223ac249ee94"
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
                src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/scout%20logo.png?alt=media&token=b1b6eb96-3b89-46a9-b193-564d81a91028"
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
