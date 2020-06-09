import React from 'react';
import './App.css';
import Workflow from './react-workflow.js';
import Info from './Info.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1><b>REACT</b></h1>
      <p>React is a JavaScript library that
        aims to simplify development of visual
        interfaces. Developed at Facebook and
        released to the world in 2013, it drives
        some of the most widely used code in the
        world, powering Facebook and Instagram
        among many, many other software 
        companies.</p>
      
      <Workflow />
      </header>
      <Info Name="The Great Faizan" Email="faizanwaseem476@gmail.com" />

    </div>
  );
}

export default App;
