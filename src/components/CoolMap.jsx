//React Imports
import React from "react";
//Google maps info
import { GoogleMap } from "@react-google-maps/api";

const CoolMap = () => {
  return (
    <GoogleMap
      mapContainerStyle={{
        height: "100%",
        width: "100%",
      }}
      zoom={8}
      center={{ lat: -34.397, lng: 150.644 }}
    />
  );
};

export default CoolMap;
