import { useState, useRef } from "react";
import { Grid, Container, Slide, Modal } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import ScoutCard from "./components/ScoutCard";
import CoolButton from "./components/CoolButton";
import CoolLink from "./components/CoolLink";
import FAQ from "./components/FAQ";
import Footer from "././components/Footer";
import { TikTok } from "react-tiktok";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import credentials from "./credentials";
import FAQS from "./FAQS";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [FAQCards, setFAQCards] = useState([
    FAQS.map((item) => (
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <FAQ
          image={item.image}
          icon={item.icon}
          question={item.question}
          answer={item.answer}
        />
      </Grid>
    )),
  ]);

  //Media Query
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const containerRef = useRef(null);

  //Map Customization
  const [mapZoom, setMapZoom] = useState(8);
  const [coordinates, setCoordinates] = useState({
    lat: 20.036159135066864,
    lng: -99.5750629360116,
  });
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: credentials.mapKey,
  });

  const containerStyle = {
    width: "100%",
    height: "500px",
    borderRadius: "0px",
    border: "0px",
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <Container maxWidth="lg" style={{ marginTop: "40px" }}>
        <Grid container spacing={3}>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: `${matches ? "flex-start" : "center"}`,
            }}
          >
            <img src="/img/Logo.png" alt="AGSMAC Logo" />
          </Grid>

          <Grid item xl={3} lg={3} md={3} sm={3} xs={3}></Grid>

          <Grid
            item
            xl={5}
            lg={5}
            md={5}
            sm={5}
            xs={5}
            style={{
              display: `${matches ? "flex" : "none"}`,
            }}
          >
            <Grid
              container
              spacing={2}
              direction="row"
              alignItems="center"
              justify="flex-end"
            >
              <Grid
                item
                xl={6}
                style={{
                  display: "flex",
                  direction: "row",
                  justifyContent: "flex-end",
                }}
              >
                <CoolButton
                  type="secondary"
                  text="Mapa"
                  width="225"
                  height="60"
                />
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={6}
                xs={6}
                style={{
                  display: "flex",
                  direction: "row",
                  justifyContent: "flex-end",
                }}
              >
                <CoolButton
                  type="primary"
                  text="Ingresar"
                  width="225"
                  height="60"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: "25px" }}>
          <Grid item xl={5} lg={5} md={5} sm={12}>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-end"
            >
              <Grid
                item
                xl={9}
                lg={9}
                md={9}
                sm={12}
                xs={12}
                ref={containerRef}
              >
                <Slide
                  direction="right"
                  appear="true"
                  container={containerRef.current}
                  in={true}
                >
                  <h1
                    style={{
                      color: "#2E2270",
                      fontFamily: "Roboto",
                      fontWeight: "900",
                      fontSize: "56px",
                      textAlign: `${matches ? "left" : "center"}`,
                    }}
                  >
                    {" "}
                    Jovenes Construyendo Un Mejor México
                  </h1>
                </Slide>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid
                item
                xl={8}
                lg={8}
                md={8}
                sm={12}
                xs={12}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: `${matches ? "flex-start" : "center"}`,
                }}
              >
                <CoolButton type="secondary" text="Conoce más" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={7} lg={7} md={7} sm={12}>
            <img
              src="https://lh3.googleusercontent.com/sF3ShmUrodLBbvD8_dSg3u7vTsNq7RUmZ2xmoOWV34wjg_FYJKX--MQtuKSZVxenQyjQgbdTmqNQeOYKI8YRxva_WVUMvx6c9-TPDMZ8WQH0tWBJOKHI0Ze48941pUKh11g4xwEgvgZ-8Aa1jNyQhxA8ozOGXYEN-ab1yTnVhPVlGS8ppEx1qZBNaByrLmHlHZ5zdzJhHBilW2MjLe2X5GZQd7p4VNU40DgYV8FnDuxKXtyk5QokV2qZph14BymSvc8usNwsp-HIzME5Kmz1ZhuqJoLB_7SPlxkoTcvI0pvzngQr4yZg5WsHn754yfVU0VaHgDcDSL1_IMuxjJXTsM7iYy0_32IOVFb9d0O2U746-ctBuqH1xNdydORURvpx_diS8H4tyaRD51GwwolX5hGvzXS5GPsgMGabqGqWmBEC0UZ1f8YwA1LKnlQU-1XOxXA_JyxMZuA8k4oly1_cF29ILFNDg2Xh8J6rPbXjt5vNAM78qlu-FrBkGObaVeH_iyIoEamDfDsXXnJ9_xbN_rROMsio1crHnJ44GohH3DIBPFIer7-pLLgW-U5cOgFKaVeiW2bxACDW_DNS9LPGUkuWNe29LR5NXnULxz0PcJ9sldXhipzmCY8BLE2dBv5hri0ilr1OZZ7nl7wxYo2IgAFwWFokE3Ptq1HGu-7bBtryunNmHQWn1D1S6o2vzFuP0hnve1gEEK76NwbcZA3n5dpf=w1174-h880-no?authuser=6"
              style={{
                width: "100%",
                objectFit: "none",
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <h1
              style={{
                textAlign: "center",
                color: "#2E2270",
              }}
            >
              Multiples tropas, una sola misión
            </h1>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <ScoutCard
              image="/img/Castores.png"
              name="Colonia de Castores"
              borders="986400"
              background="C0A062"
              fontColor="FAFAFA"
            />
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <ScoutCard
              image="/img/Gacelas.png"
              name="Manada de Gacelas"
              borders="DA251D"
              background="FFF500"
              fontColor="DA251D"
            />
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <ScoutCard
              image="/img/Clan Percusores.png"
              name="Clan de Percusoras"
              borders="DA251D"
              background="FAFAFA"
              fontColor="DA251D"
            />
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <ScoutCard
              image="/img/Clan Robers.png"
              name="Clan de Robers"
              borders="DA251D"
              background="FAFAFA"
              fontColor="DA251D"
            />
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <ScoutCard
              image="/img/Manada de lobos.png"
              name="Manada de Lobos"
              borders="230E6F"
              background="FFF500"
              fontColor="230E6F"
            />
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <ScoutCard
              image="/img/Tropa scout.png"
              name="Tropa Scout"
              borders="B9DC7D"
              background="1F4C3E"
              fontColor="B9DC7D"
            />
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <ScoutCard
              image="/img/Tropa mujeres.png"
              name="Tropa De Muchachas"
              borders="B9DC7D"
              background="1F4C3E"
              fontColor="B9DC7D"
            />
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <ScoutCard
              image="/img/Scouters.png"
              name="Scouters y Dirigentes"
              borders="FAFAFA"
              background="000000"
              fontColor="FAFAFA"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: "10px" }}>
          <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
            <CoolLink
              image="/img/expediciones.jpg"
              text="Expediciones"
              height="460"
              transparency="0.5"
              href=""
            />
          </Grid>
          <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <CoolLink
                  image="/img/campamentos.jpg"
                  text="Campamentos"
                  height="220"
                  transparency="0.5"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: "1px" }}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <CoolLink
                  image="/img/cursos.jpg"
                  text="Cursos de inducción"
                  height="220"
                  transparency="0.5"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: "1px" }}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <a href="https://www.flickr.com/photos/agsmac/albums">
              <CoolLink
                image="/img/libro.jpg"
                text="El libro de oro"
                height="280"
                transparency="0.75"
                style={{
                  backgroundSize: "contain !important",
                }}
                withIcon="True"
                icon="/img/libroblanco.png"
              />
            </a>
          </Grid>
        </Grid>

        <Grid container spacing={0} style={{ marginTop: "25px" }}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={coordinates}
            zoom={mapZoom}
          ></GoogleMap>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: "25px" }}>
          <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <CoolLink
                  image="/img/Irally.png"
                  text="I rally Virtual"
                  height="220"
                  transparency="0.5"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: "25px" }}>
              <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                <CoolLink
                  image="/img/concuscout.jpg"
                  text="Concuscout"
                  height="220"
                  transparency="0.5"
                />
              </Grid>
              <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                <CoolLink
                  image="/img/canciones.png"
                  text="Canciones"
                  height="220"
                  transparency="0.5"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
            <CoolLink
              image="/img/caminatas.jpg"
              text="Caminatas"
              height="485"
              transparency="0.5"
            />
          </Grid>
          <Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <CoolLink
                  image="/img/Aguilas.jpg"
                  text="Aguílas"
                  height="75"
                  transparency="0.5"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <CoolLink
                  image="/img/ardillas.webp"
                  text="Ardillas"
                  height="75"
                  transparency="0.5"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <CoolLink
                  image="/img/apus.webp.jpg"
                  text="Apus"
                  height="75"
                  transparency="0.5"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <CoolLink
                  image="/img/andromeda.jpg"
                  text="Andromeda"
                  height="75"
                  transparency="0.5"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <CoolLink
                  image="/img/acuario.jpg"
                  text="Acuario"
                  height="75"
                  transparency="0.5"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: "25px" }}>
          <Grid container spacing={3}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <h1
                style={{
                  textAlign: "center",
                  color: "#2E2270",
                }}
              >
                Preguntas frecuentes
              </h1>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: "25px" }}>
          {FAQCards}
        </Grid>

        <Grid container spacing={2} style={{ marginTop: "25px" }}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <h1
              style={{
                color: "#2E2270",
                fontFamily: "Roboto",
                textAlign: "center",
              }}
            >
              Síguenos en nuestras redes sociales
            </h1>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: "25px" }}>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <TikTok url="https://www.tiktok.com/@arely.zt/video/7030548949027048709?is_from_webapp=1&sender_device=pc&web_id6979447043030877701" />
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <TikTok url="https://www.tiktok.com/@yiss_salazar/video/6903614915764931841?is_from_webapp=1&sender_device=pc&web_id6979447043030877701" />
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <TikTok url="https://www.tiktok.com/@_sabicarrillo_/video/6912173152307121413?is_from_webapp=1&sender_device=pc&web_id6979447043030877701" />
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: "25px" }}>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <div
              style={{
                backgroundColor: "#E7E4FA",
                textAlign: "center",
                color: "#2E2270",
              }}
            >
              <h1>#AGSMAC</h1>
            </div>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <div
              style={{
                backgroundColor: "#E7E4FA",
                textAlign: "center",
                color: "#2E2270",
              }}
            >
              <h1>#ScoutsMéxico</h1>
            </div>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <div
              style={{
                backgroundColor: "#E7E4FA",
                textAlign: "center",
                color: "#2E2270",
              }}
            >
              <h1>#ScoutMe</h1>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
          spacing={2}
          style={{ marginTop: "25px" }}
        >
          <Grid
            item
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="/img/fb.png"
              alt="logo"
              style={{
                width: "50px",
                filter:
                  "invert(17%) sepia(21%) saturate(4315%) hue-rotate(228deg) brightness(92%) contrast(105%)",
              }}
            />
          </Grid>
          <Grid
            item
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="/img/tiktok.png"
              alt="logo"
              style={{
                width: "50px",
                filter:
                  "invert(17%) sepia(21%) saturate(4315%) hue-rotate(228deg) brightness(92%) contrast(105%)",
              }}
            />
          </Grid>
          <Grid
            item
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="/img/youtube.png"
              alt="logo"
              style={{
                width: "50px",
                filter:
                  "invert(17%) sepia(21%) saturate(4315%) hue-rotate(228deg) brightness(92%) contrast(105%)",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
          spacing={2}
          style={{ marginTop: "25px" }}
        >
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
              src="/img/top flowers.png"
              alt="logo"
              style={{ width: "75%" }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: "25px" }}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Grid
              container
              spacing={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "45px",
              }}
            >
              <h1
                style={{
                  fontSize: "50px",
                  color: "#2E2270",
                  textAlign: "center",
                }}
              >
                ¡Unete a la tropa!
              </h1>
            </Grid>
            <Grid
              container
              spacing={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CoolButton
                  type="secondary"
                  text="Vuelvete un Scout"
                  width="300"
                  height="80"
                  style={{ marginBottom: "10px" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <img src="/img/unete.png" alt="logo" style={{ width: "100%" }} />
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
              src="/img/bot flowers.png"
              alt="logo"
              style={{ width: "75%" }}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
