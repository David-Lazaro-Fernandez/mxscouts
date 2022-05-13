//React imports
import React, { useState } from "react";
//Third Party Libraries
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
//Icons
import TitleIcon from "@mui/icons-material/Title";
import SettingsIcon from "@mui/icons-material/Settings";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from '@mui/icons-material/Schedule';
import ImageIcon from "@mui/icons-material/Image";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


const GroupsList = () => {
  
  //Style 
  const paperStyle = {
    width: "100%",
    p: 3,
    marginTop: "60px",
    backgroundColor: "white",
  };
  const actionStyle = {
    m: 1,
  };
  const mediaStyle = {
    height: "200px",
    width: "400px",
  };
  const content = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "20px 0px 20px 0px",
  };
  const icon = {
    marginRight: "10px",
  };
  const activeCircle = {
    position: "absolute",
    width: "50px",
    height: "50px",
    border: "solid white 3px",
    borderRadius: "50%",
    backgroundColor: "#2E2270",
    top:'210px',
    right:'10px',
    display:'flex', 
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row',
  };
  const cardWrapper = {
    position: "relative",
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Card sx={cardWrapper}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="Scout Group Shield"
                src="https://upload.wikimedia.org/wikipedia/commons/5/54/Beaver-Szmurlo.jpg"
              ></Avatar>
            }
            action={
              <IconButton
                sx={actionStyle}
                aria-label="Configure data from this group"
              >
                <SettingsIcon />
              </IconButton>
            }
            title="Grupo 1"
          />
          <CardMedia
            component="img"
            sx={mediaStyle}
            title="Grupo de castores"
            image="https://imagenes.elpais.com/resizer/QuYQAWJHqvkTsScCoEe-3FUp_zc=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/6LS4LBWAL5WM366L33B3LNVLGI.jpg"
          />
          <Box sx={activeCircle}> <Typography variant="body" color="#FFFFFF">123</Typography></Box>
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              sx={content}
            >
              <TitleIcon sx={icon} />
              Titulo del grupo
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              sx={content}
            >
              <ContentPasteIcon sx={icon} />
              Descripción
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              sx={content}
            >
              <ImageIcon sx={icon} />
              URL DE IMAGEN 1
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              sx={content}
            >
              <BrokenImageIcon sx={icon} />
              URL IMG 2
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              sx={content}
            >
              <ScheduleIcon sx={icon} />
              Horario
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              sx={content}
            >
              <CalendarTodayIcon sx={icon} />
              Dias de actividad
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              sx={content}
            >
              <LocationOnIcon sx={icon} />
              Ubicación
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
export default GroupsList;
