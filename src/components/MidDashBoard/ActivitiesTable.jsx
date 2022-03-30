import React from "react";
import {
  Paper,
  Typography,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const ActivitiesTable = (props) => {
  const { ActivitiesItems } = props;
  console.log(ActivitiesItems);
  return (
    <>
      <Paper
        sx={{
          p: "3",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <Typography variant="h5" color="#2E2270" style={{ margin: "15px 0px 0px 15px", fontWeight:'500' }}>
          Ultimas actividades
        </Typography>
        <TableContainer>
          <TableHead>
            <TableRow>
              <TableCell sx={{textAlign: 'center'}}>ID</TableCell>
              <TableCell sx={{textAlign: 'center'}}>CIA</TableCell>
              <TableCell sx={{textAlign: 'center'}}>Nombre de la Actividad</TableCell>
              <TableCell sx={{textAlign: 'center'}}>Lugar de realización</TableCell>
              <TableCell sx={{textAlign: 'center'}}>Hora de inicio</TableCell>
              <TableCell sx={{textAlign: 'center'}}>Hora de finalización</TableCell>
              <TableCell sx={{textAlign: 'center'}}>Fecha de realización</TableCell>
              <TableCell sx={{textAlign: 'center'}}>Asistentes</TableCell>
              <TableCell sx={{textAlign: 'center'}}>Observaciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ActivitiesItems.map((activity) => {
              const start_hour = new Date(activity.start_hour.seconds * 1000).toLocaleTimeString('en-us')
              const finish_hour = new Date(activity.finish_hour.seconds * 1000).toLocaleTimeString('en-us')
              return (
                <TableRow>
                  <TableCell>{activity.id}</TableCell>
                  <TableCell>{activity.organizator_cia}</TableCell>
                  <TableCell>{activity.activity_name}</TableCell>
                  <TableCell>{activity.place}</TableCell>
                  <TableCell>{start_hour}</TableCell>
                  <TableCell>{finish_hour}</TableCell>
                  <TableCell>29/03/2022</TableCell>
                  <TableCell>{activity.assistants}</TableCell>
                  <TableCell>{activity.observations}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TableContainer>
      </Paper>
    </>
  );
};

export default ActivitiesTable;
