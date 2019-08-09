import React, { Component } from 'react';
import Calendar from './CalendarComponent';
import Captions from './CaptionsComponent';
import FileManager from './FileManagerComponent';
import Publish from './PublishComponent';
import AccountManager from './AccountManagerComponent';
import GroupsManager from './GroupsManagerComponent';
import NetworkWalls from './NetworkWallsComponent';
import Dashboard from './DashboardComponent';
import Chatbots from './ChatbotsComponent';
import ImageEditor from './ImageEditorComponent';
import Reports from './ReportsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCaption, deleteCaption, editCaption, fetchCaptions,fetchFacebookAccounts,
         fetchInstagramAccounts, fetchTwitterAccounts } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    captions: state.captions,
  }
}
const mapDispatchToProps = dispatch => ({
  addCaption: (title, content) => dispatch(addCaption(title, content)),
  deleteCaption: (captionId) => dispatch(deleteCaption(captionId)),
  editCaption: (captionId, values) => dispatch(editCaption(captionId, values)),
  fetchCaptions: () => { dispatch(fetchCaptions())},
  fetchFacebookAccounts: () => { dispatch(fetchFacebookAccounts())},
  fetchTwitterAccounts: () => { dispatch(fetchTwitterAccounts())},
  fetchInstagramAccounts: () => { dispatch(fetchInstagramAccounts())}
});

class Main extends Component {
  componentDidMount() {
      this.props.fetchCaptions();
    }
    render() {
        return(
        <Switch>
              <Route path='/file-manager' component={FileManager} />
              <Route path='/account-manager' component={AccountManager} />
              <Route path='/groups-manager' component={GroupsManager} />
              <Route path='/network-walls' component={NetworkWalls} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/image-editor' component={ImageEditor} />
              <Route path='/publish' component={() => <Publish
                 fetchFacebookAccounts={this.props.fetchFacebookAccounts}
                 fetchInstagramAccounts={this.props.fetchInstagramAccounts}
                 fetchTwitterAccounts={this.props.fetchTwitterAccounts} />} />
              <Route path='/calendar' component={Calendar} />
              <Route path='/chatbots' component={Chatbots} />
              <Route path='/reports' component={Reports} />
              <Route exact path='/captions' component={() => <Captions captions={this.props.captions.captions}
              addCaption = {this.props.addCaption} deleteCaption = {this.props.deleteCaption}
              editCaption = {this.props.editCaption} captionsLoading = {this.props.captions.isLoading}
              captionsErrMess = {this.props.captions.errMess} />} />
              <Redirect to="/captions" />
          </Switch>
        );
      }
    }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
