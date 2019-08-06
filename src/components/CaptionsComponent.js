import React, { Component } from 'react';
import NavBar from './NavBarComponent';
import SideBar from './SideBarComponent'
import { Switch, Route, Redirect, BrowserRouter, Link  } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';



//FORM VALIDATORS
const required = (val) => val && val.length;
//FORM VALIDATORS

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
              <a href="#" className="btn btn-primary" data-toggle="modal"
                data-target="#modal">Edit</a>
              <a href="#" className="btn btn-danger">Delete</a>
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
    this.state = {
            captionTitle: '',
            captionContent: '',
            touched: {
                captionTitle: false,
                captionContent: false
            }
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

//FORM SUBMIT
  handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        //event.preventDefault();
    }
//FORM SUBMIT

//STORE INPUT CHANGES IN STATE
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }
//STORE INPUT CHANGES IN STATE



//VALIDATE FORM FIELDS
validate(captionTitle, captionContent) {
        const errors = {
            captionTitle: '',
            captionContent: ''
        };
        if (this.state.touched.captionTitle && captionTitle.length < 1)
            errors.captionTitle = 'Caption title cannot be empty.';
            if (this.state.touched.captionContent && captionContent.length < 1)
                errors.captionContent = 'Caption content cannot be empty.';
        return errors;
    }

    handleBlur = (field) => (evt) => {
        this.setState({
          touched: { ...this.state.touched, [field]: true },
        });
    }
//VALIDATE FORM FIELDS




    render() {
      const errors = this.validate(this.state.captionTitle, this.state.captionContent);
        return(
          <div className="hk-pg-wrapper pb-0 px-0">
    {/* Modal */}
    <div className="modal fade" id="modal" tabIndex={-1} role="dialog" aria-labelledby="modal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Create New Caption</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="captionTitle">Caption Title</label>
                            <Control.text className="form-control" name="captionTitle" id = "captionTitle" placeholder="Add caption title..."
                                model = ".captionTitle" validators={{required}}/>
                                <Errors className="text-danger" model=".captionTitle" show="touched" messages={{ required: 'Required' }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="captionContent">Caption Content</label>
                            <Control.textarea className="form-control" model = ".captionContent" id = "captionContent" name = "captionContent"
                            rows = "3" placeholder="Enter caption content..." validators={{required}}/>
                            <Errors className="text-danger" model=".captionContent" show="touched" messages={{ required: 'Required' }} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                </LocalForm>
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
                                    <button className="btn btn-primary btn-wth-icon icon-wthot-bg btn-lg" data-toggle="modal" data-target="#modal">
                                    <span className="icon-label"><i className="fa fa-plus" />
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
