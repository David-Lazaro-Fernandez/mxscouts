import React from "react";
import { Container, Grid } from "@mui/material";
const RightMenu = (props) => {
  const { itemList } = props;
  
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
          {/*Items List*/}
          {itemList.map((item) => {
            return (
              <div>
                  <div style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', marginBottom:'25px', fontWeight:'500'}}>
                    <div style={{backgroundColor:'white', borderRadius:'5px', width:'60px', height:'60px',display:'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '5px'}}>
                        <img src={item.img}
                        alt = {item.alr}
                        style= {{
                            width:'30px',
                            filter:"invert(13%) sepia(26%) saturate(6434%) hue-rotate(240deg) brightness(93%) contrast(97%)",
                        }}
                        />
                    </div>
                    <span style={{ color: "#2E2270" }}>{item.text}</span>                  
                </div>  
              </div>
            );
          })}
        </Container>
      </Grid>
    </>
  );
};

export default RightMenu;
