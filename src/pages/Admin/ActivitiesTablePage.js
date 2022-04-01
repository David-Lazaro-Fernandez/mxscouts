import React, { useEffect, useState } from "react";
import { Grid, CssBaseline, CircularProgress } from "@mui/material";
import { getActivities } from "../../firebase.config";
import Activities from "../../components/Tables/Activities";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import RightMenu from "../../components/RightMenu";

const ActivitiesTablePage = () => {
  const [activities, setActivities] = useState([]);
  const [fetched, setFetched] = useState(false);
  const windowHeight = window.innerHeight;
  useEffect(() => {
    const fetchData = async () => {
      //Fetch all scouts
      const activitiesQuerySnapshot = await getActivities();
      activitiesQuerySnapshot.forEach(doc =>{
        setActivities(prevData => [...prevData, 
        {
          id: doc.data().id,
          organizator_cia: doc.data().organizator_cia,
          activity_name: doc.data().activity_name,
          start_hour: doc.data().start_hour,
          finish_hour: doc.data().finish_hour,
          date: new Date(doc.data().date.seconds * 1000).toLocaleDateString(),
          assistants: doc.data().assistants,
          observations: doc.data().observations,
        }])
      })
      setFetched(true);
    };

    fetchData();
  }, []);

  return (
    <div
      style={{ backgroundColor: "#F2F7FA", height: `${window.innerHeight}px` }}
    >
      <CssBaseline />
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ heigth: "100%" }}
      >
        <Grid
          item
          lg={2}
          sx={{ backgroundColor: "white", textAlign: "center" }}
        >
          <LeftDrawer />
        </Grid>
        <Grid
          item
          lg={9}
          sx={{ backgroundColor: "#F2F7FA", textAlign: "center" }}
        >
          {fetched ? <Activities ActivitiesList={activities} /> : <CircularProgress sx={{color:'#2E2270'}} />}
        </Grid>
        <Grid
          item
          lg={1}
          sx={{
            backgroundColor: "#F2F7FA",
            textAlign: "center",
            height: `${windowHeight}px`,
            display: "flex",
            borderLeft: "1px solid #E1E1E1",
          }}
        >
          <RightMenu />
        </Grid>
      </Grid>
    </div>
  );
};

export default ActivitiesTablePage;
