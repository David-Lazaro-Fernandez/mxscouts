import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
const SCard = (props) => {
  const {data} = props;
  console.log(data)
    return (
    <>
      <Card sx={{height: "250px"}}>
        <CardContent sx={{height:'175px'}}>
          <Typography sx={{ fontSize: "12px" }}>{data.grupo}</Typography>
          <Typography variant="h5">{data.nombre_completo}</Typography>
          <Typography variant="body">{data.seccion}</Typography>
          <Typography variant="body2">{data.correo_electronico}</Typography>
          <Typography variant="body2">{data.seguro}</Typography>
        </CardContent>
        <CardActions  style={{display:'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'flex-end', }}>
          <Button sx={{color:'#2E2270'}} >Actualizar seguro</Button>
        </CardActions>
      </Card>
    </>
  );
};
export default SCard;
