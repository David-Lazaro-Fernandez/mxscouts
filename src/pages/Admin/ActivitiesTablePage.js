//React Imports
import React, { useState, useEffect } from "react";
//Third Party Libraries
import { useNavigate, Navigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
//Local components
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import Activities from "../../components/Tables/Activities";
//Firebase Functions
import { getActivities } from "../../firebase.config";
//Context
import { useAuth } from "../../context/AuthContext";

const ActivitiesTablePage = (props) => {
  const { pageName } = props;
  const navigate = useNavigate();
  const { LogOut, currentUser } = useAuth();
  //LeftDrawer hooks
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  //Activities hooks
  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState({});
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    //Gets user from localStorage
    const u = JSON.parse(localStorage.getItem("user"));
    setUser({ ...user, ...u });

    const fetchData = async () => {
      //Fetch all scouts
      const activitiesQuerySnapshot = await getActivities();
      activitiesQuerySnapshot.forEach((doc) => {
        setActivities((prevData) => [
          ...prevData,
          {
            id: doc.data().id,
            organizator_cia: doc.data().organizator_cia,
            activity_name: doc.data().activity_name,
            start_hour: doc.data().start_hour,
            finish_hour: doc.data().finish_hour,
            date: new Date(doc.data().date.seconds * 1000).toLocaleDateString(),
            assistants: doc.data().assistants,
            observations: doc.data().observations,
          },
        ]);
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
              <Activities ActivitiesList={activities} />
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
export default ActivitiesTablePage;
