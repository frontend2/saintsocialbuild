import React, { Component } from 'react';
import NavBar from './NavBarComponent';
import SideBar from './SideBarComponent'
import { Switch, Route, Redirect, BrowserRouter, Link  } from 'react-router-dom';


class Calendar extends Component {

    render() {
        return(
            <div className="hk-pg-wrapper pb-0 px-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12 pa-0">
                        <div className="calendarapp-wrap">
                            <div className="calendarapp-sidebar">
                                <div className="nicescroll-bar">
                                    <a id="close_calendarapp_sidebar" href="javascript:void(0)" className="close-calendarapp-sidebar">
                                        <span className="feather-icon"><i data-feather="chevron-left"></i></span>
                                    </a>
                                    <div className="add-event-wrap">
                                        <div className="calendar-event alert alert-success alert-dismissible fade show" role="alert">
                                            <p>NYC Conference</p>
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="calendar-event alert alert-primary alert-dismissible fade show" role="alert">
                                            <p>Family Lunch</p>
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="calendar-event alert alert-danger alert-dismissible fade show" role="alert">
                                            <p>UX Meetup</p>
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="remove_event"></input>
                                        <label className="custom-control-label" htmlFor="remove_event">Remove after drop</label>
                                    </div>
                                    <button type="button" className="btn btn-primary btn-block mt-50 mb-20" data-toggle="modal" data-target="#exampleModalEmail">
                                        Add event
                                    </button>
                                </div>
                            </div>
                            <div className="calendar-wrap">
                                <div id="calendar"></div>
                            </div>
                            <div className="modal fade" id="exampleModalEmail" tabIndex="-1" role="dialog" aria-labelledby="exampleModalEmail" aria-hidden="true">
                                <div className="modal-dialog modal-sm" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header bg-grey-dark-5">
                                            <h6 className="modal-title text-white" id="exampleModalPopoversLabel">Add new event</h6>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="inputEvent">Event name</label>
                                                    <input type="text" placeholder="Event" id="inputEvent" className="form-control"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputDate">Date</label>
                                                    <input type="text" name="daterange" id="inputDate" className="form-control"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputTime">Time</label>
                                                    <input type="text" id="inputTime" className="form-control input-timepicker"></input>
                                                </div>
                                                <div className="form-group custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="all_day"></input>
                                                    <label className="custom-control-label" htmlFor="all_day">All day event</label>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputTime">Set Priority</label>
                                                    <select id="event_priority" className="form-control custom-select">
                                                        <option defaultValue value="primary">Important</option>
                                                        <option value="danger">Urgent</option>
                                                        <option value="warning">Warning</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <button id="add_event" className="btn btn-primary btn-block mr-10" type="submit">Add</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        );
      }
  }
 
export default Calendar; 