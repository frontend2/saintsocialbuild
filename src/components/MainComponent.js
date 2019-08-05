import React, { Component } from 'react';
import SideBar from './SideBarComponent';
import NavBar from './NavBarComponent';
import Calendar from './CalendarComponent';
import { Switch, Route, Redirect, BrowserRouter, Link  } from 'react-router-dom';
import FileManager from './FileManagerComponent';



class Main extends Component {

    render() {
        return(
        <Switch>
              <Route path='/file-manager' component={FileManager} />
              <Route path='/calendar' component={Calendar} />
              <Redirect to="/file-manager" />
          </Switch>
        );
      }
  }

export default Main;
