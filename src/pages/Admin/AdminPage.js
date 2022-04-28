//React Imports
import React, { useState, useEffect } from "react";
//Third Party Libraries
import { useNavigate, Navigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
//Local Components
import MidDashboard from "../../components/MidDashBoard/MidDashboard";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
//Firebase Functions
import {
  getActivities,
  getScoutsWithoutCredentials,
  getScouts,
} from "../../firebase.config";
//Context
import { useAuth } from "../../context/AuthContext";

const AdminPage = (props) => {
  //Navigation
  const navigate = useNavigate();
  //User context
  const { LogOut, currentUser, getCurrentUser } = useAuth();
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

  //Styles
  const mainBox = { display: "flex" };
  const main = {
    width: "100%",
    p: 3,
    marginTop: "60px",
    backgroundColor: "#F2F7FA",
  };
  const circularProgressWrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };
  const circularProgress = { color: "#2E2270", marginTop: "100px" };
  return (
    <>
      {JSON.parse(localStorage.getItem("user")).uid.length > 0 ? (
        <Box sx={mainBox}>
          <LeftDrawer
            open={open}
            setOpen={setOpen}
            theme={theme}
            pageName={pageName}
            navigate={navigate}
            LogOut={LogOut}
          />
          <Box component="main" sx={main}>
            {fetched ? (
              <MidDashboard
                ActivitiesItems={activities}
                ScoutsWithoutCredential={scoutsWithoutCredential}
                Scouts={scouts}
              />
            ) : (
              <div style={circularProgressWrapper}>
                <CircularProgress sx={circularProgress} />
              </div>
            )}
          </Box>
        </Box>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default AdminPage;
