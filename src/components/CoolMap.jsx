import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import credentials from '../credentials';

const CoolMap=()=>{
    
    return (
        <GoogleMap
            mapContainerStyle={{
                height: '100%',
                width: '100%',
            }}
            zoom={8}
            center={{ lat: -34.397, lng: 150.644 }}
        />
    );
}

export default CoolMap;
