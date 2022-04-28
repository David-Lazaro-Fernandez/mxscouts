//React Imports
import React from "react";
//Third Party Libraries
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
//Right and Left Menu Items
import { leftMenuItemList } from "./LeftDrawerItems";
import { rightMenuItemList } from "./Items";
//Context
import { useAuth } from "../../context/AuthContext";

const LeftDrawer = (props) => {
  const { open, setOpen, theme, pageName, LogOut, navigate } = props;
  const { currentUser } = useAuth();

  const user = JSON.parse(localStorage.getItem("user"));

  //Styles
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

  const iconButtonStyle = {
    backgroundColor: "white",
    borderRadius: "5px",
    ...(open && { display: "none" }),
  };
  const appBarStyle = {
    backgroundColor: "white",
    boxShadow: "none",
    backgroundColor: "#F2F7FA",
  };
  const pageNameStyle = {
    color: "#2E2270",
    width: "100%",
    textAlign: "center",
    fontWeight: "500",
    fontSize: "28px",
  };
  const userWrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0px 20px 0px",
  };
  const profilePictureStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: open ? "10px" : "0px",
  };
  const itemButtonStyle = {
    minHeight: 48,
    justifyContent: open ? "initial" : "center",
    px: 2.5,
  };
  const fullNameStyle = { display: open ? "block" : "none", color: "#2E2270" };
  const itemTextStyle = { opacity: open ? 1 : 0, color: "#2E2270" };
  const iconWrapper = {
    minWidth: 0,
    mr: open ? 3 : "auto",
    justifyContent: "center",
  };
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={appBarStyle}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            sx={iconButtonStyle}
          >
            <MenuIcon sx={{ color: "#2E2270" }} />
          </IconButton>
          <Typography noWrap component="div" sx={pageNameStyle}>
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
            alt="AGSMAC LOGO"
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
        <Box sx={userWrapper}>
          <img
            src={localStorage.getItem("profilePicture").replace(/"/g, "")}
            alt="Profile Picture"
            style={profilePictureStyle}
          />
          <div>
            <Typography component="div" variant="subtitle2" sx={fullNameStyle}>
              {JSON.parse(localStorage.getItem("user")).nombre_completo}
            </Typography>
            <Typography component="div" variant="body2" sx={fullNameStyle}>
              {JSON.parse(localStorage.getItem("user")).seccion}
            </Typography>
          </div>
        </Box>
        <Divider />
        <List>
          {leftMenuItemList.map((item) => (
            <ListItemButton
              key={item.text}
              sx={itemButtonStyle}
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
                  alt="Item image"
                  width="25px"
                  style={{
                    filter:
                      "invert(13%) sepia(26%) saturate(6434%) hue-rotate(240deg) brightness(93%) contrast(97%)",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={item.text} sx={itemTextStyle} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <List>
          {rightMenuItemList.map((item) => (
            <ListItemButton
              key={item.text}
              sx={itemButtonStyle}
              component="a"
              href={item.href}
            >
              <ListItemIcon sx={iconWrapper}>
                <img
                  src={item.img}
                  alt="Second item List image"
                  width="25px"
                  style={{
                    filter:
                      "invert(13%) sepia(26%) saturate(6434%) hue-rotate(240deg) brightness(93%) contrast(97%)",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={itemTextStyle}
              />
            </ListItemButton>
          ))}
        </List>

        <Divider />
        <List>
          <ListItemButton
            key={1}
            sx={itemButtonStyle}
            component="a"
            onClick={() => {
              LogOut();
              localStorage.clear();
              navigate("/Login");
            }}
          >
            <ListItemIcon sx={iconWrapper}>
              <LogoutIcon sx={{ color: "#2E2270" }} />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesión" sx={itemTextStyle} />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};
export default LeftDrawer;
