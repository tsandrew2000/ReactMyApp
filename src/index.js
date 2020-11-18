import React from 'react';
import ReactDOM from 'react-dom';
import Theme from "./theme";
import './index.css';



// function MyRoom() {
//     const [isOn, setLight] = React.useState(true);
//     const luminosity = isOn ? "light" : "dark";
//     return ( 
//     <div className={`MyRoom ${luminosity}`}>
 
//      < br></br>
//      < button onClick = {
//         () => setLight(!isOn)
//     } > Change background color </button>
//     <Container />
//     {/* <Header/> */}
//     </div >
    
//      );
// }
ReactDOM.render( < Theme / > , document.getElementById('root'));