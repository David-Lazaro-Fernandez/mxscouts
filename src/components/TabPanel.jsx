import React from 'react';
import {Grid, Typography} from '@mui/material'
const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <div>
            <Grid 
            container 
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            >
                <Grid item 
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                >
                    <Typography variant="h6">
                        Ley y Normas
                    </Typography>
                    <p></p>
                </Grid>
            </Grid>
        </div>
    )
}

export default TabPanel;