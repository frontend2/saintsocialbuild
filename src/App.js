
import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import FileManager from './components/FileManagerComponent';
import Calendar from './components/CalendarComponent';
import NavBar from './components/NavBarComponent';
import SideBar from './components/SideBarComponent';


function App() {
  return (
    
    <BrowserRouter>
       <NavBar />
       <SideBar />
       <Main />
    </BrowserRouter>
  );
}

export default App;
