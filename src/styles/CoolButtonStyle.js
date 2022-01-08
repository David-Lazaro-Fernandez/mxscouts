import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles((theme) =>({

    primary:{
        backgroundColor: '#2E2270',
        color: 'white',
        borderRadius:'100px',
        height: '50px',
        width: '200px',
        marginTop: '15px',
        fontSize: '24px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign:'center',
        border: '0px',

    }, 
    secondary:{
        backgroundColor: '#E7E4FA',
        color: '#2E2270',
        borderRadius:'100px',
        height: '50px',
        width: '200px',
        marginTop: '15px',
        fontSize: '24px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign:'center',
        border: '0px',
    },
}));