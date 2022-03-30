import React from "react";
import { Paper, Typography, Link } from "@mui/material";
import DoughnutChart from "./DoughnutChart";
const ScoutsWithNoCredential = (props) => {
  const { noCredentialScoutList, Scouts } = props;
  return (
    <>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          height: "300px",
          width: "400px",
        }}
      >
        <Typography
          variant="h5"
          color="#2E2270"
          sx={{ fontWeight: "500", fontSize: "18px" }}
        >
          # De Scouts sin credencial
        </Typography>
        <div style={{width:'100%',display:'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center', marginBottom:'10px'}}>
            <DoughnutChart />
        </div>
        <Typography variant="body" sx={{ fontSize: "12px" }} color="#959595">
          {noCredentialScoutList.length > 0
            ? `Algunos de ellos son ${noCredentialScoutList[0].nombres}, ${noCredentialScoutList[1].nombres}, ${noCredentialScoutList[2].nombres}`
            : "¡Felicidades todos los scouts tienen credenciales!"}
        </Typography>

        <div style={{ marginTop: "20px" }}>
          <Link color="#2E2270" href="#" sx={{ textAlign: "left" }}>
            Ver sus datos completos
          </Link>
        </div>
      </Paper>
    </>
  );
};
export default ScoutsWithNoCredential;
