import React from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Typography from '@mui/material/Typography';
const DatosPersonales = () => {
  const inputBox = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0px 20px 0px",
    minWidth: "100%",
  };
  const inputTextField = { width: "100%" };
  const inputText = {
    color: "#2E2270",
    fontWeight: "600",
    textAlign: "right",
    marginRight: "20px",
    width: "400px",
  };
  return (
    <>
      {/*ID*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          ID
        </Typography>
        <TextField
          id="scout-id"
          label="ID"
          variant="outlined"
          sx={inputTextField}
        />
      </FormControl>
      {/*Sexo*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Sexo
        </Typography>
        <TextField
          select
          id="scout-id"
          label="Sexo"
          variant="outlined"
          sx={inputTextField}
        >
          <MenuItem value={10}>Masculino</MenuItem>
          <MenuItem value={20}>Femenino</MenuItem>
        </TextField>
      </FormControl>
      {/*Name(s)*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Nombre(s)
        </Typography>
        <TextField
          id="scout-id"
          label="Nombre(s)"
          variant="outlined"
          sx={inputTextField}
        />
      </FormControl>
      {/*Last Names*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Apellidos
        </Typography>
        <TextField
          id="scout-id"
          label="Apellido Paterno"
          variant="outlined"
          sx={inputTextField}
        />
        <TextField
          id="scout-id"
          label="Apellido Materno"
          variant="outlined"
          sx={inputTextField}
          style={{ marginLeft: "20px" }}
        />
      </FormControl>
      {/*Birth Date*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Fecha de nacimiento
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Fecha de Nacimiento"
            value={null}
            renderInput={(params) => (
              <TextField {...params} sx={{ width: "100%" }} />
            )}
          />
        </LocalizationProvider>
      </FormControl>
      {/*Home Phone Number*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Telefono De Casa
        </Typography>
        <TextField
          id="scout-id"
          label="Telefono De Casa"
          variant="outlined"
          sx={inputTextField}
        />
      </FormControl>
      {/*Emergency Phone Number*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Telefono De Emergencia
        </Typography>
        <TextField
          id="scout-id"
          label="Telefono De Emergencia"
          variant="outlined"
          sx={inputTextField}
        />
      </FormControl>
    </>
  );
};
export default DatosPersonales;

