import React from "react";
import { Grid, Paper } from "@mui/material";

import SCard from "./SCard";
const NoInsurance = (props) => {
  const { ScoutList } = props;
  console.log(ScoutList);
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        
        {ScoutList.map((scout) => {
          return (
            <>
            <Grid item xl={4} lg={4} >
              <SCard key={scout.nombre_completo} data={scout} />
          </Grid>
            </>
          )
          
        })}
      </Grid>
    </>
  );
};
export default NoInsurance;
