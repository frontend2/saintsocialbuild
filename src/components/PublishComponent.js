import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CustomInput, ButtonGroup, Button, Input, Label } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { connect } from 'react-redux';
import { Control, Form, Errors, LocalForm } from 'react-redux-form';

//SETTING STATE FROM PROPS
const mapStateToProps = state => {
  return {
    facebookAccounts: state.facebookAccounts,
    instagramAccounts: state.instagramAccounts,
    twitterAccounts: state.twitterAccounts,
  }
}
//SETTING STATE FROM PROPS

//FORM VALIDATION
const required = (val) => val && val.length;
//FORM VALIDATION

//INSTAGRAM LIST COMPONENT
const InstagramList = (props) =>{
    if(props.instagramAccounts.instagramAccountsLoading){
      return(
        <div className="mx-auto justify-content-center">
         <Loading />
        </div>
      );
    }
      else if(props.instagramAccounts.instagramAccounts.length === 0) {
        return <div>No Accounts Saved.</div>;
      }
      else if (props.instagramAccounts.instagramAccountsErrMess) {
              return(
                      <div className="mx-auto justify-content-center">
                          <h4>{props.instagramAccounts.instagramAccountsErrMess}</h4>
                      </div>
              );
          }
      else if (props.instagramAccounts.instagramAccounts.length > 0 ||
         props.instagramAccounts.instagramAccounts != null) {
        return props.instagramAccounts.instagramAccounts.map((account, accountId) => {
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
                      <CustomInput type="checkbox" id={accountId} label={account.username} />
                    </div>
                  </div>
                </div>
              </li>
            <div><hr /></div>
          </div>
          );
        });
      }
    }
//INSTAGRAM LIST COMPONENT

//TWITTER LIST COMPONENT
const TwitterList = (props) =>{
    if(props.twitterAccounts.twitterAccountsLoading){
      return(
        <div className="mx-auto justify-content-center">
         <Loading />
        </div>
      );
    }
      else if(props.twitterAccounts.twitterAccounts.length === 0) {
        return <div>No Accounts Saved.</div>;
      }
      else if (props.twitterAccounts.twitterAccountsErrMess) {
              return(
                      <div className="mx-auto justify-content-center">
                          <h4>{props.twitterAccounts.twitterAccountsErrMess}</h4>
                      </div>
              );
          }
      else if (props.twitterAccounts.twitterAccounts.length > 0 ||
         props.twitterAccounts.twitterAccounts != null) {
        return props.twitterAccounts.twitterAccounts.map((account, accountId) => {
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
                      <CustomInput type="checkbox" id={accountId} label={account.username} />
                    </div>
                  </div>
                </div>
              </li>
            <div><hr /></div>
          </div>
          );
        });
      }
    }
//TWITTER LIST COMPONENT

