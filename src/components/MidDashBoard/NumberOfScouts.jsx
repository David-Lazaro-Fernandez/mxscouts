//React Imports
import React from "react";
//Third Party Libraries
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const NumberOfScouts = (props) => {
  const { Scouts } = props;
  //Styles
  const paperStyle = {
    p: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "200px",
    width: "400px",
  };
  const titleStyle = { fontWeight: "500", fontSize: "18px" };
  const numScoutsStyle = { fontSize: "36px" };
  const lastRegisterStyle = { fontSize: "12px" };
  const linkWrapperStyle = { marginTop: "50px" };
  const linkStyle = { textAlign: "left" };

  return (
    <>
      <Paper sx={paperStyle}>
        <Typography variant="h5" color="#2E2270" sx={titleStyle}>
          # Scouts Registrados 2022
        </Typography>
        <Typography variant="h4" sx={numScoutsStyle}>
          {Scouts.length}
        </Typography>
        <Typography variant="body" sx={lastRegisterStyle} color="#959595">
          Ultimo registro: 12 de marzo del 2022 a las 10:00 PM
        </Typography>

        <div style={linkWrapperStyle}>
          <Link color="#2E2270" href="#" sx={linkStyle}>
            Ver todos los registros
          </Link>
        </div>
      </Paper>
    </>
  );
};
export default NumberOfScouts;
