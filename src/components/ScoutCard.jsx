import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
const ScoutCard = (props) => {
    const {image, name,  background, fontColor} = props;
    return (
        <div>
            <Card
            style={{
                backgroundColor: `#${background}`,
                color: `#${fontColor}`,
                boxShadow: '0px 13px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                height: '150px',
                
            }}>
                <Grid 
                container 
                spacing={0}
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                    height: '100%',
                }}>
                    <Grid item xs={6} sm={6}>
                        <img src={image} 
                        style={{
                            width: '100px',
                            display:'block',
                            marginLeft: 'auto',
                            marginRight:'auto',
                        }}
                        alt="Logo de la tropa"
                        />
                    </Grid>    
                    <Grid item xs={5} sm={5}>
                        <h3
                        style={{
                            textAlign: 'center',
                        }}>{name}</h3>
                    </Grid>    
                </Grid>
            </Card>    
        </div>
    );
}

export default ScoutCard;