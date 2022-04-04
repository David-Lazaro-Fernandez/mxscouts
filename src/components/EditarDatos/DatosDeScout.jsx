import React from 'react';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const DatosDeScout = () =>{
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
         {/*Section*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Sección
        </Typography>
        <TextField
          select
          id="scout-id"
          label="Sección"
          variant="outlined"
          sx={inputTextField}
        >
          {['CC','JCC','ML','JML','MG','JMG','TS','JTS','TMS','JTMS','CR','JCR','CP','JCP','SN','JSN'].map((item,index)=>{
              return(
                  <>
                    <MenuItem value={index}>{item}</MenuItem>
                  </>
              )
          })}

        </TextField>
      </FormControl>
      {/*Group*/}
      <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Grupo
        </Typography>
        <TextField
          select
          id="scout-id"
          label="Grupo"
          variant="outlined"
          sx={inputTextField}
        >
          {[1,2,3,4,5,6,7,8,9,10].map((item,index)=>{
              return(
                  <>
                    <MenuItem value={index}>{item}</MenuItem>
                  </>
              )
          })}

        </TextField>
      </FormControl>
       {/*Group*/}
       <FormControl fullWidth sx={inputBox}>
        <Typography variant="h6" sx={inputText}>
          Grupo 2
        </Typography>
        <TextField
          select
          id="scout-id"
          label="Grupo 2"
          variant="outlined"
          sx={inputTextField}
        >
          {['Torreon','Guadalajara','Santa Fe','Apodaca','San Nicolas','Cordoba','Nogales','Contry','Tlanepantla','León',].map((item,index)=>{
              return(
                  <>
                    <MenuItem value={index}>{item}</MenuItem>
                  </>
              )
          })}

        </TextField>
      </FormControl>
        </>
    )
}
export default DatosDeScout;