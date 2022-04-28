//React Imports
import React from "react";
//Styles
import { useStyles } from "../styles/CoolButtonStyle";

const CoolButton = (props) => {
  const { type, text, width, height } = props;
  const classes = useStyles();
  const buttonStyle = { width: `${width}px`, height: `${height}px` };
  return (
    <div>
      <button
        className={type === "primary" ? classes.primary : classes.secondary}
        style={buttonStyle}
      >
        {text}
      </button>
    </div>
  );
};

export default CoolButton;
