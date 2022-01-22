import React from "react";
import { Grid, Typography } from "@mui/material";
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  switch (value) {
    case 1:
      return (
        <>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              item
              xl={8}
              lg={8}
              md={8}
              sm={8}
              xs={8}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <span>
                <img
                  src="/img/ley.png"
                  width="50"
                  style={{ marginRight: "30px" }}
                />
              </span>
              <h4 style={{ color: "#2E2270" }}> Ley y Normas</h4>
            </Grid>
            <Grid
              item
              xl={8}
              lg={8}
              md={8}
              sm={8}
              xs={8}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ margin: "10px 20px 10px 20px", color:'#2E2270' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </Grid>

            <Grid
              item
              lg={8}
              md={8}
              xl={8}
              sm={8}
              xs={8}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>
                <img
                  src="/img/oración.png"
                  width="50"
                  style={{ marginRight: "30px" }}
                />
              </span>
              <h4 style={{ color: "#2E2270" }}> Oración</h4>
            </Grid>
            <Grid
              item
              xl={8}
              lg={8}
              md={8}
              sm={8}
              xs={8}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ margin: "10px 20px 10px 20px", color:'#2E2270'  }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </Grid>

            <Grid
              item
              xl={8}
              lg={8}
              md={8}
              sm={8}
              xs={8}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>
                <img
                  src="/img/promesa.png"
                  width="50"
                  style={{ marginRight: "30px" }}
                />
              </span>
              <h4 style={{ color: "#2E2270" }}> Promesa</h4>
            </Grid>
            <Grid
              item
              lg={8}
              md={8}
              sm={8}
              xs={8}
              xl={8}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "0px",
              }}
            >
              <p style={{ margin: "10px 20px 10px 20px", color:'#2E2270' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </Grid>
          </Grid>
        </>
      );
    case 2:
      return (
        <>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <img src="/img/castores.png"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <h4>¡Ser castor trata de hacer todo tipo de cosas emocionantes!</h4>
                <p style={{color:'#2E2270'}}>Si tienes entre 4 y 8 años y te gusta tenere muchos amigos, hacer cosas nuevas, y sobre todo, tener un montón de diversión, la colonia de castores es para tí!!!</p>
            </Grid>
          </Grid>
        </>
      );
    case 3: return(
    <>

    </>
    )  
  }
  
};

export default TabPanel;
