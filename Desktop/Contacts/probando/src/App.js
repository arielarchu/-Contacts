
import Index from "./pages/index";
import Create from "./pages/create";
import View from "./pages/view";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Store from "./store/store";
import React from "react";



function App() {
  return (
    <Store>
      <div className="App">

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="create" element={<Create />} />
            <Route path="view/:peopleId" element={<View />} />
          </Routes>
        <div className="Mark"> 
          <img src={require("./photos/Ari-Api.png")} />
        </div>
      </div>
    </Store>
  );
}

export default App;
