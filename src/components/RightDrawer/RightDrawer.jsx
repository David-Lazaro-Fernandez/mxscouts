import React from "react";
import { Grid, Drawer, Box, CssBaseline, Toolbar, Button } from "@mui/material";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
const RightDrawer = () => {
  return (
    <>
      <Box sx={{ display: "flex", backgroundColor:'#F2F7FA', height: '100%'}}>
        <CssBaseline />
        <Drawer variant="permanent" anchor="right" sx={{backgroundColor:'#F2F7FA'}}>
          <Toolbar sx={{backgroundColor:'#F2F7FA', height:'100%'}}>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ margin: "0px 0px 50px 0px" }}
            >
                <Grid item>
                    <Button sx={{ margin: "0px 0px 0px 0px", backgroundColor: "white", width:'50px', height:'50px' }}> <AccessAlarmIcon/></Button>
                    <h5>Crayola</h5>
                </Grid>
            </Grid>
          </Toolbar>
        </Drawer>
      </Box>
    </>
  );
};
export default RightDrawer;
