import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Input, Label, CustomInput, ButtonGroup, Button } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { connect } from 'react-redux';

//SETTING STATE FROM PROPS
const mapStateToProps = state => {
  return {
    facebookAccounts: state.facebookAccounts,
    instagramAccounts: state.instagramAccounts,
    twitterAccounts: state.twitterAccounts,
  }
}
//SETTING STATE FROM PROPS

//RENDER ACCOUNTS LIST FROM STATE COMPONENT
class GenerateAccountsList extends Component {

render(){

    if(this.props.facebookAccounts.facebookAccountsLoading){
      return(
        <div className="mx-auto justify-content-center">
         <Loading />
        </div>
      )
    }
    else if(this.props.facebookAccounts.facebookAccounts.length === 0) {
      return <div>No Accounts Saved.</div>;
    }
    else if (this.props.captionsErrMess) {
            return(
                    <div className="mx-auto justify-content-center">
                        <h4>{this.props.captionsErrMess}</h4>
                    </div>
            );
        }

    else if (this.props.facebookAccounts.facebookAccounts.length > 0 ||
       this.props.facebookAccounts.facebookAccounts != null) {
      return this.props.facebookAccounts.facebookAccounts.map((account, accountId) => {
        return (
        <div key = {accountId}>
          <li className="list-group-item border-0">
            <div className="media align-items-center">
              <div className="d-flex media-img-wrap mr-0">
                <div className="avatar avatar-sm">
                  <img src= {account.avatar} alt="user" className="avatar-img rounded-circle" />
                </div>
              </div>
              <div className="media-body">
                <div className="custom-control custom-checkbox">
                  <CustomInput type="checkbox" id={accountId} label={account.full_name} />
                </div>
              </div>
            </div>
          </li>
        <div><hr /></div>
      </div>
        );
      });
    }
  };
}

//RENDER ACCOUNTS LIST FROM STATE COMPONENT

//MAIN PUBLISH COMPONENT
class Publish extends Component {
  constructor (props) {
    super(props);
    this.state = { rSelected: ""};
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchFacebookAccounts();
    this.props.fetchInstagramAccounts();
    this.props.fetchTwitterAccounts();
    }

  onRadioBtnClick(rSelected) {
     this.setState({ rSelected: rSelected });
     console.log(this.state)
     console.log(this.props)
  }

