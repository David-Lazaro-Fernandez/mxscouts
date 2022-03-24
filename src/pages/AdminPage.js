import React, { useState } from "react";
import {
  Grid,
  Container,
  Box,
  CssBaseline,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import GridOnIcon from "@mui/icons-material/GridOn";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getBlob,
} from "firebase/storage";
import { storage } from "../importToFirebase";
import { FileUploader } from "react-drag-drop-files";
import { excelToJson } from "../excelToJSON";
const AdminPage = () => {
  const [uploadFilePetition, setUploadFilePetition] = useState(false);
  const [progress, setProgress] = useState(0);
  const types = ["xlsx", "xlsm"];
  const [file, setFile] = useState(null);
  const formHandler = () => {
    uploadFiles(file);
    console.log("formHandler");
  };
  
  const handleChange = (f) => {
    setFile(f);
    console.log("desde handle change", f);
  };
  const resetFile = () => {
    setFile(null);
    setProgress(0);
    setUploadFilePetition(false);
  };
  return (
    <div>
      <Container maxWidth="md">
        <CssBaseline />
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          
        </Grid>
      </Container>
    </div>
  );
};

export default AdminPage;
