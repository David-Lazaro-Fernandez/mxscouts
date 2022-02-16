import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
const AccordionInfo = (props) => {
  const { horarios, días, ubicación } = props;
  const blueFilter =
    "invert(18%) sepia(15%) saturate(7317%) hue-rotate(233deg) brightness(84%) contrast(102%)";
  return (
    <div style={{width:'100%'}}>
      {/*Horarios*/}
      <Accordion>
        <AccordionSummary>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Grupos%2Fwatch.png?alt=media&token=f66075be-1d35-4130-a12b-f5eb9768b0ca"
              style={{
                width: "50px",
                filter: `${blueFilter}`,
                marginRight: "25px",
              }}
              alt="watch icon"
            />
            <Typography variant="h6" style={{ color: "#2e2270" }}>
              Horario
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>{horarios}</AccordionDetails>
      </Accordion>
      {/*Días de actividad*/}
      <Accordion>
        <AccordionSummary>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Grupos%2Fcalendar%20(1).png?alt=media&token=110c33d0-240d-449e-b471-e79eed8c37ba"
              style={{
                width: "50px",
                filter: `${blueFilter}`,
                marginRight: "25px",
              }}
              alt="calendar icon"
            />
            <Typography variant="h6" style={{ color: "#2e2270" }}>
              Días de actividad
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>{días}</AccordionDetails>
      </Accordion>
      {/*Contacto*/}
      <Accordion>
        <AccordionSummary>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Grupos%2Fuser-location.png?alt=media&token=469bd5ae-43a5-499f-b3b9-5877c2d9d2f8"
              style={{
                width: "50px",
                filter: `${blueFilter}`,
                marginRight: "25px",
              }}
              alt="Contact icon"
            />
            <Typography variant="h6" style={{ color: "#2e2270" }}>
              Contacto
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <a href="emailto: contacto@agsmac.com">contacto@agsmac.com</a>
        </AccordionDetails>
      </Accordion>
      {/*Ubicación*/}
      <Accordion>
        <AccordionSummary>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Grupos%2Flocation-pin.png?alt=media&token=597f16eb-31e1-499b-8cdf-77857f0eb2b0"
              style={{
                width: "50px",
                filter: `${blueFilter}`,
                marginRight: "25px",
              }}
              alt="Location icon"
            />
            <Typography variant="h6" style={{ color: "#2e2270" }}>
              Ubicación
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>{ubicación}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionInfo;
