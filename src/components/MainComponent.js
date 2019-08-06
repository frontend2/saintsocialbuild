import React, { Component } from 'react';
import Calendar from './CalendarComponent';
import Captions from './CaptionsComponent';
import FileManager from './FileManagerComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCaption, deleteCaption, editCaption } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    captions: state.captions,
  }
}
const mapDispatchToProps = dispatch => ({
  addCaption: (title, content) => dispatch(addCaption(title, content)),
  deleteCaption: (captionId) => dispatch(deleteCaption(captionId)),
  editCaption: (captionId) => dispatch(editCaption(captionId))
});



class Main extends Component {
    render() {
        return(
        <Switch>
              <Route path='/file-manager' component={FileManager} />
              <Route path='/calendar' component={Calendar} />
              <Route path='/captions' component={() => <Captions captions={this.props.captions}
              addCaption = {this.props.addCaption} deleteCaption = {this.props.deleteCaption} editCaption = {this.props.editCaption} />} />
              <Redirect to="/captions" />
          </Switch>
        );
      }
    }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