//FACEBOOK LIST COMPONENT
const FacebookList = (props) =>{
    if(props.facebookAccounts.facebookAccountsLoading){
      return(
        <div>Loading.</div>
      );
    }
      else if(props.facebookAccounts.facebookAccounts.length === 0) {
        return <div>No Accounts Saved.</div>;
      }
      else if (props.captionsErrMess) {
              return(
                      <div className="mx-auto justify-content-center">
                          <h4>{props.captionsErrMess}</h4>
                      </div>
              );
          }

      else if (props.facebookAccounts.facebookAccounts.length > 0 ||
         props.facebookAccounts.facebookAccounts != null) {
        return props.facebookAccounts.facebookAccounts.map((account, accountId) => {
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
    }
//FACEBOOK LIST COMPONENT

//RENDER ACCOUNTS LIST FROM STATE COMPONENT
class GenerateAccountsList extends Component {

render(){
  if(this.props.networkSelected === "Facebook"){
    return(
      <FacebookList facebookAccounts = {this.props.facebookAccounts}/>
         )
      }
      if(this.props.networkSelected === "Twitter"){
        return(
          <TwitterList twitterAccounts = {this.props.twitterAccounts}/>
             )
          }
          if(this.props.networkSelected === "Instagram"){
            return(
              <InstagramList instagramAccounts = {this.props.instagramAccounts}/>
                 )
              }
      else {
        return <div>Choose a social network to display your accounts.</div>;
      }
    }
  };
//RENDER ACCOUNTS LIST FROM STATE COMPONENT

//RENDER ACCOUNTS PREVIEWS FROM STATE COMPONENT
class PreviewGenerator extends Component {

render(){
  if(this.props.networkSelected === "Facebook"){
    return(
      <div className="card card-profile-feed">
        <div className="row text-center">
          <div className="col pr-0">
            <div className="pt-3">
              <span className="text-indigo"><i className ="fa fa-facebook fa-3x"></i></span>
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
         )
      }
      if(this.props.networkSelected === "Twitter"){
        return(
          <div className="card card-profile-feed">
            <div className="row text-center">
              <div className="col pr-0">
                <div className="pt-3">
                  <span className="text-sky"><i class="fa fa-twitter fa-3x"></i></span>
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
             )
          }
          if(this.props.networkSelected === "Instagram"){
            return(
              <div className="card card-profile-feed">
                <div className="row text-center">
                  <div className="col pr-0">
                    <div className="pt-3">
                      <span className="text-dark-100"><i className="fa fa-instagram fa-3x"></i></span>
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
                 )
              }
      else {
        return <div></div>;
      }
    }
  };
//RENDER ACCOUNTS PREVIEWS FROM STATE COMPONENT


//MAIN PUBLISH COMPONENT
class Publish extends Component {
  constructor (props) {
    super(props);
    this.state = { networkSelected: ""};
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    this.props.fetchFacebookAccounts();
    this.props.fetchInstagramAccounts();
    this.props.fetchTwitterAccounts();
    }

  onRadioBtnClick(networkSelected) {
     this.setState({ networkSelected: networkSelected });
  }

  //FORM SUBMIT
        handleSubmit(values) {
          console.log(values)
              //event.preventDefault();
          }
  //FORM SUBMIT

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
                    <GenerateAccountsList networkSelected = {this.state.networkSelected}
                       facebookAccounts = {this.props.facebookAccounts}
                       twitterAccounts = {this.props.twitterAccounts}
                       instagramAccounts = {this.props.instagramAccounts} />
                </ul>
              </div>
            </div>
          </div>
          <div className="fm-box">
            <div className="fmapp-main fmapp-view-switch">
              <div className="row ml-5 mt-10 mb-10">
                <div className="col-sm">
                  <ButtonGroup>
                    <Button color="primary"  onClick={() => this.onRadioBtnClick("Facebook")}
                      active={this.state.networkSelected === "Facebook"}><i className="fa fa-facebook mr-3"></i>Facebook</Button>
                    <Button color="primary"  onClick={() => this.onRadioBtnClick("Instagram")}
                      active={this.state.networkSelected === "Instagram"}><i className="fa fa-instagram mr-3"></i>Instagram</Button>
                    <Button color="primary"  onClick={() => this.onRadioBtnClick("Twitter")}
                      active={this.state.networkSelected === "Twitter"}><i className="fa fa-twitter mr-3"></i>Twitter</Button>
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
                            <div className="text-capitalize font-weight-500 text-dark"><strong>CREATE NEW POST</strong></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <LocalForm  onSubmit={(values) => this.handleSubmit(values)}>
                        <div className="btn-group btn-group-rounded mb-25 mr-10" role="group" aria-label="Basic example">
                          <button type="button" className="btn btn-outline-primary">PHOTO</button>
                          <button type="button" className="btn btn-outline-primary">VIDEO</button>
                          <button type="button" className="btn btn-outline-primary">TEXT</button>
                        </div>
                        <div className="form-group">
                            <Control.textarea className="form-control mt-15" model=".captionContent" id="captionContent"
                              name="captionContent" rows="3"
                               placeholder="Add a caption..." validators={{required}}/>
                            <Errors className="text-danger" model=".captionContent" show="touched" messages={{ required: 'Required' }} />
                        </div>
                        <div className="mt-15">
                          <div className="custom-control custom-checkbox checkbox-primary">
                            <input type="checkbox" className="custom-control-input" id="customCheck4" defaultChecked />
                            <label className="custom-control-label" htmlFor="customCheck4">Schedule</label>
                          </div>
                        </div>
                        <div className="form-group mt-10">
                          <Label htmlFor="date"><strong>Date</strong></Label>
                          <Input className = "form-control" model=".date"
                            type="date"
                            name="date"
                            id="date"
                            placeholder="date placeholder" validators={{required}} />
                        </div>
                        <div className="row">
                          <div className="col form-group">
                            <label htmlFor="firstName"><strong>Repeat Frequency</strong></label>
                            <Control.select  model=".frequency" className="form-control custom-select d-block w-100"
                              id="frequency" validators={{required}}>
                              <option value=""></option>
                              <option>Once</option>
                              <option>Every Day</option>
                            </Control.select>
                            <Errors className="text-danger" model=".frequency" show="touched" messages={{ required: 'Required' }} />

                          </div>
                        </div>
                        <hr />
                        <button className="btn btn-primary" type="submit">Post</button>
                      </LocalForm>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <PreviewGenerator networkSelected = {this.state.networkSelected} />
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
