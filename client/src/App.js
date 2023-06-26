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
  const [muscles, setMuscles] = useState([]);
  const [bones, setBones] = useState([]);

  useEffect(() => {
    fetch(`/muscles`)
    .then(response => response.json())
    .then(muscles => setMuscles(muscles));

    fetch(`/bones`)
    .then(response => response.json())
    .then(bones => setBones(bones));

  }, [])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/muscles" 
          element={<MusclesTable 
            bodyParts={bodyParts} 
            setBodyParts={setBodyParts} 
            muscles={muscles} 
            setMuscles={setMuscles} />} 
        />
        <Route path="/bones" 
          element={<BonesTable 
            regions={regions} 
            setRegions={setRegions} 
            bones={bones} 
            setBones={setBones} />} />
        <Route path="/add_muscle" 
          element={<AddMuscle 
            bodyParts={bodyParts} 
            setBodyParts={setBodyParts} 
            muscles={muscles} 
            setMuscles={setMuscles} />} 
        />
        <Route path="/add_bone" 
          element={<AddBone 
            regions={regions} 
            setRegions={setRegions} 
            bones={bones} 
            setBones={setBones} />} 
        />
      </Routes>
    </div>
  );
}

export default App;
