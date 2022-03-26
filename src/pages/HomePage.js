import { useState, useRef, useEffect } from "react";
//Material UI Components
import {
  Grid,
  Container,
  Slide,
  Modal,
  Box,
  AppBar,
  Tabs,
  Tab,
  CircularProgress,
} from "@mui/material";
//Material UI Hooks
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
//Material UI Icons
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DirectionsIcon from "@mui/icons-material/Directions";
//Custom Components
import ScoutCard from "../components/ScoutCard";
import CoolButton from "../components/CoolButton";
import CoolLink from "../components/CoolLink";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Principios from "../components/Principios";
import Somos from "../components/Somos";
import Progresion from "../components/Progresion";
import Cumpleaños from "../components/Cumpleaños";
import Pañoletas from '../components/Pañoletas';
import Navbar from "../components/Navbar";
//Tiktok fetch
import { TikTok } from "react-tiktok";
//Google Maps
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import credentials from "../credentials";
//Firebase
import {getBirthdayScouts} from "../firebase.config";
//Json's
import FAQS from "../FAQS";
import gruposScout from "../gruposScout";
import tropas from "../tropas";

function HomePage() {
  //Fetch Data from Firebase
  const [firebaseData, setFirebaseData] = useState([])
  const [fetched, setFetched] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getBirthdayScouts()
      querySnapshot.forEach(doc =>{
        setFirebaseData((prevData) => [...prevData, doc.data()])
      } )
      setFetched(true)
    };
    fetchData();
  },[]);
  
  const [nombres, setNombres] = useState([]);
  //State to handle the active marker on the map
  const [activeMarker, setActiveMarker] = useState(null);
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  //State to handle the selected Troop on the troops section
  const [numeroTropa, setNumeroTropa] = useState(0);
  //State that stores the troops info
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
      nombreInsigniaMaxima: item.nombreInsigniaMaxima,
      rangos: item.rangos,
      rangosIconos: item.rangosIconos,
      especialidades: item.especialidades,
      especialidadesIconos: item.especialidadesIconos,
    })),
  ]);
  //State to handle the infoWindow open and close
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
  //State to handle the selected tab on the Modal section
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (event, newIndex) => {
    setValue(newIndex);
  };
  //State to store the FAQ's info
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

  //Loading Map Handler
  if (loadError) return "Error loading maps";
  if (!isLoaded) {
    return (
      <Grid container alignItems="center" direction="row">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CircularProgress color="primary" size="600" />
        </Grid>
      </Grid>
    );
  }

  return (
      <div style={{ backgroundColor: "#F7F7F7" }}>
        <Container maxWidth="lg" style={{ marginTop: "40px" }}>
          <Navbar />
          <Grid container spacing={3} style={{ marginTop: "100px" }}>
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
            <Grid container 
            spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} style={{display:'flex', direction:'row', alignItems:'center', justifyContent:'center', marginBottom:'70px'}}>
                    <Pañoletas/>
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
                  image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Castores.png?alt=media&token=fe5bd83f-e98f-4522-b621-9db819fa3fbb"
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
                  image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Gacelas.png?alt=media&token=e70e0e22-5254-4254-ad2d-cd3a93d7ebe7"
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
                  image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Manada%20de%20lobos.png?alt=media&token=e654ee2a-1f31-4fc1-a92b-e1671eeaf33d"
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
                  image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Tropa%20Scout.png?alt=media&token=6aa26c73-570f-4973-8bbd-ba9d9c2c534f"
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
                  image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Tropa%20mujeres.png?alt=media&token=76893e7f-9775-424a-bb17-47e631fb4b9c"
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
                  image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Clan%20Robers.png?alt=media&token=c5564d43-9191-4421-bef8-6cf809fbf0bf"
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
                  image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Clan%20Percusores.png?alt=media&token=ebf1b6ac-1d50-46d0-bbbe-6a0d8cdc39b4"
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
                  image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Scouters.png?alt=media&token=3eb8a513-014b-4499-b4c1-6e4229625c50"
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
                    <Principios
                      tropasArray={tropasArray}
                      numero={numeroTropa}
                    />
                  )}
                  {value === 1 && (
                    <Somos tropasArray={tropasArray} numero={numeroTropa} />
                  )}
                  {value === 2 && (
                    <Progresion
                      tropasArray={tropasArray}
                      numero={numeroTropa}
                    />
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
                  image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/expediciones.jpg?alt=media&token=83ba5e0d-9b0c-422a-bc06-85d6cf91aa40"
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
                      image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/campamentos.jpg?alt=media&token=f0484816-343f-4287-a745-16c0e5531e1a"
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
                      image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/cursos.jpg?alt=media&token=fa9cf086-02f0-48b5-86e8-a350a0635594"
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
                  image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/libro.jpg?alt=media&token=f0612ab2-105a-4ff4-a307-30118867204a"
                  text="El libro de oro"
                  height="280"
                  transparency="0.75"
                  style={{
                    backgroundSize: "contain !important",
                  }}
                  withIcon="True"
                  icon="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/libroblanco.png?alt=media&token=1188bb56-aaa4-4939-8703-917e6f052b09"
                />
              </a>
            </Grid>
          </Grid>

          <Grid container spacing={0} style={{ marginTop: "25px" }}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={coordinates}
              zoom={mapZoom}
              onClick={() => setActiveMarker(null)}
            >
              {gruposScout.map(({ id, nombre, escudo, position, horarios }) => (
                <Marker
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                  icon={escudo}
                >
                  {activeMarker === id ? (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <h2>{nombre}</h2>
                        <p
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                          }}
                        >
                          <AccessTimeFilledIcon
                            sx={{ color: "#2e2270", marginRight: "10px" }}
                          />{" "}
                          {horarios}
                        </p>
                        <p
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                          }}
                        >
                          <PhoneIcon
                            sx={{ color: "#2e2270", marginRight: "10px" }}
                          />{" "}
                          +529554587789
                        </p>
                        <p
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                          }}
                        >
                          <DirectionsIcon
                            sx={{ color: "#2e2270", marginRight: "10px" }}
                          />{" "}
                          Av. Sabinas 223. Col. Robles CP. 85938
                        </p>
                      </div>
                    </InfoWindow>
                  ) : null}
                </Marker>
              ))}
            </GoogleMap>
          </Grid>
          
          {fetched  ? <Cumpleaños firebaseData={firebaseData} /> : <CircularProgress color="inherit"/>}

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
                      image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Irally.png?alt=media&token=f6d20e58-86e8-432b-9ea2-9e274340697d"
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
                      image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/concuscout.jpg?alt=media&token=d07a0a2f-11f1-40d5-979f-56c7c6724944"
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
                      image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/canciones.png?alt=media&token=661efe20-44c2-4f05-a456-3503a5a9ae9e"
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
                  image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/caminatas.jpg?alt=media&token=89563e15-8c85-473e-a0d9-43dd63d021cb"
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
                      image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Aguila.jpg?alt=media&token=7dec5eb7-c5aa-4b91-8de5-20a70126f6b6"
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
                      image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/ardillas.webp?alt=media&token=61364f58-5f63-4d35-8b3e-ce23b30c8855"
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
                      image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/apus.jpg?alt=media&token=69f45eeb-c7d8-43ff-a24b-269cf5f247ee"
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
                      image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/andromeda.jpg?alt=media&token=9b90a483-e2ac-4de8-be56-512d3fb907dd"
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
                      image="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/acuario.jpg?alt=media&token=08203140-ad07-4df2-ad4c-2fd466b4c02a"
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
              <TikTok url="https://www.tiktok.com/@cucharascout/video/7029375868732542213?is_from_webapp=1&sender_device=pc&web_id6979447043030877701" />
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
                  src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/fb.png?alt=media&token=67763eac-1ce1-417a-8c2e-34beaa194f5f"
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
                src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/tiktok.png?alt=media&token=f6013be2-8209-47ff-9509-dc98f0686a83"
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
                  src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/youtube.png?alt=media&token=177a091a-c3ee-4765-9ef6-695344b00220"
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
                src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/top%20flowers.png?alt=media&token=085418a2-6c46-4a87-ac9a-b352a864a23d"
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
              <img
                src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/unete.png?alt=media&token=440bad97-cc16-449b-840c-68fb6da0ba22"
                alt="logo"
                style={{ width: "100%" }}
              />
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
                src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/bot%20flowers.png?alt=media&token=c9bd8f5f-5f0c-495f-bd96-4d70d09cd851"
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

export default HomePage;
