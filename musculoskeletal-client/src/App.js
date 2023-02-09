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
  const [bodyParts, setBodyParts] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/bodyparts').
    then(response => response.json()).
    then(data => setBodyParts(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:9292/regions').
    then(response => response.json()).
    then(data => setRegions(data));
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/muscles" element={<MusclesTable bodyParts={bodyParts} />} />
        <Route path="/bones" element={<BonesTable regions={regions} />} />
        <Route path="/add_muscle" element={<AddMuscle bodyParts={bodyParts} setBodyParts={setBodyParts} />} />
        <Route path="/add_bone" element={<AddBone regions={regions} setRegions={setRegions} />} />
      </Routes>
    </div>
  );
}

export default App;
