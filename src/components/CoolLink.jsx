import React from 'react';

const CoolLink = (props) => {
    const {image, text, height, transparency, withIcon, icon} = props;

    return(
        <div style={{
            background: `linear-gradient(0deg, rgba(46, 34, 112, ${transparency}), rgba(46, 34, 112, ${transparency})),
            url(${image})`,
            backgroundSize: 'cover',
            height: `${height}px`,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover':{
                background: `linear-gradient(0deg, rgba(46, 34, 112, ${transparency + 0.3}}), rgba(46, 34, 112, ${transparency + 0.3})),
                url(${image})`,
                cursor: 'pointer',
            }

        }}>
            {withIcon ? <img src={icon} alt="logo" style={{width:'50px', marginRight:'25px'}}/> : null}
            <h1
            style={{
                color: 'white',
            }}
            >{text}</h1>
        </div>
    )
}

export default CoolLink;