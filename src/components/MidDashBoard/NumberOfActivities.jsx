import React from "react";
import {Paper, Typography, Link} from '@mui/material';
const NumberOfActivities = () => {
  return (
    <>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          height: "200px",
          width: "400px",
        }}
      >
        <Typography
          variant="h5"
          color="#2E2270"
          sx={{ fontWeight: "500", fontSize: "18px" }}
        >
          # Actividades del año
        </Typography>
        <Typography variant="h4" sx={{ fontSize: "36px" }}>
          23
        </Typography>
        <Typography variant="body" sx={{ fontSize: "12px" }} color="#959595">
          Ultimo registro: 23 de enero del 2022 a las 13:00 PM
        </Typography>

        <div style={{ marginTop: "50px" }}>
          <Link color="#2E2270" href="#" sx={{ textAlign: "left" }}>
            Ver todas las actividades del año
          </Link>
        </div>
      </Paper>
    </>
  );
};
export default NumberOfActivities;
