import React from "react";
import { Grid, Container } from "@mui/material";

const LeftMenu = (props) => {
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
  
  
  const { itemList } = props;
  console.log(itemList);
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ marginTop: "50px" }}
      >
        <Grid item>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Logo.png?alt=media&token=71ae8e1c-6b35-4ed6-a817-1e0f958495a9"
            alt="AGSMAC Logo"
            width="100px"
            style={{ marginBottom: "50px" }}
          />
        </Grid>
        {/*User Image*/}
        <Container>
          <Grid
            item
            style={{ display: "flex", flexDirection: "row", width: "100%" }}
          >
            <img
              src="https://scontent.fntr10-2.fna.fbcdn.net/v/t1.6435-9/153605599_10158911782994793_5107387199032886651_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGwd_DdZCoyptesCB75bpFwZ8Pwz6pNAR5nw_DPqk0BHhWA2UULqM9sfHLIPAEb1F-UUsLqX0KnIKIOnngOrLs1&_nc_ohc=Q9dbs1I_K7wAX8p_i9H&_nc_ht=scontent.fntr10-2.fna&oh=00_AT-qQ1Rsq0L4ajJ0rxvgXWny44Mo1xeW9iZ-A3gk8MCFvQ&oe=6262AAC6"
              alt="Sergio's image"
              width="75px"
              style={{
                border: "0px",
                borderRadius: "50%",
                marginRight: "20px",
              }}
            />
            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "#2E2270",
                  fontWeight: "600",
                  fontSize: "14px",
                  margin: "0px",
                }}
              >
                Sergio Marquez
              </p>
              <p
                style={{
                  color: "#959595",
                  fontWeight: "300",
                  fontSize: "12px",
                  margin: "0px",
                }}
              >
                Scouters y dirigentes
              </p>
            </div>
          </Grid>
        </Container>

        <Container style={{ marginTop: "50px" }}>
          {/*Items List*/}
          {itemList.map((item) => {
            return (
              <div
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  "&:hover": {
                    color: "#F5F5F5",
                  },
                }}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  width="30px"
                  style={{
                    marginRight: "20px",
                    filter:
                      "invert(13%) sepia(26%) saturate(6434%) hue-rotate(240deg) brightness(93%) contrast(97%)",
                  }}
                />
                <span style={{ color: "#2E2270", fontWeight: "bold" }}>
                  {item.text}
                </span>
              </div>
            );
          })}
      
          
          <button style={{ marginTop: "300px", padding:'0px 0px 30px 0px', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'white', border:'0px' }}>
            <div style={{backgroundColor:'#2E2270', borderRadius:'10px',width:'60px', height:'60px', display:'flex', justifyContent: 'center', alignItems:'center', marginRight:'20px'}}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/exit.png?alt=media&token=ab13e07a-2ec0-4ac7-a2fb-9305af339d40"
              style={{
                filter:
                  "invert(100%) sepia(73%) saturate(0%) hue-rotate(106deg) brightness(111%) contrast(100%)",
                width:'40px'
              }}
            />
            </div>
            <span style={{color:'#2E2270', fontWeight:'bold', fontSize:'20px'}}>Salir</span>
          </button>
        </Container>
      </Grid>
    </>
  );
};

export default LeftMenu;
