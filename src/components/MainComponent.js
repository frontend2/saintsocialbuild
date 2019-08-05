import React, { Component } from 'react';
import SideBar from './SideBarComponent';
import NavBar from './NavBarComponent';
import Calendar from './CalendarComponent';
import Captions from './CaptionsComponent';
import FileManager from './FileManagerComponent';
import { Switch, Route, Redirect, BrowserRouter, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCaption } from '../redux/ActionCreators'

const mapStateToProps = state => {
  return {
    captions: state.captions,
  }
}
const mapDispatchToProps = dispatch => ({
  addCaption: (title, content) => dispatch(addCaption(title, content))
});



class Main extends Component {
    render() {
        return(
        <Switch>
              <Route path='/file-manager' component={FileManager} />
              <Route path='/calendar' component={Calendar} />
              <Route path='/captions' component={() => <Captions captions={this.props.captions}
              addCaption = {this.props.addCaption} />} />
              <Redirect to="/captions" />
          </Switch>
        );
      }
    }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
