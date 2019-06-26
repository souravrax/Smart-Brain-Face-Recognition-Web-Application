import React from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import Facerecognition from './Components/Facerecognition/Facerecognition';
import './App.css';
import Imagelinkform from './Components/Imagelinkform/Imagelinkform.js';

function App() {
  return (
    <div className="App" style={{
      overflow: "hidden"
    }}>
      <Navigation/>
      <Imagelinkform/>
      <Facerecognition/>
    </div>
  );
}

export default App;
