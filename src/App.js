import React,{useEffect,useState} from 'react';
import Navbar from "./Component/Navbar"
import Info from "./Component/info"
import FootNav from "./Component/Footer"
import './App.css';

function App() {
  const screenConfig = useState(0);
  return (
    <div className="App">
     <Navbar/>
     <Info currentScreen={screenConfig[0]}/>
     <FootNav screenConfig={screenConfig}/>

    </div>
  );
}

export default App;
