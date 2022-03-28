import React, { useState } from "react";
import {
  Grid,
  CssBaseline,
} from "@mui/material";
import LeftMenu from '../components/LeftMenu';
import RightMenu from "../components/RightMenu";

const leftMenuItemList = [
  {
    key:'1',
    alt:'Home Icon',
    img:'https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/home%20icon.png?alt=media&token=500ed7b9-beff-4d9b-b57b-90c7ab969b6c',
    text:'Inicio',
  },
  {
    key:'2',
    alt:'Tables Icon',
    img:'https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Black%20Tables%20Icon.png?alt=media&token=48affde3-0c79-49bd-bcac-605e098bfebb',
    text:'Ver Tablas',
  },
  {
    key:'3',
    alt:'Person Icon',
    img:'https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/person.png?alt=media&token=c1801389-9052-43b9-bb63-9a113aaa67a5',
    text:'Ver mis datos',
  },
  {
    key:'4',
    alt:'Google Sheets Icon',
    img:'https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Black%20Google%20Sheet.png?alt=media&token=5af228d4-145f-4ff1-90e0-2b2e6b33e606',
    text:'Google Sheets',
  },
  {
    key:'5',
    alt:'Scouter Icon',
    img:'https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/pioneer.png?alt=media&token=dd8cc8ee-5fdf-4f17-930d-61e177533657',
    text:'Lista de Scouts',
  },
  {
    key:'6',
    alt:'Health Insurance Icon',
    img:'https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Black%20Health%20Insurance.png?alt=media&token=8eafa475-973b-4162-b75a-d28302fa023c',
    text:'Seguro de cobertura',
  },
]
const rightMenuItemList = [
  {
    key:'1',
    alt:'Camping Icon',
    img:'https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/trekking.png?alt=media&token=24daa361-beb0-471c-9dbd-8df1f7c5f000',
    text:'Agregar actividad',
  },
  {
    key:'2',
    alt:'Credential Icon',
    img:'https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/card%20(1).png?alt=media&token=ef14d516-c45d-4a76-997b-b7f71203c59d',
    text:'Imprimir credencial',
  },
  {
    key:'3',
    alt:'Firebase Icon',
    img:'https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/firebase.png?alt=media&token=34cba865-1e37-44a6-813a-d0ea0bf98615',
    text:'Ir a Firebase',
  },
  {
    key:'4',
    alt:'GCP Icon',
    img:'https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Black%20GCP%20Icon.png?alt=media&token=c8849361-de57-46a9-86ed-f8a2785cf2ca',
    text:'Ir a Google Cloud Platform',
  },
]

const windowHeight = window.innerHeight
console.log(windowHeight)
const AdminPage = () => {
  
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
        sx={{ heigth: "100%",  }}
        
      >
        <Grid item lg={2} sx={{ backgroundColor: "white", textAlign:'center' }}>
          <LeftMenu
          itemList = {leftMenuItemList}
          />
        </Grid>
        <Grid item lg={9} sx={{ backgroundColor: "white",  textAlign:'center'}}>
          Hola chula
        </Grid>
        <Grid item lg={1} sx={{ backgroundColor: "#F2F7FA", textAlign:'center', height:`${windowHeight}px`, display:'flex', borderLeft:'1px solid #E1E1E1'}}>
          <RightMenu itemList={rightMenuItemList}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminPage;
