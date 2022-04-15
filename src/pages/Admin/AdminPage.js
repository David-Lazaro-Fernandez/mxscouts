import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import MidDashboard from "../../components/MidDashBoard/MidDashboard";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";

import {
  getActivities,
  getScoutsWithoutCredentials,
  getScouts,
  getCurrentScout,
} from "../../firebase.config";

import {useAuth} from '../../context/AuthContext';


const AdminPage = (props) => {
  //Navigation 
  const navigate = useNavigate();
  //User context
  const {LogOut} = useAuth();
  //Left Drawer states
  const { pageName } = props;
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  //Main content states
  const [activities, setActivities] = useState([]);
  const [scouts, setScouts] = useState([]);
  const [scoutsWithoutCredential, setScoutsWithoutCredentials] = useState([]);
  const [fetched, setFetched] = useState(false);

  
  
  useEffect(() => {
    const fetchData = async () => {
      //Fetch recent activities
      const querySnapshot = await getActivities();
      querySnapshot.forEach((doc) => {
        setActivities((prevData) => [...prevData, doc.data()]);
      });

      //Fetch all scouts
      const scoutQuerySnapshot = await getScouts();
      scoutQuerySnapshot.forEach((doc) => {
        setScouts((prevData) => [...prevData, doc.data()]);
      });

      //Fetch scouts without credentials
      const noCredentialQuerySnapshot = await getScoutsWithoutCredentials();
      noCredentialQuerySnapshot.forEach((doc) => {
        setScoutsWithoutCredentials((prevData) => [...prevData, doc.data()]);
      });
      setFetched(true);
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <LeftDrawer
        open={open}
        setOpen={setOpen}
        theme={theme}
        pageName={pageName}
        navigate = {navigate}
        LogOut = {LogOut}
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
        {fetched ? (
          <MidDashboard
            ActivitiesItems={activities}
            ScoutsWithoutCredential={scoutsWithoutCredential}
            Scouts={scouts}
          />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress sx={{ color: "#2E2270", marginTop: "100px" }} />
          </div>
        )}
      </Box>
    </Box>
  );
};

export default AdminPage;
