//React Imports
import React from "react";
//Third Party Libraries
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { columns } from "./Columns/ActivitiesColumns";

const CustomToolbar = () => {
  return (
    <GridToolbarContainer sx={{ marginLeft: "10px" }}>
      <GridToolbarColumnsButton sx={{ color: "#2E2270" }} />
      <GridToolbarFilterButton sx={{ color: "#2E2270" }} />
      <GridToolbarDensitySelector sx={{ color: "#2E2270" }} />
      <GridToolbarExport sx={{ color: "#2E2270" }} />
    </GridToolbarContainer>
  );
};
const Activities = (props) => {
  const { ActivitiesList } = props;
  //Styles
  const arrowBackButtonStyle = {
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    color: "#2E2270",
  };
  const wrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0px 0px 20px 0px",
  };
  const mainTableStyle = {
    p: "3",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    height: "600px",
  };

  return (
    <>
      <div style={wrapper}>
        <Button
          startIcon={<ArrowBackIcon />}
          href="/Admin/tables"
          sx={arrowBackButtonStyle}
        >
          Regresar a las tablas
        </Button>
      </div>
      <Paper sx={mainTableStyle}>
        <Typography
          variant="h5"
          color="#2E2270"
          style={{ margin: "15px 0px 10px 15px", fontWeight: "500" }}
        >
          Lista de Actividades 2022
        </Typography>

        <DataGrid
          rows={ActivitiesList}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          sx={{ width: "100%" }}
          components={{ Toolbar: CustomToolbar }}
        />
      </Paper>
    </>
  );
};
export default Activities;
