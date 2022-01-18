import React from 'react';
import {useStyles} from '../styles/FAQStyle';
import Grid from '@mui/material/Grid';

const FAQ = (props) => {
    const classes = useStyles();
    const {image, icon, question, answer} = props;
    return( 
        <div style={{backgroundColor:'#ffffff', height:'100%',}}>
            <Grid 
            container 
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                   <img src={image} alt="image" style={{
                          width: '100%',
                          height: '225px',
                          objectFit: 'cover',
                   }}/>
                   <img src={icon} alt="icon"
                   style={{
                          width: '50px',
                          postion: 'relative',
                          
                          '&:after':{
                                content: '""',
                                display: 'block',
                                width: '100%',
                                height: '100%',
                                borderRadius:'100px',
                                backgroundColor: '#E7E4FA',
                          }
                   }}/>

                   <Grid 
                   container
                   spacing={0}
                   direction="row"
                   alignItems="center"
                   jistifyContent="center">

                   </Grid>
                   <Grid 
                    container
                    spacing={0}
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    >
                       <h3
                       style={{
                        color:'#2E2270',
                        fontFamily: 'Roboto',
                        fontSize:'24px',
                        fontWeight: 'bold',
                        margin: '0px 25px 0px 25px',
                       }}>{question}</h3>
                       <p style={{
                            color:'#5A537C',
                            fontFamily: 'Roboto',
                            fontSize: '16px',
                            fontWeight: '300',
                            margin: '10px 25px 25px 25px',
                            lineHeight:'23px',
                        }}>{answer}</p>
                   </Grid> 
                </Grid>
            </Grid>
        </div>    
    )
}


export default FAQ;