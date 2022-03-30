import React from 'react';
import {Grid, Container, Paper, Typography, Link} from '@mui/material';
import ActivitiesTable from './ActivitiesTable';
import NumberOfActivities from './NumberOfActivities';
import NumberOfScouts from './NumberOfScouts';
import ScoutsWithNoCredential from './ScoutsWithNoCredential';
const MidDashboard = (props) =>{
    const {ActivitiesItems, ScoutsWithoutCredential, Scouts} = props;
    return(
        <>  
        <Container>
        <Grid
              container
              spacing={9}
              direction="column"
              justify="center"
              alignItems="center"
            >
                <Grid item>
                    <Grid 
                    container
                    direction="row"
                    spacing={4}>
                        <Grid item xs={12} md={6} lg={6}>
                          <NumberOfActivities />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <NumberOfScouts Scouts={Scouts}/>
                        </Grid>
                        <Grid item xs ={12}>
                            <ScoutsWithNoCredential noCredentialScoutList={ScoutsWithoutCredential} Scouts={Scouts}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                    <ActivitiesTable ActivitiesItems = {ActivitiesItems}/>
                </Grid>
            </Grid>
        </Container>
            
        </>
    )
}

export default MidDashboard;