    render() {
      return(
        <div className="hk-pg-wrapper pb-0 px-0">
  {/* Container */}
  <div className="container-fluid">
    {/* Row */}
    <div className="row">
      <div className="col-xl-12 pa-0">
        <div className="fmapp-wrap">
          <div className="fmapp-sidebar">
            <div className="nicescroll-bar">
              <div className="fmapp-nav-wrap">
                <a id="close_fmapp_sidebar" href="javascript:void(0)" className="close-fmapp-sidebar">
                  <span className="feather-icon"><i data-feather="chevron-left" /></span>
                </a>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><span className="feather-icon"><i data-feather="search" /></span></span>
                  </div>
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                </div>
                <ul className="nav flex-column mail-category mt-10">
                  <GenerateAccountsList facebookAccounts = {this.props.facebookAccounts}/>
                </ul>
              </div>
            </div>
          </div>
          <div className="fm-box">
            <div className="fmapp-main fmapp-view-switch">
              <div className="row mb-20">
                <div className="col-sm">
                  <ButtonGroup>
                    <Button color="primary"  onClick={() => this.onRadioBtnClick("Facebook")}
                      active={this.state.rSelected === "Facebook"}>Facebook</Button>
                    <Button color="primary"  onClick={() => this.onRadioBtnClick("Instagram")}
                      active={this.state.rSelected === "Instagram"}>Instagram</Button>
                    <Button color="primary"  onClick={() => this.onRadioBtnClick("Twitter")}
                      active={this.state.rSelected === "Twitter"}>Twitter</Button>
                  </ButtonGroup>
                </div>
              </div>
              <div className="container-fluid">
                <div className="hk-row">
                  <div className="col-lg-8">
                    <div className="card card-profile-feed">
                      <div className="card-header card-header-action">
                        <div className="media align-items-center">
                          <div className="media-body">
                            <div className="text-capitalize font-weight-500 text-dark"><strong>CREATE NEW</strong></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="btn-group btn-group-rounded mb-25 mr-10" role="group" aria-label="Basic example">
                          <button type="button" className="btn btn-outline-primary">PHOTO</button>
                          <button type="button" className="btn btn-outline-primary">VIDEO</button>
                          <button type="button" className="btn btn-outline-primary">TEXT</button>
                        </div>
                        <textarea className="form-control mt-15" rows={3} placeholder="Add a caption..." defaultValue={""} />
                        <div className="mt-15">
                          <div className="custom-control custom-checkbox checkbox-primary">
                            <input type="checkbox" className="custom-control-input" id="customCheck4" defaultChecked />
                            <label className="custom-control-label" htmlFor="customCheck4">Schedule</label>
                          </div>
                        </div>
                        <div className="form-group mt-10">
                          <label htmlFor="input_tags"><strong>Date range</strong></label>
                          <input className="form-control" type="text" name="daterange" defaultValue="01/01/2018 - 01/15/2018" />
                        </div>
                        <div className="row">
                          <div className="col form-group">
                            <label htmlFor="firstName"><strong>Repeat Frequency</strong></label>
                            <select className="form-control custom-select d-block w-100" id="country">
                              <option value>Once</option>
                              <option>Every Day</option>
                            </select>
                          </div>
                        </div>
                        <hr />
                        <button className="btn btn-primary" type="submit">Post</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card card-profile-feed">
                      <div className="row text-center">
                        <div className="col pr-0">
                          <div className="pa-15">
                            <span className="feather-icon text-sky"><i data-feather="twitter" /></span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="card-header card-header-action">
                        <div className="media align-items-center">
                          <div className="media-img-wrap d-flex mr-10">
                            <div className="avatar avatar-sm">
                              <img src="dist/img/avatar7.jpg" alt="user" className="avatar-img rounded-circle" />
                            </div>
                          </div>
                          <div className="media-body">
                            <div className="text-capitalize font-weight-500 text-dark">Account Name</div>
                            <div className="font-13">@Account Name</div>
                          </div>
                        </div>
                      </div>
                      <div className="row text-left">
                        <div className="col pr-0">
                          <div className="pa-15">
                            <span className="d-block text-capitalize font-14">Sample post text.</span>
                          </div>
                        </div>
                      </div>
                      <div className="row text-left">
                        <div className="col pr-0">
                          <div className="pa-15">
                            <span className="d-block text-capitalize font-14">10:00AM 20 Jul, 2019</span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row text-center">
                        <div className="col-3 pr-0">
                          <div className="pa-15">
                            <span className="feather-icon"><i data-feather="message-circle" /></span>
                          </div>
                        </div>
                        <div className="col-3 px-0">
                          <div className="pa-15">
                            <span className="feather-icon"><i data-feather="repeat" /></span>
                          </div>
                        </div>
                        <div className="col-3  px-0">
                          <div className="pa-15">
                            <span className="feather-icon"><i data-feather="heart" /></span>
                          </div>
                        </div>
                        <div className="col-3 pl-0">
                          <div className="pa-15">
                            <span className="feather-icon"><i data-feather="bar-chart" /></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card card-profile-feed">
                      <div className="row text-center">
                        <div className="col pr-0">
                          <div className="pa-15">
                            <span className="feather-icon text-dark-100"><i data-feather="instagram" /></span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="card-header card-header-action">
                        <div className="media align-items-center">
                          <div className="media-img-wrap d-flex mr-10">
                            <div className="avatar avatar-sm">
                              <img src="dist/img/avatar7.jpg" alt="user" className="avatar-img rounded-circle" />
                            </div>
                          </div>
                          <div className="media-body">
                            <div className="text-capitalize font-weight-500 text-dark">Account Name</div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row text-left mt-0">
                        <div className="col-9 pr-0">
                          <div className="pa-15">
                            <span className="d-block text-dark-100 font-14">Be the first to like this</span>
                          </div>
                        </div>
                        <div className="col-3 pr-0">
                          <div className="pa-15">
                            <span className="d-block text-dark-100 font-14">10s</span>
                          </div>
                        </div>
                      </div>
                      <div className="row text-left">
                        <div className="col pr-0">
                          <div className="pa-15">
                            <span className="d-block text-capitalize font-14 text-dark-100">Sample post text.</span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row text-left">
                        <div className="col-10 pr-0">
                          <div className="pa-15">
                            <p><i className="fa fa-heart-o fa-lg mr-5" />Add Comment . . . </p>
                          </div>
                        </div>
                        <div className="col-2 px-0">
                          <div className="pa-15">
                            <i className="fa fa-ellipsis-h fa-lg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card card-profile-feed">
                      <div className="row text-center">
                        <div className="col pr-0">
                          <div className="pa-15">
                            <span className="feather-icon text-indigo"><i data-feather="facebook" /></span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="card-header card-header-action">
                        <div className="media align-items-center">
                          <div className="media-img-wrap d-flex mr-10">
                            <div className="avatar avatar-sm">
                              <img src="dist/img/avatar7.jpg" alt="user" className="avatar-img rounded-circle" />
                            </div>
                          </div>
                          <div className="media-body">
                            <div className="text-capitalize font-weight-500 text-indigo">Account Name</div>
                            <div className="text-capitalize font-13">Just Now.</div>
                          </div>
                        </div>
                      </div>
                      <div className="row text-left">
                        <div className="col pr-0">
                          <div className="pa-15">
                            <span className="d-block text-capitalize font-14">Sample post text.</span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row text-center">
                        <div className="col-4 pr-0">
                          <div className="pa-15">
                            <p><i className="fa fa-thumbs-o-up fa-2x mr-5" />Like</p>
                          </div>
                        </div>
                        <div className="col-4 px-0">
                          <div className="pa-15">
                            <p><i className="fa fa-comments-o fa-2x mr-5" />Comment</p>
                          </div>
                        </div>
                        <div className="col-4  px-0">
                          <div className="pa-15">
                            <p><i className="fa fa-share fa-2x mr-5" />Share</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Row */}
  </div>
  {/* /Container */}
</div>
      );
    }
  }
  export default withRouter(connect(mapStateToProps)(Publish));
