import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
const AccordionInfo = (props) => {
  const blueFilter =
    "invert(18%) sepia(15%) saturate(7317%) hue-rotate(233deg) brightness(84%) contrast(102%)";
  return (
    <div>
      <Accordion>
        <AccordionSummary>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Grupos%2Fcalendar%20(1).png?alt=media&token=110c33d0-240d-449e-b471-e79eed8c37ba"
              style={{ width: "50px", filter: `${blueFilter}` }}
            />
            <Typography>Horario</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionInfo;
