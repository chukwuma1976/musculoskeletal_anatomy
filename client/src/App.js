import React from 'react';
import { UserProvider } from './User';
import Musculoskeletal from './Musculoskeletal';


function App() {

  return (
    <UserProvider>
      <Musculoskeletal/>
    </UserProvider>
  );
}

export default App;
