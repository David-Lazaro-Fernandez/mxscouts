//React Imports
import React from "react";
//Third Party Libraries
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

const ActivitiesTable = (props) => {
  const { ActivitiesItems } = props;
  //Styles
  const tableCellStyle = { textAlign: "center" }
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
        <Typography
          variant="h5"
          color="#2E2270"
          style={{ margin: "15px 0px 0px 15px", fontWeight: "500" }}
        >
          Ultimas actividades
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={tableCellStyle}>ID</TableCell>
                <TableCell sx={tableCellStyle}>CIA</TableCell>
                <TableCell sx={tableCellStyle}>
                  Nombre de la Actividad
                </TableCell>
                <TableCell sx={tableCellStyle}>
                  Lugar de realización
                </TableCell>
                <TableCell sx={tableCellStyle}>
                  Hora de inicio
                </TableCell>
                <TableCell sx={tableCellStyle}>
                  Hora de finalización
                </TableCell>
                <TableCell sx={tableCellStyle}>
                  Fecha de realización
                </TableCell>
                <TableCell sx={tableCellStyle}>Asistentes</TableCell>
                <TableCell sx={tableCellStyle}>
                  Observaciones
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ActivitiesItems.map((activity) => {
                const start_hour = new Date(
                  activity.start_hour.seconds * 1000
                ).toLocaleTimeString();
                const finish_hour = new Date(
                  activity.finish_hour.seconds * 1000
                ).toLocaleTimeString();
                return (
                  <TableRow key={activity.id}>
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
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default ActivitiesTable;
