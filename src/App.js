
import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import FileManager from './components/FileManagerComponent';
import Calendar from './components/CalendarComponent';
import NavBar from './components/NavBarComponent';
import SideBar from './components/SideBarComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';

const store = ConfigureStore();



function App() {
  return (




   <Provider store={store}>
    <BrowserRouter>
       <NavBar />
       <SideBar />
       <Main />
    </BrowserRouter>
   </Provider>
  );
}

export default App;
