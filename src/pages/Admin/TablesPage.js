import React from "react";
import { Grid, CssBaseline } from "@mui/material";
import RightMenu from "../../components/RightMenu";
import LeftDrawer from '../../components/LeftDrawer/LeftDrawer';
import Main from '../../components/Tables/Main';


const windowHeight = window.innerHeight;
const TablesPage = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#F2F7FA",
          height: `${window.innerHeight}px`,
        }}
      >
        <CssBaseline />
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ heigth: "100%" }}
        >
          <Grid
            item
            lg={2}
            sx={{ backgroundColor: "white", textAlign: "center" }}
          >
            <LeftDrawer />
            
          </Grid>
          <Grid
            item
            lg={9}
            sx={{ backgroundColor: "#F2F7FA", textAlign: "center" }}
          >
              <Main/>
          </Grid>
          <Grid
            item
            lg={1}
            sx={{
              backgroundColor: "#F2F7FA",
              textAlign: "center",
              height: `${windowHeight}px`,
              display: "flex",
              borderLeft: "1px solid #E1E1E1",
            }}
          >
            <RightMenu />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default TablesPage;
