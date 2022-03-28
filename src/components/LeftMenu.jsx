import React from "react";
import { Grid, Container } from "@mui/material";

const LeftMenu = (props) => {
  const { itemList } = props;
  console.log(itemList);
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ marginTop: "50px" }}
      >
        <Grid item>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Logo.png?alt=media&token=71ae8e1c-6b35-4ed6-a817-1e0f958495a9"
            alt="AGSMAC Logo"
            width="100px"
            style={{ marginBottom: "50px" }}
          />
        </Grid>
        {/*User Image*/}
        <Container>
          <Grid
            item
            style={{ display: "flex", flexDirection: "row", width: "100%" }}
          >
            <img
              src="https://scontent.fntr10-2.fna.fbcdn.net/v/t1.6435-9/153605599_10158911782994793_5107387199032886651_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGwd_DdZCoyptesCB75bpFwZ8Pwz6pNAR5nw_DPqk0BHhWA2UULqM9sfHLIPAEb1F-UUsLqX0KnIKIOnngOrLs1&_nc_ohc=Q9dbs1I_K7wAX8p_i9H&_nc_ht=scontent.fntr10-2.fna&oh=00_AT-qQ1Rsq0L4ajJ0rxvgXWny44Mo1xeW9iZ-A3gk8MCFvQ&oe=6262AAC6"
              alt="Sergio's image"
              width="75px"
              style={{
                border: "0px",
                borderRadius: "50%",
                marginRight: "20px",
              }}
            />
            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "#2E2270",
                  fontWeight: "600",
                  fontSize: "14px",
                  margin: "0px",
                }}
              >
                Sergio Marquez
              </p>
              <p
                style={{
                  color: "#959595",
                  fontWeight: "300",
                  fontSize: "12px",
                  margin: "0px",
                }}
              >
                Scouters y dirigentes
              </p>
            </div>
          </Grid>
        </Container>

        <Container style={{ marginTop: "50px" }}>
          {/*Items List*/}
          {itemList.map((item) => {
            return (
              <div
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  "&:hover": {
                    color: "#F5F5F5",
                  },
                }}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  width="30px"
                  style={{
                    marginRight: "20px",
                    filter:
                      "invert(13%) sepia(26%) saturate(6434%) hue-rotate(240deg) brightness(93%) contrast(97%)",
                  }}
                />
                <span style={{ color: "#2E2270", fontWeight: "bold" }}>
                  {item.text}
                </span>
              </div>
            );
          })}
      
          
          <button style={{ marginTop: "300px", padding:'0px 0px 30px 0px', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'white', border:'0px' }}>
            <div style={{backgroundColor:'#2E2270', borderRadius:'10px',width:'60px', height:'60px', display:'flex', justifyContent: 'center', alignItems:'center', marginRight:'20px'}}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/exit.png?alt=media&token=ab13e07a-2ec0-4ac7-a2fb-9305af339d40"
              style={{
                filter:
                  "invert(100%) sepia(73%) saturate(0%) hue-rotate(106deg) brightness(111%) contrast(100%)",
                width:'40px'
              }}
            />
            </div>
            <span style={{color:'#2E2270', fontWeight:'bold', fontSize:'20px'}}>Salir</span>
          </button>
        </Container>
      </Grid>
    </>
  );
};

export default LeftMenu;
