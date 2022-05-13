//React Imports
import React, { useState } from "react";
//Third Party Libraries
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useTheme } from "@mui/material/styles";
import { Navigate, useNavigate } from "react-router-dom";
//Local Components
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import GroupsList from "../../components/GroupsList";
import NewGroupModal from "../../components/GroupsList/NewGroupModal";
//Context
import { useAuth } from "../../context/AuthContext";

const Groups = (props) => {
  const { pageName } = props;
  const navigate = useNavigate();
  const theme = useTheme();
  const { LogOut } = useAuth();
  //LeftDrawer Hooks
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const handleFileChange = (e) => setSelectedImage(e.target.files[0]);
  const handleFileChange2 = (e) => setSelectedImage2(e.target.files[0]);
  //Styles
  const buttonWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0px 20px 0px",
  };
  const mainButton = {
    width: "500px",
    p: 2,
    backgroundColor: "#2E2270",
    color: "white",
    "&: hover": {
      backgroundColor: "#CAC6E8",
      color: "#2E2270",
    },
  };
  return (
    <>
      {JSON.parse(localStorage.getItem("user")).uid.length > 0 ? (
        <Box sx={{ display: "flex" }}>
          <LeftDrawer
            open={open}
            setOpen={setOpen}
            theme={theme}
            pageName={pageName}
            navigate={navigate}
            LogOut={LogOut}
          />
          <Box
            component="main"
            sx={{
              width: "100%",
              p: 3,
              marginTop: "60px",
              backgroundColor: "#F2F7FA",
            }}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid item lg={6} sx={buttonWrapper}>
                <Button sx={mainButton} onClick={() => setOpenModal(true)}>
                  Agregar Grupo
                </Button>
              </Grid>
              <Grid item lg={6} sx={buttonWrapper}>
                <Button sx={mainButton}>Actualizar Grupo</Button>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={6}
              direction="row"
              justify="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid item>
                <GroupsList />
              </Grid>
              <Grid item>
                <GroupsList />
              </Grid>
              <Grid item>
                <GroupsList />
              </Grid>
            </Grid>
            <NewGroupModal
              open={openModal}
              handleClose={handleClose}
              selectedImage={selectedImage}
              selectedImage2 = {selectedImage2}
              handleFileChange={handleFileChange}
              handleFileChange2= {handleFileChange2}
            />
          </Box>
        </Box>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
export default Groups;
