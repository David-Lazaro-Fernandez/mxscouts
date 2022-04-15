import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import Activities from "../../components/Tables/Activities";

import { getActivities } from "../../firebase.config";

import {useAuth} from '../../context/AuthContext';

const ActivitiesTablePage = (props) => {
  const { pageName } = props;
  const navigate = useNavigate();
  const {LogOut} = useAuth()
  //LeftDrawer hooks
  const theme = useTheme();
  const [open, setOpen] = useState(false)
  //Activities hooks
  const [activities, setActivities] = useState([])
  const [fetched, setFetched] = useState(false)

  useEffect(() => {
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
          <Activities ActivitiesList={activities} />
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
export default ActivitiesTablePage;
