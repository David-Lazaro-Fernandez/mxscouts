import React from "react";
import { Grid } from "@mui/material";

const LeftMenu = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{marginTop:'50px'}}
      >
        <Grid item>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Logo.png?alt=media&token=71ae8e1c-6b35-4ed6-a817-1e0f958495a9"
            alt="AGSMAC Logo"
            width="100px"
            style={{marginBottom:'50px'}}
          />
        </Grid>
        <Grid item style={{ display: "flex", flexDirection: "row" }}>
          <img
            src="https://scontent.fntr10-2.fna.fbcdn.net/v/t1.6435-9/153605599_10158911782994793_5107387199032886651_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGwd_DdZCoyptesCB75bpFwZ8Pwz6pNAR5nw_DPqk0BHhWA2UULqM9sfHLIPAEb1F-UUsLqX0KnIKIOnngOrLs1&_nc_ohc=Q9dbs1I_K7wAX8p_i9H&_nc_ht=scontent.fntr10-2.fna&oh=00_AT-qQ1Rsq0L4ajJ0rxvgXWny44Mo1xeW9iZ-A3gk8MCFvQ&oe=6262AAC6"
            alt="Sergio's image"
            width="75px"
            style={{ border: "0px", borderRadius: "50%", marginRight: "20px"}}
          />
          <div style={{textAlign:'left', display:'flex',flexDirection:'column',alignItems: 'flex-start',justifyContent:'center'}}>
            <p
              style={{ color: "#2E2270", fontWeight: "600", fontSize: "14px", margin:'0px' }}
            >
              Sergio Marquez
            </p>
            <p
              style={{ color: "#959595", fontWeight: "300", fontSize: "12px", margin:'0px' }}
            >
              Scouters y dirigentes
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default LeftMenu;
