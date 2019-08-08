import React, { Component } from 'react';
import Calendar from './CalendarComponent';
import Captions from './CaptionsComponent';
import FileManager from './FileManagerComponent';
import {Loading} from './LoadingComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCaption, deleteCaption, editCaption, fetchCaptions } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    captions: state.captions,
  }
}
const mapDispatchToProps = dispatch => ({
  addCaption: (title, content) => dispatch(addCaption(title, content)),
  deleteCaption: (captionId) => dispatch(deleteCaption(captionId)),
  editCaption: (captionId, values) => dispatch(editCaption(captionId, values)),
  fetchCaptions: () => { dispatch(fetchCaptions())}

});

class Main extends Component {
  componentDidMount() {
      this.props.fetchCaptions();
    }
    render() {
        return(
        <Switch>
              <Route path='/file-manager' component={FileManager} />
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
