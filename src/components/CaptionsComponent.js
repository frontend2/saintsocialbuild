import React, { Component } from 'react';
import NavBar from './NavBarComponent';
import SideBar from './SideBarComponent'
import { Switch, Route, Redirect, BrowserRouter, Link  } from 'react-router-dom';



//RENDER  CAPTIONS FROM STATE COMPONENT
function RenderCaptions({ captions }) {
  if (captions != null) {
    return captions.map((caption, index) => {
      return (
        <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-5">
          <div className="card">
            <div className="card-header">{caption.title}</div>
            <div className="card-body">
              <p className="card-text">{caption.content}</p>
              <a
                href="#"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#modal"
              >
                Edit
              </a>
              <a href="#" className="btn btn-danger">
                Delete
              </a>
            </div>
          </div>
        </div>
      );
    });
  } else {
    return <div>No captions Saved.</div>;
  }
}
//RENDER  CAPTIONS FROM STATE COMPONENT

//MAIN CAPTIONS COMPONENT
class Captions extends Component {
  componentDidMount() {
  console.log(this.props.captions)
  }

  constructor(props) {
    super(props);
    this.testRedux = this.testRedux.bind(this);
  }

  testRedux(){
    console.log("testing writing actions")
    this.props.addCaption("Title redux", "Caption content");
  }
    render() {
        return(
<div className="hk-pg-wrapper pb-0 px-0">
{/* Modal */}
<div className="modal fade" id="modal" tabIndex={-1} role="dialog" aria-labelledby="modal" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Caption Title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <textarea className="form-control mt-15" rows={3} placeholder="Add a caption..." defaultValue={""} />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={this.testRedux}>Save changes</button>
      </div>
    </div>
  </div>
</div>

  {/* Container */}
  <div className="container-fluid">
    {/* Row */}
    <div className="row">
      <div className="col-xl-12 pa-0">
        <div className="fmapp-wrap fmapp-sidebar-toggle">
          <div className="fm-box">
            <div className="fmapp-main fmapp-view-switch">
              <header>
                <div className="fm-options-wrap">
                </div>
                <span>Captions/Scripts</span>
                <div className="fm-options-wrap">
                  <button className="btn btn-primary btn-wth-icon icon-wthot-bg btn-lg" data-toggle="modal" data-target="#modal"><span className="icon-label"><i className="fa fa-plus" />
                    </span><span className="btn-text">Add New</span></button>
                </div>
              </header>
              <div className="container-fluid">
                <div className="hk-row pt-15">
                <RenderCaptions captions={this.props.captions} />
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
        )
      }
    }
//MAIN CAPTIONS COMPONENT

export default Captions;
