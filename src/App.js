import { useState, useRef, useEffect } from "react";
import {
  Grid,
  Container,
  Slide,
  Modal,
  Box,
  AppBar,
  Tabs,
  Tab,
  CircularProgress
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from '@mui/icons-material/Menu';

import ScoutCard from "./components/ScoutCard";
import CoolButton from "./components/CoolButton";
import CoolLink from "./components/CoolLink";
import FAQ from "./components/FAQ";
import Footer from "././components/Footer";
import Principios from "././components/Principios";
import Somos from "././components/Somos";
import Navbar from '././components/Navbar';
import { TikTok } from "react-tiktok";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import credentials from "./credentials";
import FAQS from "./FAQS";
import gruposScout from "./gruposScout";
import tropas from "./tropas";

function App() {
  const [numeroTropa, setNumeroTropa] = useState(0);
  const [tropasArray, setTropasArray] = useState([
    tropas.map((item) => ({
      nombre: item.nombre,
      icono: item.icono,
      promesa: item.promesa,
      oración: item.oración,
      ley: item.ley,
      normas: item.normas,
      somosTitulo: item.somosTitulo,
      somos: item.somos,
      adelantoProgresivo: item.adelantoProgresivo,
      insigniaMaxima: item.insigniaMaxima,
      rangos: item.rangos,
      especialidades: item.especialidades,
    })),
  ]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (value === undefined) {
      return;
    }
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (event, newIndex) => {
    setValue(newIndex);
  };

  const [FAQCards, setFAQCards] = useState([
    FAQS.map((item) => (
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <FAQ
          key={item.id}
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
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const containerRef = useRef(null);

  //Map Customization
  const [windowOpen, setWindowOpen] = useState(false);
  const [locations, setLocations] = useState([
    gruposScout.map((item) => (
      <Marker
        key={item.id}
        position={item.position}
        icon={item.escudo}
        onClick={() => {
          setWindowOpen(true);
        }}
      />
    )),
  ]);

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
  if (!isLoaded){
    return(
      <Grid container alignItems="center" direction="row" alignItems="center">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CircularProgress color="primary" size="600"/>
        </Grid>
      </Grid>
    );
  };
  

  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <Container maxWidth="lg" style={{ marginTop: "40px" }}>
        <Grid 
        container 
        spacing={0}
        >
          <Grid item xl={4} lg={4} md={4} sm={6} xs={6} style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src="/img/Logo.png" alt="AGSMAC Logo" />
          </Grid>

          <Grid item xl={4} lg={4} md={4} sm={6} xs={6} style={{display:`${matches ? 'none': 'flex'}`, justifyContent:'flex-end'}}>
            <button style={{border:'0px', backgroundColor:'#e7e4fa', borderRadius:'10px', width:'100px'}}>
              <MenuIcon sx={{color:'#2e2270'}} fontSize='large'/>
            </button>
          </Grid>

          <Grid item xl={1} lg={1} md={1} sm={1} xs={1}></Grid>

          <Grid
            item
            xl={7}
            lg={7}
            md={7}
            sm={7}
            xs={7}
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
                <CoolButton type="secondary" text="Mapa" width="160" height="60" />
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
                  width="160"
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
                <a href="#links">
                  <CoolButton type="secondary" text="Conoce más" />
                </a>
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
              alt="Grupo de Scouts sentados, posando para la foto"
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
            <button
              onClick={() => {
                setNumeroTropa(0);
                handleOpen();
              }}
              style={{
                width: "100%",
                backgroundColor: "#C0A062",
                border: "2px solid #986400",
                borderRadius: "10px",
                color: "#FAFAFA",
              }}
            >
              <ScoutCard
                image="/img/Castores.png"
                name="Colonia de Castores"
                background="C0A062"
                fontColor="FAFAFA"
              />
            </button>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <button
              onClick={() => {
                setNumeroTropa(1);
                handleOpen();
              }}
              style={{
                width: "100%",
                backgroundColor: "#FFF500",
                border: "2px solid #DA251D",
                borderRadius: "10px",
                color: "#DA251D",
              }}
            >
              <ScoutCard
                image="/img/Gacelas.png"
                name="Manada de Gacelas"
                background="FFF500"
                fontColor="DA251D"
              />
            </button>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <button
              onClick={() => {
                handleOpen();
                setNumeroTropa(2);
              }}
              style={{
                width: "100%",
                backgroundColor: "#FFF500",
                border: "2px solid #230E6F",
                borderRadius: "10px",
                color: "#230E6F",
              }}
            >
              <ScoutCard
                image="/img/Manada de lobos.png"
                name="Manada de Lobatos"
                background="FFF500"
                fontColor="230E6F"
              />
            </button>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <button
              onClick={() => {
                handleOpen();
                setNumeroTropa(3);
              }}
              style={{
                width: "100%",
                backgroundColor: "#1F4C3E",
                border: "2px solid #B9DC7D",
                borderRadius: "10px",
                color: "#B9DC7D",
              }}
            >
              <ScoutCard
                image="/img/Tropa scout.png"
                name="Tropa Scout"
                background="1F4C3E"
                fontColor="B9DC7D"
              />
            </button>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <button
              onClick={() => {
                handleOpen();
                setNumeroTropa(4);
              }}
              style={{
                width: "100%",
                backgroundColor: "#1F4C3E",
                border: "2px solid #B9DC7D",
                borderRadius: "10px",
                color: "#B9DC7D",
              }}
            >
              <ScoutCard
                image="/img/Tropa mujeres.png"
                name="Tropa De Muchachas"
                background="1F4C3E"
                fontColor="B9DC7D"
              />
            </button>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <button
              onClick={() => {
                handleOpen();
                setNumeroTropa(5);
              }}
              style={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                border: "2px solid #DA251D",
                borderRadius: "10px",
                color: "#DA251D",
              }}
            >
              <ScoutCard
                image="/img/Clan Robers.png"
                name="Clan de Robers"
                background="FFFFFF"
                fontColor="DA251D"
              />
            </button>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <button
              onClick={() => {
                handleOpen();
                setNumeroTropa(6);
              }}
              style={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                border: "2px solid #DA251D",
                borderRadius: "10px",
                color: "#DA251D",
              }}
            >
              <ScoutCard
                image="/img/Clan Percusores.png"
                name="Clan de Percusoras"
                background="FFFFFF"
                fontColor="DA251D"
              />
            </button>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <button
              onClick={() => {
                handleOpen();
                setNumeroTropa(7);
              }}
              style={{
                width: "100%",
                backgroundColor: "#000000",
                border: "2px solid #FAFAFA",
                borderRadius: "10px",
                color: "#FAFAFA",
              }}
            >
              <ScoutCard
                image="/img/Scouters.png"
                name="Scouters y Dirigentes"
                background="000000"
                fontColor="FAFAFA"
              />
            </button>
          </Grid>
        </Grid>

        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              border: "2px solid #ffffff",
              width: `${matches ? "500px" : "360px"}`,
              height: "500px",
              backgroundColor: "#FFFFFF",
              boxShadow: 24,
              overflow: "scroll",
            }}
          >
            <Grid container spacing={0}>
              <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{ backgroundColor: "#2E2270" }}
              >
                <h2
                  style={{
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "#2E2270",
                  }}
                >
                  {tropasArray[0][numeroTropa].nombre}
                </h2>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <AppBar position="static" color="default">
                  <Tabs
                    sx={{ backgroundColor: "#CAC6E8" }}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    centered
                  >
                    <Tab
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "500",
                        color: "#504979",
                      }}
                      label="PRINCIPIOS"
                      key="1"
                    />
                    <Tab
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "500",
                        color: "#504979",
                      }}
                      label="¿QUIENES SOMOS?"
                      key="2"
                    />
                    <Tab
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "500",
                        color: "#504979",
                      }}
                      label="PROGRESIÓN"
                      key="3"
                    />
                  </Tabs>
                </AppBar>
                {value === 0 && (
                  <Principios tropasArray={tropasArray} numero={numeroTropa} />
                )}
                {value === 1 && (
                  <Somos tropasArray={tropasArray} numero={numeroTropa} />
                )}
              </Grid>
            </Grid>
            <Grid container spacing={0}></Grid>
          </Box>
        </Modal>

        <Grid container spacing={2} style={{ marginTop: "10px" }} id="links">
          <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
            <a
              href="https://www.flickr.com/photos/agsmac/albums/72157685077451745"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <CoolLink
                image="/img/expediciones.jpg"
                text="Expediciones"
                height="460"
                transparency="0.5"
                href=""
              />
            </a>
          </Grid>
          <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <a
                  href="https://www.flickr.com/photos/agsmac/albums/72157682081487554"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <CoolLink
                    image="/img/campamentos.jpg"
                    text="Campamentos"
                    height="220"
                    transparency="0.5"
                  />
                </a>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: "1px" }}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <a
                  href="https://www.flickr.com/photos/agsmac/albums/72157682085083384"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <CoolLink
                    image="/img/cursos.jpg"
                    text="Cursos de inducción"
                    height="220"
                    transparency="0.5"
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: "1px" }}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <a
              href="https://www.flickr.com/photos/agsmac/albums"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
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
          >
            {locations}
          </GoogleMap>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: "25px" }}>
          <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <a
                  href="https://www.youtube.com/watch?v=CMrfrvLoRTo&list=PLEreM0tzBgO3Mczliyu2qTCeGnc4xqPvB"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none  " }}
                >
                  <CoolLink
                    image="/img/Irally.png"
                    text="I rally Virtual"
                    height="220"
                    transparency="0.5"
                  />
                </a>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: "25px" }}>
              <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                <a
                  href="https://www.youtube.com/watch?v=zoz-eqNDUZ0&list=PLEreM0tzBgO0-kE8AEoIV9SDoiwrjHPd3"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <CoolLink
                    image="/img/concuscout.jpg"
                    text="Concuscout"
                    height="220"
                    transparency="0.5"
                  />
                </a>
              </Grid>
              <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                <a
                  href="https://www.youtube.com/watch?v=qWcrUrZR8rM"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <CoolLink
                    image="/img/canciones.png"
                    text="Canciones"
                    height="220"
                    transparency="0.5"
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
            <a
              href="https://www.youtube.com/watch?v=kKNeanu-8OY&t=2s"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <CoolLink
                image="/img/caminatas.jpg"
                text="Caminatas"
                height="485"
                transparency="0.5"
              />
            </a>
          </Grid>
          <Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <a
                  href="https://www.youtube.com/watch?v=zf_IR47BUPI"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", objectPosition: "top" }}
                >
                  <CoolLink
                    image="/img/aguila.webp"
                    text="Aguílas"
                    height="75"
                    transparency="0.5"
                  />
                </a>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <a
                  href="https://www.youtube.com/watch?v=Ue52-JyFOAs"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <CoolLink
                    image="/img/ardillas.webp"
                    text="Ardillas"
                    height="75"
                    transparency="0.5"
                  />
                </a>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <a
                  href="https://www.youtube.com/watch?v=XQZ2pjhWXxs"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <CoolLink
                    image="/img/apus.jpg"
                    text="Apus"
                    height="75"
                    transparency="0.5"
                  />
                </a>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <a
                  href="https://www.youtube.com/watch?v=rwfbnLcvlxY"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <CoolLink
                    image="/img/andromeda.jpg"
                    text="Andromeda"
                    height="75"
                    transparency="0.5"
                  />
                </a>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <a
                  href="https://www.youtube.com/watch?v=zf_IR47BUPI"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <CoolLink
                    image="/img/acuario.jpg"
                    text="Acuario"
                    height="75"
                    transparency="0.5"
                  />
                </a>
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

        <Grid container spacing={2} style={{ marginTop: "25px" }} id="faq">
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
              <a
                href="https://www.tiktok.com/tag/scouts?referer_url=http%3A%2F%2Flocalhost%3A3000%2F&referer_video_id=7030548949027048709&refer=embed"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                <h1>#Scouts</h1>
              </a>
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
              <a
                href="https://www.tiktok.com/search?q=scoutsmexico&t=1642544998071"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                <h1>#ScoutsMéxico</h1>
              </a>
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
              <a
                href="https://www.tiktok.com/tag/campamento?referer_url=http%3A%2F%2Flocalhost%3A3000%2F&referer_video_id=6912173152307121413&refer=embed"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                <h1>#ScoutMe</h1>
              </a>
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
            <a
              href="https://www.facebook.com/ags.scouts/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/fb.png"
                alt="logo"
                style={{
                  width: "50px",
                  filter:
                    "invert(17%) sepia(21%) saturate(4315%) hue-rotate(228deg) brightness(92%) contrast(105%)",
                }}
                href="https://www.facebook.com/ags.scouts/"
              />
            </a>
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
            <a
              href="https://www.youtube.com/channel/UCyalbBV3m4uWD9SxwSPUbEw"
              target="_blank"
              rel="noreferrer"
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
            </a>
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
