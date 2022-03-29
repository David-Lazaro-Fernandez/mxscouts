import React from 'react';
import {Grid, Container, Paper, Typography, Link} from '@mui/material';
import ActivitiesTable from './ActivitiesTable';

const MidDashboard = (props) =>{
    const {ActivitiesItems} = props;
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
                        <Paper sx={{p:2, display:'flex', flexDirection:'column', alignItems: 'flex-start', height:'200px', width:'400px'}}>
                                <Typography variant="h5" color="#2E2270" sx={{fontWeight:'500', fontSize:'18px',}}>
                                    # Actividades del año
                                </Typography>
                                <Typography variant="h4" sx={{fontSize:'36px'}}>
                                    23
                                </Typography>
                                <Typography variant="body" sx={{fontSize:'12px'}} color="#959595">
                                    Ultimo registro: 23 de enero del 2022 a las 13:00 PM
                                </Typography>

                                <div style={{marginTop:'50px'}}>
                                <Link color="#2E2270" href="#" sx={{textAlign:'left'}}>Ver todas las actividades del año</Link>
                                </div>
                            </Paper>  
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                        <Paper sx={{p:2, display:'flex', flexDirection:'column', alignItems: 'flex-start', height:'200px', width:'400px'}}>
                                <Typography variant="h5" color="#2E2270" sx={{fontWeight:'500', fontSize:'18px',}}>
                                    # Scouts Registrados
                                </Typography>
                                <Typography variant="h4" sx={{fontSize:'36px'}}>
                                    3000
                                </Typography>
                                <Typography variant="body" sx={{fontSize:'12px'}}  color="#959595">
                                    Ultimo registro: 12 de marzo del 2022 a las 10:00 PM
                                </Typography>

                                <div style={{marginTop:'50px'}}>
                                <Link color="#2E2270" href="#" sx={{textAlign:'left'}}>Ver todos los registros</Link>
                                </div>
                            </Paper>  
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