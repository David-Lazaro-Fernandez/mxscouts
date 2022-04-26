import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const ImageButton = (props) =>{
    const {image,setImage, fileImage, setFileImage} = props;
    const buttonStyle={
        position:'absolute',
        border:'0px',
        borderRadius:'50%',
        backgroundColor:'#2E2270',
        color:'white',
        "&:hover": { color: "#2E2270", backgroundColor:'#E7E4FA' },
        top:'70px',
        left:'70px'
    }
    const wrapper={
        position:'relative',
        backgroundImage:`url(${image})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        width:'100px', 
        height:'100px',
        border:'0px',
        borderRadius:'50%',

    }
    const handleImageChange = (e) =>{
        const file = e.target.files[0]
        const URLfile = URL.createObjectURL(file)
        setFileImage(file)
        setImage(URLfile)
        
    }

    return (
        <>
            <div style={wrapper}>
            <IconButton sx={buttonStyle}  component="label">
                <AddAPhotoIcon/>
                <input type="file" onChange={handleImageChange} hidden />
            </IconButton>
            </div>
            
        </>
    )
}
export default ImageButton;