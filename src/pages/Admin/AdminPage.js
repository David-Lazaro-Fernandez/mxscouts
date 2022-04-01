import React, { useState, useEffect } from "react";
import {
  Grid,
  Container,
  CssBaseline,
  CircularProgress,
} from "@mui/material";

import RightMenu from "../../components/RightMenu";
import MidDashboard from "../../components/MidDashBoard/MidDashboard";
import LeftDrawer from '../../components/LeftDrawer/LeftDrawer';
import RightDrawer from "../../components/RightDrawer/RightDrawer";
import {getActivities, getScoutsWithoutCredentials, getScouts} from '../../firebase.config';



const windowHeight = window.innerHeight

const AdminPage = () => {

  const [activities, setActivities] = useState([])
  const [scouts, setScouts] = useState([])
  const [scoutsWithoutCredential, setScoutsWithoutCredentials] = useState([])
  const [fetched, setFetched] = useState(false)

  useEffect(()=>{
    const fetchData = async() =>{
      //Fetch recent activities
      const querySnapshot = await getActivities()
      querySnapshot.forEach(doc =>{
        setActivities((prevData) => [...prevData, doc.data()])
      } )

      //Fetch all scouts 
      const scoutQuerySnapshot = await getScouts()
      scoutQuerySnapshot.forEach(doc =>{
        setScouts((prevData) => [...prevData, doc.data()])
      })

      //Fetch scouts without credentials
      const noCredentialQuerySnapshot = await getScoutsWithoutCredentials()
      noCredentialQuerySnapshot.forEach(doc =>{
        setScoutsWithoutCredentials(prevData => [...prevData, doc.data()])
      })
      setFetched(true);
    }

    fetchData();
  },[]);

  

  return (
    <div
      style={{ backgroundColor: "#F2F7FA", height: `${window.innerHeight}px`, marginTop:'25px' }}
    >
      <CssBaseline />
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ heigth: "100%",  }}
        
      >
        <Grid item lg={2} md={2} sx={{ backgroundColor: "white", textAlign:'center' }}>
          <LeftDrawer/>
          {/* <LeftMenu
          itemList = {leftMenuItemList}
          /> */}
        </Grid>
        <Grid item lg={9} md={8} sx={{ backgroundColor: "#F2F7FA",  textAlign:'center'}}>
          <Container>
          {
            fetched ? (
            <MidDashboard
              ActivitiesItems = {activities}
              ScoutsWithoutCredential={scoutsWithoutCredential}
              Scouts = {scouts}
            />    
            ) : (
              <CircularProgress sx={{color:'#2E2270'}} />
            ) 
          }
          </Container>
          
          
        </Grid>
        <Grid item lg={1} md ={2} sx={{ backgroundColor: "#F2F7FA", textAlign:'center', height:`${windowHeight}px`, display:'flex', borderLeft:'1px solid #E1E1E1'}}>
          {/* <RightMenu /> */}
          <RightDrawer/>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminPage;
