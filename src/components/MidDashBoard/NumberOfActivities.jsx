//React Imports
import React from "react";
//Third Party Libraries
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const NumberOfActivities = () => {
  //Styles
  const paperStyle = {
    p: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "200px",
    width: "400px",
  };
  const title = { fontWeight: "500", fontSize: "18px" };
  const numberOfActivitiesStyle = { fontSize: "36px" };
  const lastRegisterStyle = { fontSize: "12px" };
  const linkWrapperStyle = { marginTop: "50px" };
  const linkStyle = { textAlign: "left" };

  return (
    <>
      <Paper sx={paperStyle}>
        <Typography variant="h5" color="#2E2270" sx={title}>
          # Actividades del año
        </Typography>
        <Typography variant="h4" sx={numberOfActivitiesStyle}>
          23
        </Typography>
        <Typography variant="body" sx={lastRegisterStyle} color="#959595">
          Ultimo registro: 23 de enero del 2022 a las 13:00 PM
        </Typography>

        <div style={linkWrapperStyle}>
          <Link color="#2E2270" href="#" sx={linkStyle}>
            Ver todas las actividades del año
          </Link>
        </div>
      </Paper>
    </>
  );
};
export default NumberOfActivities;
