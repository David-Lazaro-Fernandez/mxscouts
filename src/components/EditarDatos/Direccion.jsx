import React from "react";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

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
const Direccion = () => {
  return (
    <>
      {/*Street*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Calle
        </Typography>
        <TextField
          id="scout-id"
          label="Calle"
          variant="outlined"
          sx={inputTextField}
        />
      </FormControl>
      {/*Home number*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          # De Casa
        </Typography>
        <TextField
          id="scout-id"
          label="# Exterior"
          variant="outlined"
          sx={inputTextField}
        />
        <TextField
          id="scout-id"
          label="Opcional - # Interior"
          variant="outlined"
          sx={inputTextField}
          style={{ marginLeft: "20px" }}
        />
      </FormControl>
      {/*Colony*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Colonia
        </Typography>
        <TextField
          id="scout-id"
          label="Colonia"
          variant="outlined"
          sx={inputTextField}
        />
      </FormControl>
      {/*P.C*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          C.P
        </Typography>
        <TextField
          id="scout-id"
          label="C.P"
          variant="outlined"
          sx={inputTextField}
        />
      </FormControl>
      {/*City*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Delegación
        </Typography>
        <TextField
          id="scout-id"
          label="Delegación"
          variant="outlined"
          sx={inputTextField}
        />
      </FormControl>
    </>
  );
};
export default Direccion;
