import React from "react";

import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";

import { leftMenuItemList } from "../../LeftDrawerItems";
import { rightMenuItemList } from "./Items";

import { useAuth } from "../../context/AuthContext";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const LeftDrawer = (props) => {
  const { open, setOpen, theme, pageName, LogOut, navigate } = props;
  const { currentUser } = useAuth();
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          backgroundColor: "#F2F7FA",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ color: "#2E2270" }} />
          </IconButton>
          <Typography
            noWrap
            component="div"
            sx={{
              color: "#2E2270",
              width: "100%",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "28px",
            }}
          >
            {pageName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Logo.png?alt=media&token=71ae8e1c-6b35-4ed6-a817-1e0f958495a9"
            width="100px"
            style={{ marginRight: "50px" }}
          />
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <>
                <ChevronLeftIcon sx={{ color: "#2E2270" }} />
              </>
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0px 20px 0px",
          }}
        >
          <img
            src="https://exploringbits.com/wp-content/uploads/2022/01/Luffy-PFP-1-1024x1024.jpg"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              marginRight: open ? "10px" : "0px",
            }}
          />
          <div>
            <Typography
              component="div"
              variant="subtitle2"
              sx={{ display: open ? "block" : "none", color: "#2E2270" }}
            >
              {currentUser.nombre_completo}
            </Typography>
            <Typography
              component="div"
              variant="body2"
              sx={{ display: open ? "block" : "none", color: "#2E2270" }}
            >
              {currentUser.seccion}
            </Typography>
          </div>
        </Box>
        <Divider />
        <List>
          {leftMenuItemList.map((item) => (
            <ListItemButton
              key={item.text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              component="a"
              href={item.href}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img
                  src={item.img}
                  width="25px"
                  style={{
                    filter:
                      "invert(13%) sepia(26%) saturate(6434%) hue-rotate(240deg) brightness(93%) contrast(97%)",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0, color: "#2E2270" }}
              />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <List>
          {rightMenuItemList.map((item) => (
            <ListItemButton
              key={item.text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              component="a"
              href={item.href}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img
                  src={item.img}
                  width="25px"
                  style={{
                    filter:
                      "invert(13%) sepia(26%) saturate(6434%) hue-rotate(240deg) brightness(93%) contrast(97%)",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0, color: "#2E2270" }}
              />
            </ListItemButton>
          ))}
        </List>

        <Divider />
        <List>
          <ListItemButton
            key={1}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            component="a"
            onClick = { ()=>{
              LogOut()
              localStorage.clear()
              navigate('/Login')
            } }
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <LogoutIcon sx={{color: "#2E2270" }}/>
            </ListItemIcon>
            <ListItemText
              primary="Cerrar Sesión"
              sx={{ opacity: open ? 1 : 0, color: "#2E2270" }}
            />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};
export default LeftDrawer;
