//React Imports
import React from "react";
//Third Party Libraries
import Grid from "@mui/material/Grid";
//Local Components
import SCard from "./SCard";
const NoInsurance = (props) => {
  const { ScoutList } = props;
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
              <Grid item xl={4} lg={4}>
                <SCard key={scout.nombre_completo} data={scout} />
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};
export default NoInsurance;
