import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./component/Home"
import Display from "./component/Display"


const App = () => {
  return (
    
    <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/Display" element={<Display />} />
        
  
    </Routes>
    
  );
}

export default App;