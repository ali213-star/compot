import logo from './logo.svg';

import './App.css';
import React from 'react';
import Address from './Profil/Address'
import FullName from './Profil/FullName';
import PhotoProfil from './Profil/PhotoProfil';
function App() {
  return (
    <div className="App">
      
      <Address/>
        <FullName/> 
        <PhotoProfil/>
     
    </div>
  );
}

export default App;
