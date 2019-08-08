import React, { Component } from 'react';
import NavBar from './NavBarComponent';
import SideBar from './SideBarComponent'
import { Switch, Route, Redirect, BrowserRouter, Link  } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



//FORM VALIDATORS
const required = (val) => val && val.length;
//FORM VALIDATORS


//MODAL COMPONENT
class ModalComponent extends Component {

  constructor(props) {
    super(props);
    this.state={
      isModalOpen: false  }
    this.deleteCaption = this.deleteCaption.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  //TOGGLE MODAL
  toggleModal() {
          this.setState({
            isModalOpen: !this.state.isModalOpen
          });
        }
  //TOGGLE MODAL

  render(){
    return(
  <Modal isOpen={this.state.isModalOpen}>
    <ModalHeader>Edit Caption</ModalHeader>
    <LocalForm onSubmit={(values)=> this.handleSubmit(values)}>
        <ModalBody>
            <div className="form-group">
                <label htmlFor="captionTitle">Caption Title</label>
                <Control.text className="form-control" name="captionTitle" id="captionTitle" placeholder="Add caption title..." model=".captionTitle" validators={{required}}/>
                <Errors className="text-danger" model=".captionTitle" show="touched" messages={{ required: 'Required' }} />
            </div>
            <div className="form-group">
                <label htmlFor="captionContent">Caption Content</label>
                <Control.textarea className="form-control" model=".captionContent" id="captionContent" name="captionContent" rows="3" placeholder="Enter caption content..." validators={{required}}/>
                <Errors className="text-danger" model=".captionContent" show="touched" messages={{ required: 'Required' }} />
            </div>
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
            <Button type="submit" color="primary" onClick={this.toggleModal}>Save Caption</Button>
        </ModalFooter>
    </LocalForm>
</Modal>)
  }
}
//MODAL COMPONENT



//RENDER  CAPTIONS FROM STATE COMPONENT
class GenerateCaptions extends Component {

  constructor(props) {
    super(props);
    this.state={
      isSaveModalOpen: false,
      isEditModalOpen: false,
      isDeleteConfirmationModalOpen: false,
      editCaptionId: null,
      deleteCaptionId: null  }
    this.deleteCaption = this.deleteCaption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleSaveModal = this.toggleSaveModal.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this);
    this.toggleDeleteConfirmationModal = this.toggleDeleteConfirmationModal.bind(this);


  }

//DELETE CAPTION
  deleteCaption() {
    const captionId = this.state.deleteCaptionId;
      this.props.deleteCaption(captionId)
    }
    //DELETE CAPTION

    //TOGGLE MODAL
    toggleSaveModal() {
            this.setState({
              isSaveModalOpen: !this.state.isSaveModalOpen
            });
          }

          toggleEditModal(captionId) {
                  this.setState({
                    isEditModalOpen: !this.state.isEditModalOpen,
                    editCaptionId: captionId
                  });
                }
                toggleDeleteConfirmationModal(captionId) {
                        this.setState({
                          isDeleteConfirmationModalOpen: !this.state.isDeleteConfirmationModalOpen,
                          deleteCaptionId: captionId
                        });
                      }
    //TOGGLE MODAL

