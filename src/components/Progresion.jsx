import React from 'react';
import { Grid, Container } from '@mui/material';

const Progresion = (props) => {
    const {tropasArray, numero} = props;
    const tropa = tropasArray[0];

    const adelantoProgresivo = tropa[numero].adelantoProgresivo;
    const insigniaMaxima = tropa[numero].insigniaMaxima;
    const nombreInsigniaMaxima = tropa[numero].nombreInsigniaMaxima;
    const rangosIconos = tropa[numero].rangosIconos;
    const rangos = tropa[numero].rangos;
    const especialidades = tropa[numero].especialidades;
    const especialidadesIconos = tropa[numero].especialidadesIconos;

    const arrayRangosIconos = [];
    const arrayRangos = [];
    const arrayEspecialidadesIconos = [];
    const arrayEspecialidades = [];
    let i = 0;  
    for(const icono in rangosIconos){
        arrayRangosIconos.push(<img src={rangosIconos[icono]} style={{width:'60px'}} alt="Imagen de rango" alt={`Imagen de rango ${i}`}/>);
        i++;
    }
    for(const rango in rangos){
        arrayRangos.push(<p key={i} style={{color:'#2E2270', textAlign:'center',}}>{rangos[rango]}</p>)
        i++;
    }
    for(const icono in especialidadesIconos){
        arrayEspecialidadesIconos.push(<img src={especialidadesIconos[icono]} style={{width:'60px'}}/>);
    }
    for(const especialidad in especialidades){
        arrayEspecialidades.push(<p style={{color:'#2E2270', textAlign:'center',}}>{especialidades[especialidad]}</p>)
        i++;
    }

    console.log(tropa)
    
    return(
        <div>
            <Container fixed>
                <Grid container spacing={0} direction="column" alignItems="center" justify="center">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <p style={{textAlign: 'center', color:'#2E2270'}}>{adelantoProgresivo}</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom:'0px'}}>
                        <h3 style={{textAlign: 'center', color:'#2E2270', fontSize:'28px'}}>Insignia Máxima</h3>
                        <h2 style={{textAlign: 'center', color:'#2E2270'}}>{nombreInsigniaMaxima}</h2>
                        <img src={insigniaMaxima} style={{width:'150px'}} alt="Imagen de la insignia máxima"/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <h2 style={{textAlign: 'center', color:'#2E2270'}}>Rangos</h2>
                        {arrayRangos.map((element,index) => {
                            return(
                            <div key={index} style={{display:'flex', justifyContent: 'center', alignItems: 'center', marginBottom:'20px', marginTop:'20px'}}>
                                <div style={{marginRight:'25px'}}>{element}</div>
                                {arrayRangosIconos[index]}
                                
                            </div>   
                        )})}
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h2 style={{textAlign: 'center', color:'#2E2270'}}>Especialidades</h2>  
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            {arrayEspecialidades.map((element,index) => {
                                return(
                                    <div key={index} style={{display:'flex', justifyContent: 'center', alignItems: 'center', marginBottom:'20px', marginTop:'20px'}}>
                                        <div style={{marginRight:'25px'}}>{element}</div>
                                        {arrayEspecialidadesIconos[index]}
                                    </div>   
                                )})}
                    </Grid>
                    
                </Grid>
            </Container>
        </div>
    )
}

export default Progresion;