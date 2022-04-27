//React Imports
import React, { useState, useEffect } from "react";
//Third Party Libraries
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel";
//Lottie animation
import birthDayAnimation from "./../bday.json";
import Lottie from "lottie-react";

function Item(props) {
  const { item, matches } = props;
  //Item Styles
  const paperStyle = {
    height: "200px",
    width: "100%",
    backgroundColor: "#2E2270",
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const h1Style = {
    textAlign: "center",
    color: "#ffffff",
    fontSize: `${matches ? "32px" : "20px"}`,
  };
  const h2Style = {
    textAlign: "center",
    color: "#ffffff",
    fontSize: `${matches ? "26px" : "16px"}`,
  };

  return (
    <Paper sx={paperStyle}>
      <h1 style={h1Style}>Felicidades a los cumpleañeros del mes</h1>
      <h2 style={h2Style}>{item}</h2>
    </Paper>
  );
}

const Cumpleaños = (props) => {
  const { firebaseData } = props;
  const nombres = firebaseData.map((data) => data.nombre_completo);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  //Styles
  const mainWrapper = { width: "100%", marginTop: "25px" };
  const firstContainer = { marginTop: "25px" };
  const lottieWrapper = { display: "flex", justifyContent: "center" };
  const lottieStyle = { width: "200px" };
  const rightWrapper = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#2E2270",
  };
  const scoutLogoWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2E2270",
  };
  const scoutLogoStyle = {
    width: "30px",
    filter:
      "invert(100%) sepia(100%) saturate(25%) hue-rotate(56deg) brightness(108%) contrast(106%)",
  };
  const mainTextWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#2E2270",
  };
  const fullWidth = { width: "100%" };

  return (
    <div style={mainWrapper}>
      <Grid container spacing={0} style={firstContainer}>
        <Grid item xl={4} lg={4} md={12} sm={12} xs={12} style={lottieWrapper}>
          <Lottie
            animationData={birthDayAnimation}
            loop={true}
            style={lottieStyle}
          />
        </Grid>
        <Grid item xl={8} lg={8} md={12} sm={12} xs={12} style={rightWrapper}>
          <Grid
            item
            xs={1}
            sm={1}
            md={1}
            lg={1}
            xl={1}
            style={scoutLogoWrapper}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/scout%20logo.png?alt=media&token=b1b6eb96-3b89-46a9-b193-564d81a91028"
              style={scoutLogoStyle}
              alt="Logo de los Scouts"
            />
          </Grid>
          <Grid
            item
            xs={10}
            sm={10}
            md={10}
            lg={10}
            xl={10}
            style={mainTextWrapper}
          >
            <div style={fullWidth}>
              <Carousel indicators={false} style={fullWidth}>
                {nombres.map((element, index) => (
                  <Item item={element} matches={matches} key={index} />
                ))}
              </Carousel>
            </div>
          </Grid>
          <Grid
            item
            xs={1}
            sm={1}
            md={1}
            lg={1}
            xl={1}
            style={scoutLogoWrapper}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/scout%20logo.png?alt=media&token=b1b6eb96-3b89-46a9-b193-564d81a91028"
              style={scoutLogoStyle}
              alt="Logo de los Scouts"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cumpleaños;
