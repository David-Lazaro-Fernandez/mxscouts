import React, { useState } from "react";
import { Container, Grid, Button } from "@mui/material";

const rightMenuItemList = [
  {
    key: "1",
    alt: "Camping Icon",
    img: "https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/trekking.png?alt=media&token=24daa361-beb0-471c-9dbd-8df1f7c5f000",
    text: "Agregar actividad",
  },
  {
    key: "2",
    alt: "Credential Icon",
    img: "https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/card%20(1).png?alt=media&token=ef14d516-c45d-4a76-997b-b7f71203c59d",
    text: "Imprimir credencial",
  },
  {
    key: "3",
    alt: "Firebase Icon",
    img: "https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/firebase.png?alt=media&token=34cba865-1e37-44a6-813a-d0ea0bf98615",
    text: "Ir a Firebase",
  },
  {
    key: "4",
    alt: "GCP Icon",
    img: "https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Black%20GCP%20Icon.png?alt=media&token=c8849361-de57-46a9-86ed-f8a2785cf2ca",
    text: "Ir a Google Cloud Platform",
  },
];

const RightMenu = () => {
  const { bColor, setBColor } = useState(false);
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Container>
          {rightMenuItemList.map((item) => {
            return (
              <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                <Button sx={{ backgroundColor: "white", color: "#2E2270" }}>
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "5px",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.alt}
                      style={{
                        width: "30px",
                        filter:
                          "invert(13%) sepia(26%) saturate(6434%) hue-rotate(240deg) brightness(93%) contrast(97%)",
                      }}
                    />
                  </div>
                </Button>
                <h5 style={{textAlign:'center', color:'#2E2270'}}>{item.text}</h5>
              </div>
            );
          })}
        </Container>
      </Grid>
    </>
  );
};

export default RightMenu;
