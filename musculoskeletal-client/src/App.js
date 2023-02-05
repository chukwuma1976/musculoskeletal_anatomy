import React from 'react';
import './index.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from './Home';
import MusclesTable from './MusclesTable';
import BonesTable from './BonesTable';
import AddMuscle from './AddMuscle';
import AddBone from './AddBone';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/muscles" element={<MusclesTable />} />
        <Route path="/bones" element={<BonesTable />} />
        <Route path="/add_muscle" element={<AddMuscle />} />
        <Route path="/add_bone" element={<AddBone />} />
      </Routes>
    </div>
  );
}

export default App;
