import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const NewGroupModal = (props) => {
  const {
    handleClose,
    open,
    handleFileChange,
    handleFileChange2,
    selectedImage,
    selectedImage2,
  } = props;
  //Style
  const modalStyle = {
    overflow: "scroll",
  };
  const style = {
    position: "absolute",
    top: "50%",
    width: 500,
    maxHeight: 500,
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
  };

  const previewImage = {
    width: "100px",
    margin: "20px",
  };

  const textfieldStyle = {
    m: 2,
  };

  const fileStyle = {
    margin: "20px",
  };

  const fileWrapper = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modalStyle}
      >
        <Box sx={style}>
          <Typography
            variant="h5"
            id="modal-modal-title"
            sx={{ marginTop: "350px" }}
          >
            Crea un nuevo grupo 🍁
          </Typography>
          <TextField sx={textfieldStyle} label="Numero" defaultValue="128" />
          <TextField sx={textfieldStyle} label="Titulo" defaultValue="128" />
          <TextField sx={textfieldStyle} label="Subtitulo" defaultValue="128" />
          <TextField sx={textfieldStyle} label="Escudo" defaultValue="128" />
          
          <div style={fileWrapper}>
            <label style={fileStyle}>Imagen de fondo 1</label>
            <input type="file" style={fileStyle} onChange={handleFileChange} />

            {selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                style={previewImage}
                alt="Background Image 1"
              />
            ) : null}
          </div>

          <div style={fileWrapper}>
            <label style={fileStyle}>Imagen de fondo 2</label>
            <input type="file" onChange={handleFileChange2} style={fileStyle} />

            {selectedImage2 ? (
              <img
                src={URL.createObjectURL(selectedImage2)}
                style={previewImage}
                alt="Background Image 1"
              />
            ) : null}
          </div>

          <TextField
            sx={textfieldStyle}
            label="¿Está actualmente activo?"
            defaultValue="128"
          />
          <TextField
            sx={textfieldStyle}
            label="Días de actividad"
            defaultValue="128"
          />
          <TextField sx={textfieldStyle} label="Ubicación" defaultValue="128" />
        </Box>
      </Modal>
    </>
  );
};
export default NewGroupModal;
