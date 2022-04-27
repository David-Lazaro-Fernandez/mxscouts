//React imports
import React, { useState } from "react";
//Third Party Libraries
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  //Hooks
  const navigate = useNavigate();
  const [anchor, setAnchor] = useState(null);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = (path) => {
    setAnchor(null);
    navigate(path);
  };
  const pages = ["Inicio", "Grupos", "Ingresar", "Registrarse"];
  const paths = ["/", "/grupos", "/Login", "/SignUp"];
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const stick = window.pageYOffset;

   //Styles
   const wrapper = { width: "100%", position: "fixed", zIndex: "10" };
   const appBarStyle = {
     backgroundColor: "#f7f7f7",
     boxShadow: "none",
     position: `${stick > 100 ? "fixed" : "inherit"}`,
     top: "0",
     right: 0,
     height: "100px",
     paddingTop: "10px",
   };
   const toolbarStyle = { width: "100%" };
   const toolbarWrapper = {
     display: `${matches ? "flex" : "none"}`,
     justifycontent: "flex-start",
     width: "100%",
   };
   const boxMenuWrapper = { display: { xs: "flex", md: "none" } };
   const boxMenuIconButton = { color: "#2E2270" };
   const MenuDisplay = {
     display: { xs: "block", md: "none" },
   };
   const logoBox = {
     flexGrow: 1,
     display: { xs: "flex", md: "none" },
     justifyContent: "center",
   };
   const pagesDisplay = { display: { xs: "none", md: "flex" } };
   const pageButton = {
     color: "#2e2270",
     display: "block",
     marginRight: "20px",
     fontSize: "16px",
   };
   
  return (
    <div style={wrapper}>
      <AppBar position="static" sx={appBarStyle}>
        <Container>
          <Toolbar style={toolbarStyle}>
            <div style={toolbarWrapper}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Logo.png?alt=media&token=71ae8e1c-6b35-4ed6-a817-1e0f958495a9"
                alt="AGSMAC Logo"
                width="200px"
              />
            </div>
            <Box sx={boxMenuWrapper}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={boxMenuIconButton}
                onClick={handleClick}
              >
                <MenuIcon sx={{ fontSize: "35px" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchor}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchor)}
                onClose={handleClose}
                sx={MenuDisplay}
              >
                {pages.map((page, index) => {
                  return (
                    <MenuItem
                      key={page}
                      onClick={() => handleClose(paths[index])}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>

            <Box sx={logoBox}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Logo.png?alt=media&token=71ae8e1c-6b35-4ed6-a817-1e0f958495a9"
                alt="AGSMAC Logo"
                width="200px"
              />
            </Box>
            <Box sx={pagesDisplay}>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  href={paths[index]}
                  sx={pageButton}
                  size="large"
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
