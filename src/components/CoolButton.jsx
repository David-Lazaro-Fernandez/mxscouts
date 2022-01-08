import React from 'react';
import {useStyles} from '../styles/CoolButtonStyle';

const CoolButton = (props) => {
    const {type, text, width, height} = props;
    const classes = useStyles();
    return(
        <div>
            <button 
                className={type == 'primary' ? classes.primary : classes.secondary} 
                style={{ width: `${width}px`, height: `${height}px`}}
            >
                {text}
            </button>
        </div>    
    )
}

export default CoolButton;