import React from 'react';
import './index.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from './Home';
import MusclesTable from './MusclesTable';
import BonesTable from './BonesTable';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/muscles" 
          element={<MusclesTable />} 
        />
        <Route 
          path="/bones" 
          element={<BonesTable />} 
        />
      </Routes>
    </div>
  );
}

export default App;
