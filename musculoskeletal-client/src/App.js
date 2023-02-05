import React from 'react';
import { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    fetch('http://localhost:9292/muscles')
    .then(response => response.json())
    .then(data => console.log(data));
  }, []);
  return (
    <div className="App">
      <header>Welcome to Musculoskeletal Anatomy for Exercise</header>
    </div>
  );
}

export default App;
