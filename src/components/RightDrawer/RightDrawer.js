import React from "react";
import { Grid, Drawer, Box, CssBaseline, Toolbar, Button } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const rightMenuItemList = [
  {
    key: "1",
    alt: "Camping Icon",
    img: "https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/trekking.png?alt=media&token=24daa361-beb0-471c-9dbd-8df1f7c5f000",
    text: "Agregar actividad",
    href: "#",
  },
  {
    key: "2",
    alt: "Credential Icon",
    img: "https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/card%20(1).png?alt=media&token=ef14d516-c45d-4a76-997b-b7f71203c59d",
    text: "Imprimir credencial",
    href: "#",
  },
  {
    key: "3",
    alt: "Firebase Icon",
    img: "https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/firebase.png?alt=media&token=34cba865-1e37-44a6-813a-d0ea0bf98615",
    text: "Ir a Firebase",
    href: "https://console.firebase.google.com/u/3/project/agsmac-6f212/overview",
  },
  {
    key: "4",
    alt: "GCP Icon",
    img: "https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Black%20GCP%20Icon.png?alt=media&token=c8849361-de57-46a9-86ed-f8a2785cf2ca",
    text: "Ir a Google Cloud Platform",
    href: "https://console.cloud.google.com/home/dashboard?project=agsmac-6f212&authuser=3",
  },
];

const RightDrawer = () => {
  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: "#F2F7FA",  }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          anchor="right"
          sx={{ backgroundColor: "#F2F7FA" }}
        >
          <Toolbar sx={{ backgroundColor: "#F2F7FA",  }}>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ margin: "0px 0px 50px 0px" }}
            >
              {rightMenuItemList.map((item) => {
                return (
                  <>
                    <Button
                      sx={{
                        color: "#F2F7FA",
                        backgroundColor: "white",
                        height: "50px",
                        width: "50px",
                      }}
                      href={item.href}
                    >
                      <img
                        src={item.img}
                        style={{
                          width: "30px",
                          filter:
                            "invert(13%) sepia(26%) saturate(6434%) hue-rotate(240deg) brightness(93%) contrast(97%)",
                        }}
                      />
                    </Button>
                    <h5 style={{ color: "#2E2270" }}>{item.text}</h5>
                  </>
                );
              })}
            </Grid>
          </Toolbar>
        </Drawer>
      </Box>
    </>
  );
};
export default RightDrawer;
