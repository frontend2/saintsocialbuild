import React, { Component } from 'react';

class NavBar extends Component {

    render() {
        return(
            <nav className="navbar navbar-expand-xl navbar-light fixed-top hk-navbar">
            <a id="navbar_toggle_btn" className="navbar-toggle-btn nav-link-hover" href="#"><span className="feather-icon"><i data-feather="menu"></i></span></a>
            <a className="navbar-brand" href="#">
                <img className="brand-img d-inline-block" src="dist/img/logo-light.png" alt="brand" />
            </a>
            <ul className="navbar-nav hk-navbar-content">
                <li className="nav-item dropdown dropdown-authentication">
                    <a className="nav-link dropdown-toggle no-caret" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="media">
                            <div className="media-img-wrap">
                                <span className="feather-icon"><i data-feather="globe"></i></span>
                            </div>
                            <div className="media-body">
                                <span>Language<i className="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
                        <a className="dropdown-item" href="javascript:void(0);"><i className="mr-5"><strong>EN</strong></i><span>English</span></a>
                        <a className="dropdown-item" href="javascript:void(0);"><i className="mr-5"><strong>SP</strong></i><span>Spanish</span></a>
                        <a className="dropdown-item" href="javascript:void(0);"><i className="mr-5"><strong>FR</strong></i><span>French</span></a>
                    </div>
                </li>
                <li className="nav-item dropdown dropdown-notifications">
                    <a className="nav-link dropdown-toggle no-caret" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="feather-icon"><i data-feather="bell"></i></span><span className="badge-wrap">
                            <span className="badge badge-primary badge-indicator badge-indicator-sm badge-pill pulse"></span></span></a>
                    <div className="dropdown-menu dropdown-menu-right" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                        <h6 className="dropdown-header">Notifications <a href="javascript:void(0);" className="">View all</a></h6>
                        <div className="notifications-nicescroll-bar">
                            <a href="javascript:void(0);" className="dropdown-item">
                                <div className="media">
                                    <div className="media-img-wrap">
                                        <div className="avatar avatar-sm">
                                            <span className="avatar-text avatar-text-primary rounded-circle">
                                                <span className="initial-wrap"><span><i className="zmdi zmdi-account font-18"></i></span></span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="notifications-text"><span className="text-dark text-capitalize">Evie Ono</span> accepted your invitation to join the team</div>
                                            <div className="notifications-time">12m</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <div className="media">
                                    <div className="media-img-wrap">
                                        <div className="avatar avatar-sm">
                                            <span className="avatar-text avatar-text-success rounded-circle">
                                                <span className="initial-wrap"><span>MH</span></span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="notifications-text">New message received from <span className="text-dark text-capitalize">Misuko Heid</span></div>
                                            <div className="notifications-time">1h</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <div className="media">
                                    <div className="media-img-wrap">
                                        <div className="avatar avatar-sm">
                                            <span className="avatar-text avatar-text-primary rounded-circle">
													<span className="initial-wrap"><span><i className="zmdi zmdi-account font-18"></i></span></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="notifications-text">You have a follow up with<span className="text-dark text-capitalize"> Mintos head</span> on <span className="text-dark text-capitalize">friday, dec 19</span> at <span className="text-dark">10.00 am</span></div>
                                            <div className="notifications-time">2d</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <div className="media">
                                    <div className="media-img-wrap">
                                        <div className="avatar avatar-sm">
                                            <span className="avatar-text avatar-text-success rounded-circle">
													<span className="initial-wrap"><span>A</span></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="notifications-text">Application of <span className="text-dark text-capitalize">Sarah Williams</span> is waiting for your approval</div>
                                            <div className="notifications-time">1w</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <div className="media">
                                    <div className="media-img-wrap">
                                        <div className="avatar avatar-sm">
                                            <span className="avatar-text avatar-text-warning rounded-circle">
													<span className="initial-wrap"><span><i className="zmdi zmdi-notifications font-18"></i></span></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div>
                                            <div className="notifications-text">Last 2 days left for the project</div>
                                            <div className="notifications-time">15d</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown dropdown-authentication">
                    <a className="nav-link dropdown-toggle no-caret" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="media">
                            <div className="media-img-wrap">
                                <div className="avatar">
                                    <span className="avatar-text avatar-text-success rounded-circle">
                                        <span className="initial-wrap"></span>
                                </span>
                                </div>
                            </div>
                            <div className="media-body">
                                <span>Madelyn Shane<i className="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
                        <a className="dropdown-item" href="profile.html"><i className="dropdown-icon zmdi zmdi-account"></i><span>Profile</span></a>
                        <a className="dropdown-item" href="#"><i className="dropdown-icon zmdi zmdi-settings"></i><span>Settings</span></a>
                        <a className="dropdown-item" href="#"><i className="dropdown-icon zmdi zmdi-power"></i><span>Log out</span></a>
                    </div>
                </li>
            </ul>
        </nav>
        )
      }
  }
 
export default NavBar;