import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SideBar extends Component {

    render() {
        return(
            <nav className="hk-nav hk-nav-light">
            <a href="javascript:void(0);" id="hk_nav_close" className="hk-nav-close"><span className="feather-icon"><i data-feather="x"></i></span></a>
            <div className="nicescroll-bar">
                <div className="navbar-nav-wrap">
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                          <Link className="nav-link" to="/publish">
                                <span className="feather-icon"><i data-feather="send"></i></span>
                                <span className="nav-link-text">Publish/Post</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/account-manager">
                                <span className="feather-icon"><i data-feather="user-plus"></i></span>
                                <span className="nav-link-text">Account Manager</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/groups-manager">
                                <span className="feather-icon"><i data-feather="layers"></i></span>
                                <span className="nav-link-text">Groups Manager</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/network-walls">
                                <span className="feather-icon"><i data-feather="layout"></i></span>
                                <span className="nav-link-text">Network Walls</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/dashboard">
                                <span className="feather-icon"><i data-feather="pie-chart"></i></span>
                                <span className="nav-link-text">Dashboard</span>
                            </Link>
                        </li>
                    </ul>
                    <hr className="nav-separator"></hr>
                    <div className="nav-header">
                            <span>USER TOOLS</span>
                        <span>UT</span>
                    </div>
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" to="/captions">
                                <span className="feather-icon"><i data-feather="file-text"></i></span>
                                <span className="nav-link-text">Captions/Scripts</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/image-editor">
                                 <span className="feather-icon"><i data-feather="edit"></i></span>
                                 <span className="nav-link-text">Image Editor</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/file-manager">
                                <span className="feather-icon"><i data-feather="folder"></i></span>
                                <span className="nav-link-text">File Manager</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/schedules">
                                <span className="feather-icon"><i data-feather="calendar"></i></span>
                                <span className="nav-link-text">Schedules/Calendar</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reports">
                                 <span className="feather-icon"><i data-feather="bar-chart"></i></span>
                                 <span className="nav-link-text">Reports/KPIs</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/chatbots">
                                <span className="feather-icon"><i data-feather="message-square"></i></span>
                                <span className="nav-link-text">Chatbots</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
      }
  }

export default SideBar;
