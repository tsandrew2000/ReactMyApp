import React from 'react';
import Container from "./container";

function Theme() {
    const [isOn, setLight] = React.useState(true);
    const luminosity = isOn ? "light" : "dark";
    return ( 
    <div className={`Theme ${luminosity}`}>
 
     < br></br>
     < button onClick = {
        () => setLight(!isOn)
    } > Change background color </button>
    <Container />
    </div >
    
     );
}

export default Theme