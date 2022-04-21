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
const Direccion = (props) => {
  const {scoutData, setScoutData} = props;
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
          defaultValue= {scoutData.calle}
          variant="outlined"
          sx={inputTextField}
          onChange={(e)=>{
            setScoutData({...scoutData,calle:e.target.value})
          }}
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
          defaultValue = {scoutData.num_exterior}
          variant="outlined"
          sx={inputTextField}
          onChange={(e)=>{
            setScoutData({...scoutData,num_exterior:e.target.value})
          }}
        />
        <TextField
          id="scout-id"
          label="Opcional - # Interior"
          variant="outlined"
          defaultValue = {scoutData.num_interior}
          sx={inputTextField}
          style={{ marginLeft: "20px" }}
          onChange={(e)=>{
            setScoutData({...scoutData,num_interior:e.target.value})
          }}
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
          defaultValue = {scoutData.colonia}
          variant="outlined"
          sx={inputTextField}
          onChange={(e)=>{
            setScoutData({...scoutData,colonia:e.target.value})
          }}
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
          defaultValue = {scoutData.cp}
          variant="outlined"
          sx={inputTextField}
          onChange={(e)=>{
            setScoutData({...scoutData,cp:e.target.value})
          }}
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
          defaultValue = {scoutData.delegacion}
          variant="outlined"
          sx={inputTextField}
          onChange={(e)=>{
            setScoutData({...scoutData,delegacion:e.target.value})
          }}
        />
      </FormControl>
    </>
  );
};
export default Direccion;
