import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './ui/components/navbar/Navbar';

const appName = "AlgoVisualizer"
function App() {
  return (
    <React.Fragment>
      <Navbar appName={appName}></Navbar>
    </React.Fragment>
  );
}

export default App;
