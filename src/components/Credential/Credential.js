import React, {forwardRef} from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const Credential = (props,ref) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }

  const cardStyle = {
    marginTop: "40px",
    border: "0px",
    borderRadius: "10px",
    backgroundColor: "#403897",
    width: "500px",
    height: "300px",
    position: "relative",
    overflow: "hidden",
  };
  const bar = {
    transform: "rotate(-45deg)",
    width: "500px",
    height: "75px",
    backgroundColor: "rgb(16, 15, 75)",
    position: "absolute",
    top: "125px",
    left: "71px",
    zIndex: "2",
  };
  const bar2 = {
    transform: "rotate(45deg)",
    width: "500px",
    height: "75px",
    backgroundColor: "#676AAF",
    position: "absolute",
    top: "-85px",
    left: "-0px",
    zIndex: "2",
  };
  const triangle = {
    width: "0px",
    height: "0px",
    left: "100px",
    borderLeft: "300px solid transparent",
    borderRight: "100px solid transparent",
    borderBottom: "310px solid #282081",
    position: "relative",
    left: "225px",
    zIndex: "0",
  };
  const scoutSymbolStyle = {
    width: "100px",
    height: "100px",
    position: "relative",
    left: "390px",
    top: "-130px",
  };
  const scoutSymbolImageStyle = {
    width: "75px",
  };

  const scoutImg = {
    width: "110px",
    height: "110px",
    position: "relative",
    top: "-365px",
    zIndex: 4,
    left: "360px",
    objectFit: "cover",
  };

  const agsmacLetters = {
    position: "relative",
    width: "100px",
    top: "-435px",
    left: "-117px",
  };

  const qrCode = {
    position: "relative",
    width: "50px",
    top: "-360px",
    left: "-70px",
  };

  const scoutInfoStyle = {
    position: "relative",
    top: "-425px",
    left: "105px",
    zIndex: 9,
  };

  const body = {
    color: "white",
    fontSize: "24px",
    fontWeight: "600",
  };
  const body2 = {
    color: "white",
    fontSize: "18px",
    fontWeight: "500",
  };

  const body3 = {
    color: "white",
  };

  
  return (
    <>
      <div style={containerStyle} ref={ref}>
        <Paper sx={cardStyle} elevation={8}>
          <div style={bar}></div>
          <div style={bar2}></div>
          <div style={triangle}></div>

          <div style={scoutSymbolStyle}>
            <img
              alt="SCOUT SYMBOL"
              src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/Scout%20Symbol.png?alt=media&token=3add3e4e-bf6c-4390-923b-35ba857e3a6d"
              style={scoutSymbolImageStyle}
            />
          </div>
          <img
            alt="SCOUT IMAGE"
            style={scoutImg}
            src="https://scontent.fntr10-1.fna.fbcdn.net/v/t1.6435-9/152439597_10158907814234793_441831701946878239_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFZDGg1rKYW14vH4caWlorkIkcILsqSheUiRwguypKF5WfUmeLcMaFzeIH-j8GLAeZTQnYLZ275h-h_AZj-nnYI&_nc_ohc=hvnm2PL8BgQAX_SFD35&_nc_ht=scontent.fntr10-1.fna&oh=00_AT83FTigVxtLL7ulhXFle6S-AVzweswLiHk9KE9gkm6PVQ&oe=6282E2D4"
          />
          <img
            alt="QR"
            src="https://www.qr-generator.nu/qrcode.svg?download=1"
            style={qrCode}
          />

          <img
            alt="AGSMAC LETTERS"
            src="https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/AGSMAC%20WHITE%20LETTERS.png?alt=media&token=f74b3248-0c87-4a2b-a5a6-c6a607195b2c"
            style={agsmacLetters}
          />
          <div style={scoutInfoStyle}>
            <Typography variant="body" sx={body}>
              Sergio Alejandro
            </Typography>
            <Typography variant="body2" sx={body2}>
              Marquez Gonzales
            </Typography>
            <Typography variant="body2" sx={body3}>
              Jefe de Tropa
            </Typography>
            <Typography variant="body2" sx={body3}>
              Grupo 512 - Mixcoac
            </Typography>
            <Typography variant="body2" sx={body3}>
              Ciudad de México
            </Typography>
            <Typography variant="body2" sx={body3}>
              Benavides 534, Col. Benito Juarez
            </Typography>
            <Typography variant="body2" sx={body3}>
              +529313847362
            </Typography>
          </div>
        </Paper>

       

      </div>
    </>
  );
};
export default forwardRef(Credential);
