import React from 'react';
import './App.css';
import NavBar from './components/NavbarComponent';
import SideBar from './components/SideBarComponent'

function App() {
  return (
    <div className="hk-wrapper hk-vertical-nav">
      <NavBar />
      <SideBar />
    </div>  
  );
}

export default App;
