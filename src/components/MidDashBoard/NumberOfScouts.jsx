import React from "react";
import {Paper, Typography, Link} from "@mui/material";

const NumberOfScouts = () => {
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
          # Scouts Registrados
        </Typography>
        <Typography variant="h4" sx={{ fontSize: "36px" }}>
          3000
        </Typography>
        <Typography variant="body" sx={{ fontSize: "12px" }} color="#959595">
          Ultimo registro: 12 de marzo del 2022 a las 10:00 PM
        </Typography>

        <div style={{ marginTop: "50px" }}>
          <Link color="#2E2270" href="#" sx={{ textAlign: "left" }}>
            Ver todos los registros
          </Link>
        </div>
      </Paper>
    </>
  );
};
export default NumberOfScouts;
