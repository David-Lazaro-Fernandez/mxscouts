import React from 'react';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <div>
            {
                value === index && ( 
                    {children}
                )
            }
        </div>
    )
}

export default TabPanel;