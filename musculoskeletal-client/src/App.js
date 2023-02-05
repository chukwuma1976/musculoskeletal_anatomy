import React from 'react';
import './index.css';
import Home from './Home';
import MusclesTable from './MusclesTable';
import BonesTable from './BonesTable';


function App() {
  return (
    <div className="App">
      <Home />
      <MusclesTable />
      <BonesTable />
    </div>
  );
}

export default App;
