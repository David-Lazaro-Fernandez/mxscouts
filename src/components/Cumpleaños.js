import react, { useState, useEffect } from "react";
import { Grid,Paper,Button, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel'

//Lottie animation
import birthDayAnimation from "./../bday.json";
import Lottie from "lottie-react";

function Item(props)
{
  const {item, matches} = props;
    return (
        <Paper sx={{height:'200px', width:'100%', backgroundColor:'#2E2270', boxShadow:'none', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{textAlign:'center', color:'#ffffff', fontSize:`${matches ? '32px':'20px'}`}}>Felicidades a los cumpleañeros del mes</h1>
            <h2 style={{textAlign:'center', color:'#ffffff',fontSize:`${matches ? '26px':'16px'}`}}>{item}</h2>
        </Paper>
    )
}

const Cumpleaños = (props) => {
  const {firebaseData} = props;
  console.log(firebaseData)
  const nombres = firebaseData.map((data) => data.nombre);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div style={{ width: "100%", marginTop: "25px" }}>
     
      <Grid container spacing={0} style={{ marginTop: "25px" }}>
        <Grid item xl={4} lg={4} md={12} sm={12} xs={12} style={{display:'flex', justifyContent: 'center'}}>
          <Lottie animationData={birthDayAnimation} loop={true} style={{width:'200px'}} />
        </Grid>
        <Grid
          item
          xl={8}
          lg={8}
          md={12}
          sm={12}
          xs={12}
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
            <div style={{width:'100%'}}>
              <Carousel 
              indicators={false}
              style={{width:'100%'}}
              >
                {nombres.map((element,index) => <Item item={element} matches={matches} key={index}/>)}
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
