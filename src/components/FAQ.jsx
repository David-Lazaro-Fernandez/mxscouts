//React imports
import React from "react";
//Third Party Libraries
import Grid from "@mui/material/Grid";

const FAQ = (props) => {
  const { image, icon, question, answer } = props;
  //Styles

  const wrapper = { backgroundColor: "#ffffff", height: "100%" };
  const questionImageStyle = {
    width: "100%",
    height: "225px",
    objectFit: "cover",
  };
  const iconWrapper = {
    display: "flex",
    direction: "row",
    justifyContent: "center",
  };
  const iconStyle = {
    width: "50px",
    postion: "relative",
  };
  const questionStyle = {
    color: "#2E2270",
    fontFamily: "Roboto",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0px 25px 0px 25px",
  };
  const answerStyle = {
    color: "#5A537C",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "300",
    margin: "10px 25px 25px 25px",
    lineHeight: "23px",
  };

  return (
    <div style={wrapper}>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <img
            src={image}
            alt="Imagen de la pregunta"
            style={questionImageStyle}
          />
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} md={12} lg={12} style={iconWrapper}>
              <img src={icon} alt="icon" style={iconStyle} />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
          ></Grid>
          <Grid
            container
            spacing={0}
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <h3 style={questionStyle}>{question}</h3>
            <p style={answerStyle}>{answer}</p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default FAQ;
