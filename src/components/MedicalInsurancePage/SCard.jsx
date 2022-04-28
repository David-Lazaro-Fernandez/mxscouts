//React Imports
import React from "react";
//Third Party Libraries
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const SCard = (props) => {
  const {data} = props;
    return (
    <>
      <Card sx={{height: "250px"}}>
        <CardContent sx={{height:'175px'}}>
          <Typography sx={{ fontSize: "12px", color: '#2E2270'}}>{data.grupo}</Typography>
          <Typography variant="h5" sx={{color: '#2E2270'}}>{data.nombre_completo}</Typography>
          <Typography variant="body" sx={{color: '#2E2270'}}>{data.seccion}</Typography>
          <Typography variant="body2" sx={{color: '#2E2270'}}>{data.correo_electronico}</Typography>
          <Typography variant="body2" sx={{color: '#2E2270'}}>{data.seguro}</Typography>
        </CardContent>
        <CardActions  style={{display:'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'flex-end', }}>
          <Button sx={{color:'#2E2270'}} >Actualizar seguro</Button>
        </CardActions>
      </Card>
    </>
  );
};
export default SCard;
