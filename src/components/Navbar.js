import React, {useState} from "react";
import {
  Grid,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CoolButton from "./CoolButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = (props) => {
  const [anchor, setAnchor] = useState(null);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  }
  const handleClose = () => {
    setAnchor(null);
  }
  const pages = ["Grupos", "Mapa"];
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const stick = window.pageYOffset;
  return (
    <div style={{ width: "100%", position: "fixed", zIndex: "10" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#f7f7f7",
          boxShadow: "none",
          position: `${stick > 100 ? "fixed" : "inherit"}`,
          top: "0",
          right: 0,
          height: "100px",
          paddingTop: "10px",
        }}
      >
        <Container>
          <Toolbar style={{ width: "100%" }}>
            <div
              style={{
                display: `${matches ? "flex" : "none"}`,
                justifycontent: "flex-start",
                width: "100%",
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Logo.png?alt=media&token=71ae8e1c-6b35-4ed6-a817-1e0f958495a9"
                alt="AGSMAC Logo"
                width="200px"
              />
            </div>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{color: "#2E2270",}}
                onClick={handleClick}
              >
                <MenuIcon 
                  sx={{fontSize:'35px'}}
                />
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleClose}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center', color:'#2E2270' }}
            >
              LOGO
            </Typography> */}
            <Box
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center', }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Logo.png?alt=media&token=71ae8e1c-6b35-4ed6-a817-1e0f958495a9"
                alt="AGSMAC Logo"
                width="200px"
              />
            </Box>
            <Box sx={{display: {xs:'none', md:'flex'}}}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  color: "#2e2270",
                  display: "block",
                  marginRight: "20px",
                  fontSize: "16px",
                }}
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