    //FORM SUBMIT
      handleSubmit(values) {
        const captionId = this.state.editCaptionId;
        this.props.editCaption(captionId, values)
            //event.preventDefault();
        }
    //FORM SUBMIT




render(){
  const  RenderCaptions = ({ captions })  => {
    if (captions != null) {
      return captions.map((caption, captionId) => {
        return (

          <div key={captionId} className="col-lg-4 col-md-6 col-sm-12 mb-5">
            {/* EDIT CAPTION MODAL */}
            <Modal isOpen={this.state.isEditModalOpen}>
              <ModalHeader>Edit Caption</ModalHeader>
              <LocalForm onSubmit={(values)=> this.handleSubmit(values, captionId)}>
                  <ModalBody>
                      <div className="form-group">
                          <label htmlFor="captionTitle">Caption Title</label>
                          <Control.text className="form-control" name="captionTitle" id="captionTitle" placeholder="Add new caption title..." model=".captionTitle" validators={{required}}/>
                          <Errors className="text-danger" model=".captionTitle" show="touched" messages={{ required: 'Required' }} />
                      </div>
                      <div className="form-group">
                          <label htmlFor="captionContent">Caption Content</label>
                          <Control.textarea className="form-control" model=".captionContent" id="captionContent" name="captionContent" rows="3"
                             placeholder="Enter new caption content..." validators={{required}}/>
                          <Errors className="text-danger" model=".captionContent" show="touched" messages={{ required: 'Required' }} />
                      </div>
                  </ModalBody>
                  <ModalFooter>
                      <Button color="secondary" onClick={this.toggleEditModal}>Cancel</Button>
                      <Button type="submit" color="primary">Update Caption</Button>
                  </ModalFooter>
              </LocalForm>
          </Modal>
          {/* EDIT CAPTION MODAL */}

          {/* DELETE CAPTION CONFIRMATION MODAL */}
          <Modal isOpen={this.state.isDeleteConfirmationModalOpen}>
            <ModalHeader>Delete Caption</ModalHeader>
                <ModalBody>
                    <div className="form-group">
                      Are you sure you want to delete this caption?
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggleDeleteConfirmationModal}>No</Button>
                    <Button type="button" color="danger" onClick = {this.deleteCaption}>Yes</Button>
                </ModalFooter>
        </Modal>
        {/* DELETE CAPTION CONFIRMATION MODAL */}
            <div className="card">
              <div className="card-header">{caption.title}</div>
              <div className="card-body">
                <p className="card-text">{caption.content}</p>
                <Button color="primary" onClick={() => this.toggleEditModal(captionId)}>Edit</Button>
                <Button color="danger" onClick = {() => this.toggleDeleteConfirmationModal(captionId)}>Delete</Button>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <div>No captions Saved.</div>;
    }
  };
  return(
      <RenderCaptions captions = {this.props.captions} editCaption = {this.props.editCaption}/>
  )
}
}
//RENDER  CAPTIONS FROM STATE COMPONENT



//MAIN CAPTIONS COMPONENT
class Captions extends Component {
  constructor(props) {
    super(props);
    this.state = {
            isModalOpen: false,
            captionTitle: '',
            captionContent: '',
            touched: {
                captionTitle: false,
                captionContent: false
            }
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

//FORM SUBMIT
  handleSubmit(values) {
    this.props.addCaption(values.captionTitle, values.captionContent)
        alert(JSON.stringify(values))
        //event.preventDefault();
    }
//FORM SUBMIT



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



//TOGGLE MODAL
toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
//TOGGLE MODAL

    render() {
      const errors = this.validate(this.state.captionTitle, this.state.captionContent);
        return(
          <div className="hk-pg-wrapper pb-0 px-0">
    {/* Modal */}
    <Modal isOpen={this.state.isModalOpen}>
    <ModalHeader>Create New Caption</ModalHeader>
    <LocalForm onSubmit={(values)=> this.handleSubmit(values)}>
        <ModalBody>
            <div className="form-group">
                <label htmlFor="captionTitle">Caption Title</label>
                <Control.text className="form-control" name="captionTitle" id="captionTitle" placeholder="Add caption title..." model=".captionTitle" validators={{required}}/>
                <Errors className="text-danger" model=".captionTitle" show="touched" messages={{ required: 'Required' }} />
            </div>
            <div className="form-group">
                <label htmlFor="captionContent">Caption Content</label>
                <Control.textarea className="form-control" model=".captionContent" id="captionContent" name="captionContent" rows="3" placeholder="Enter caption content..." validators={{required}}/>
                <Errors className="text-danger" model=".captionContent" show="touched" messages={{ required: 'Required' }} />
            </div>
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
            <Button type="submit" color="primary" onClick={this.toggleModal}>Save Caption</Button>
        </ModalFooter>
    </LocalForm>
</Modal>
{/* Modal */}

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
                                    <button className="btn btn-primary btn-wth-icon icon-wthot-bg btn-lg" onClick = {this.toggleModal}>
                                    <span className="icon-label"><i className="fa fa-plus" />
                                    </span><span className="btn-text">Add New</span></button>
                                </div>
                            </header>
                            <div className="container-fluid">
                                <div className="hk-row pt-15">
                                    <GenerateCaptions captions={this.props.captions} deleteCaption = {this.props.deleteCaption}
                                       editCaption= {this.props.editCaption}/>
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
