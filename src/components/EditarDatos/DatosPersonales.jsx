import React from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Typography from "@mui/material/Typography";
const DatosPersonales = (props) => {
  const {
    sex,
    setSex,
    scoutData,
    setScoutData,
    birthDate,
    setBirthDate,
    currentUser,
  } = props;

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

  console.log(scoutData)
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
          defaultValue={scoutData.id}
          variant="outlined"
          sx={inputTextField}
          onChange={(e) => {
            setScoutData({ ...scoutData, id: e.target.value });
          }}
        />
      </FormControl>
      {/*Sexo*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Sexo
        </Typography>
        <TextField
          select
          id="scout-sex"
          label="Sexo"
          variant="outlined"
          value={sex}
          onChange={(e) => {
            setSex(e.target.value);
            setScoutData({ ...scoutData, sexo: e.target.value });
          }}
          sx={inputTextField}
        >
          <MenuItem value={"Masculino"}>Masculino</MenuItem>
          <MenuItem value={"Femenino"}>Femenino</MenuItem>
        </TextField>
      </FormControl>
      {/*Name(s)*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Nombre(s)
        </Typography>
        <TextField
          id="scout-names"
          label="Nombres"
          defaultValue={scoutData.nombres}
          variant="outlined"
          sx={inputTextField}
          onChange={(e) => {
            setScoutData({ ...scoutData, nombres: e.target.value });
          }}
        />
      </FormControl>
      {/*Last Names*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Apellidos
        </Typography>
        <TextField
          id="scout-last-name-1"
          label="Apellido Paterno"
          defaultValue={scoutData.apellido_paterno}
          variant="outlined"
          sx={inputTextField}
          onChange={(e) => {
            setScoutData({ ...scoutData, apellido_paterno: e.target.value });
            console.log(scoutData.apellido_paterno);
          }}
        />
        <TextField
          id="scout-last-name-2"
          label="Apellido Materno"
          defaultValue={scoutData.apellido_materno}
          variant="outlined"
          sx={inputTextField}
          style={{ marginLeft: "20px" }}
          onChange={(e) => {
            setScoutData({ ...scoutData, apellido_materno: e.target.value });
            console.log(scoutData.apellido_materno);
          }}
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
            value={birthDate}
            onChange={(e) => {
              setBirthDate(e);
              setScoutData({ ...scoutData, fecha_de_nacimiento: birthDate });
            }}
            renderInput={(params) => (
              <TextField {...params} sx={{ width: "100%" }} />
            )}
          />
        </LocalizationProvider>
      </FormControl>
      {/*Email*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Correo Electronico
        </Typography>
        <TextField
          id="scout-id"
          label="Correo Electronico"
          defaultValue={scoutData.correo_electronico}
          variant="filled"
          disabled
          sx={inputTextField}
          onChange={(e) => {
            setScoutData({ ...scoutData, correo_electronico: e.target.value });
            console.log(scoutData.correo);
          }}
        />
      </FormControl>
      {/*Home Phone Number*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Telefono De Casa
        </Typography>
        <TextField
          id="scout-id"
          label="Telefono de Casa"
          defaultValue={scoutData.telefono_casa}
          variant="outlined"
          sx={inputTextField}
          onChange={(e) => {
            setScoutData({ ...scoutData, telefono_casa: e.target.value });
          }}
        />
      </FormControl>
      {/*Emergency Phone Number*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Telefono De Emergencia
        </Typography>
        <TextField
          id="scout-id"
          label="Telefono de Emergencia"
          defaultValue={scoutData.telefono_emergencia}
          variant="outlined"
          sx={inputTextField}
          onChange={(e) => {
            setScoutData({ ...scoutData, telefono_emergencia: e.target.value });
          }}
        />
      </FormControl>
    </>
  );
};
export default DatosPersonales;
