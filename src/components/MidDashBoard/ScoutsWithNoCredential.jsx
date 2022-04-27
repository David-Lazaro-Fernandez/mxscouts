//React Imports
import React from "react";
//Third Party Libraries
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
//Local Components
import DoughnutChart from "./DoughnutChart";

const ScoutsWithNoCredential = (props) => {
  const { noCredentialScoutList } = props;
  //Styles
  const paperStyle = {
    p: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "300px",
    width: "400px",
  };
  const titleStyle = { fontWeight: "500", fontSize: "18px" };
  const doughnutWrapperStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  };
  const birthScoutsStyle = { fontSize: "12px" };
  const linkWrapper = { marginTop: "20px" };
  const linkStyle = { textAlign: "left" };

  return (
    <>
      <Paper sx={paperStyle}>
        <Typography variant="h5" color="#2E2270" sx={titleStyle}>
          # De Scouts sin credencial
        </Typography>
        <div style={doughnutWrapperStyle}>
          <DoughnutChart />
        </div>
        <Typography variant="body" sx={birthScoutsStyle} color="#959595">
          {noCredentialScoutList.length > 0
            ? `Algunos de ellos son ${noCredentialScoutList[0].nombres}, ${noCredentialScoutList[1].nombres}, ${noCredentialScoutList[2].nombres}`
            : "¡Felicidades todos los scouts tienen credenciales!"}
        </Typography>

        <div style={linkWrapper}>
          <Link color="#2E2270" href="#" sx={linkStyle}>
            Ver sus datos completos
          </Link>
        </div>
      </Paper>
    </>
  );
};
export default ScoutsWithNoCredential;
