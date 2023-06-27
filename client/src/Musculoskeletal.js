import React, {useContext} from 'react';
import './index.css';
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from './Home';
import MusclesTable from './MusclesTable';
import BonesTable from './BonesTable';
import AddMuscle from './AddMuscle';
import AddBone from './AddBone';
import SignOut from "./SignOut";
import { UserContext } from './User';


function Musculoskeletal() {
  const {
    user, setUser,
    regions, bodyParts,
    muscles, setMuscles,
    bones, setBones
  } = useContext(UserContext)

  if (!user) return <Login onLogin={setUser} />;
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/muscles_" 
          element={<MusclesTable 
            bodyParts={bodyParts} 
            muscles={muscles} 
            setMuscles={setMuscles} />} 
        />
        <Route path="/bones_" 
          element={<BonesTable 
            regions={regions} 
            bones={bones} 
            setBones={setBones} />} />
        <Route path="/add_muscle" 
          element={<AddMuscle 
            bodyParts={bodyParts} 
            muscles={muscles} 
            setMuscles={setMuscles}
            userId={user.id} />} 
        />
        <Route path="/add_bone" 
          element={<AddBone 
            regions={regions} 
            bones={bones} 
            setBones={setBones} 
            userId={user.id}/>} 
        />
                <Route path="/signout" element={<SignOut />} />
      </Routes>
    </div>
  );
}

export default Musculoskeletal;