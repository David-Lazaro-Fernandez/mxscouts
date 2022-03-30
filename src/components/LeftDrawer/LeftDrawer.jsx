import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  CssBaseline,
  Toolbar,
} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Inbox';
const LeftDrawer = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" anchor="left">
        <Toolbar />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <img src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/home%20icon.png?alt=media&token=500ed7b9-beff-4d9b-b57b-90c7ab969b6c" width="25px"/>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        </Drawer>
      </Box>
    </>
  );
};
export default LeftDrawer;
