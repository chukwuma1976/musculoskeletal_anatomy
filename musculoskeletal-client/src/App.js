import React, {useState, useEffect} from 'react';
import './index.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from './Home';
import MusclesTable from './MusclesTable';
import BonesTable from './BonesTable';
import AddMuscle from './AddMuscle';
import AddBone from './AddBone';


function App() {
  const [bodyparts, setBodyparts] = useState([]);
  const [regions, setRegions] = useState([]);


  useEffect(() => {
    fetch('http://localhost:9292/bodyparts').
    then(response => response.json()).
    then(bodyparts => setBodyparts(bodyparts));
  }, []);

  useEffect(() => {
    fetch('http://localhost:9292/regions').
    then(response => response.json()).
    then(regions => setRegions(regions));
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/muscles" element={<MusclesTable />} />
        <Route path="/bones" element={<BonesTable />} />
        <Route path="/add_muscle" 
          element={<AddMuscle bodyparts={bodyparts} setBodyparts={setBodyparts} />} 
        />
        <Route path="/add_bone" element={<AddBone />} />
      </Routes>
    </div>
  );
}

export default App;
