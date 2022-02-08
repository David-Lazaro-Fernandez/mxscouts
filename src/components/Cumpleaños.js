import react, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
//Lottie animation
import birthDayAnimation from "./../bday.json";
import Lottie from "lottie-react";

const Cumpleaños = (props) => {
  const [name, setName] = useState("");
  const nombres = ["David", "Juan", "Juan Carlos", "Juan Ernesto", "Alejandro"];
  const cambio = () => {
    const random = Math.floor(Math.random() * nombres.length);
    console.log(nombres[random]);
    setName(nombres[random]);
  }

  useEffect(() => {
    setInterval(cambio, 4000);
  },[])
  return (
    <div style={{ width: "100%", marginTop: "25px" }}>
      <Grid container spacing={0} style={{ marginTop: "25px" }}>
        <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
          <Lottie animationData={birthDayAnimation} loop={true} width={150} />
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
            backgroundColor: "#2E2270",
          }}
        >
          <Grid
            item
            xs={1}
            sm={1}
            md={1}
            lg={1}
            xl={1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#2E2270",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/scout%20logo.png?alt=media&token=b1b6eb96-3b89-46a9-b193-564d81a91028"
              style={{
                width: "30px",
                filter:
                  "invert(100%) sepia(100%) saturate(25%) hue-rotate(56deg) brightness(108%) contrast(106%)",
              }}
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
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#2E2270",
            }}
          >
            <h1
              style={{
                color: "#ffffff",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              ¡Felicidades a los cumpleañeros del mes!
            </h1>
            <h1
              style={{
                color: "#ffffff",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "75px",
              }}
            >
              {name}
            </h1>
          </Grid>
          <Grid
            item
            xs={1}
            sm={1}
            md={1}
            lg={1}
            xl={1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#2E2270",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/scout%20logo.png?alt=media&token=b1b6eb96-3b89-46a9-b193-564d81a91028"
              style={{
                width: "30px",
                filter:
                  "invert(100%) sepia(100%) saturate(25%) hue-rotate(56deg) brightness(108%) contrast(106%)",
              }}
              alt="Logo de los Scouts"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cumpleaños;
