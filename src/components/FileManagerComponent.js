import React, { Component } from 'react';
import NavBar from './NavBarComponent';
import SideBar from './SideBarComponent'
import { Switch, Route, Redirect, BrowserRouter, Link  } from 'react-router-dom';


class FileManager extends Component {

    render() {
        return(
      <div className="hk-wrapper hk-alt-nav">     
        <div className="hk-pg-wrapper pb-0 px-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12 pa-0">
                        <div className="fmapp-wrap">
                            <div className="fmapp-sidebar">
                                <div className="nicescroll-bar">
                                    <div className="fmapp-nav-wrap">
                                        <a id="close_fmapp_sidebar" href="javascript:void(0)" className="close-fmapp-sidebar">
                                            <span className="feather-icon"><i data-feather="chevron-left"></i></span>
                                        </a>
                                        <ul className="nav flex-column mail-category">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="javascript:void(0);">All Files</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="javascript:void(0);">Recent Files</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="javascript:void(0);">Folders</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="javascript:void(0);">Images</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="javascript:void(0);">Video</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="javascript:void(0);">Deletd Files</a>
                                            </li>
                                        </ul>
										<div className="btn btn-primary btn-block btn-file mt-20 mb-20">
                                            File Upload
											<input type="file" className="upload"></input>
                                        </div>
                                        <hr></hr>
                                        <ul className="nav flex-column mail-settings">
                                            <li className="nav-item">
                                                <a className="nav-link" href="javascript:void(0);"><i className="zmdi zmdi-folder-outline"></i>New Folder</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="fm-box">
								<div className="fmapp-main fmapp-view-switch">
									<header>
										<div className="fm-options-wrap">
											<a href="javascript:void(0)" id="fmapp_sidebar_move" className="fmapp-sidebar-move">
												<span className="feather-icon"><i data-feather="menu"></i></span>
											</a>
											<a href="javascript:void(0)"><span className="feather-icon"><i data-feather="search"></i></span></a>
										</div>
										<span className="">File Manager</span>
										<div className="fm-options-wrap">
											<span className="btn-file text-primary"><input type="file" className="upload"></input><span className="feather-icon"><i data-feather="upload"></i></span></span>
											<a href="javascript:void(0)" id="fm_view_switcher" className="fm-view-switcher">
												<span className="feather-icon list-view"><i data-feather="list"></i></span>
												<span className="feather-icon grid-view"><i data-feather="grid"></i></span>
											</a>
										</div>
									</header>
									<div className="fm-body">
										<div className="nicescroll-bar">
											<div className="fmapp-view-wrap">
												<div className="fmapp-grid-view">
													<div className="row">
														<div className="col-lg-1 col-md-2 col-sm-4 col-6 text-center mb-30">
															<img className="file-preview" src="dist/img/1foldericon.png" alt="fm-img"></img>
															<span className="file-name mt-10">Griffin_v1.0</span> 
														</div>
														<div className="col-lg-1 col-md-2 col-sm-4 col-6 text-center mb-30">
															<img className="file-preview" src="dist/img/2image.png" alt="fm-img"></img>
															<span className="file-name mt-10">Doodle_templatemonster.jpg</span> 
														</div>
														<div className="col-lg-1 col-md-2 col-sm-4 col-6 text-center mb-30">
															<img className="file-preview" src="dist/img/3videoicon.png" alt="fm-img"></img>
															<span className="file-name mt-10">Video.mp4</span> 
														</div>
														<div className="col-lg-1 col-md-2 col-sm-4 col-6 text-center mb-30">
															<img className="file-preview" src="dist/img/4image.png" alt="fm-img"></img>
															<span className="file-name mt-10">5_dark_support.jpg</span> 
														</div>
														<div className="col-lg-1 col-md-2 col-sm-4 col-6 text-center mb-30">
															<img className="file-preview" src="dist/img/5psdicon.png" alt="fm-img"></img>
															<span className="file-name mt-10">Chart2_recovered.psd</span> 
														</div>
														<div className="col-lg-1 col-md-2 col-sm-4 col-6 text-center mb-30">
															<img className="file-preview" src="dist/img/6image.png" alt="fm-img"></img>
															<span className="file-name mt-10">Hound-Thumb2-1.png</span> 
														</div>
													</div>
												</div>
												<div className="fmapp-table-view">
													<table id="fmapp_table_view" className="table table-hover w-100">
														<thead>
															<tr>
																<th>Name</th>
																<th>Modified</th>
																<th>size</th>
																<th>type</th>
																<th></th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td><span className="d-flex align-items-center"><img className="file-preview mr-10" src="dist/img/1foldericon.png" alt="fm-img"></img><span className="file-name">Prototip_v1.0</span></span></td>
																<td><span className="mr-10">20/11/2015</span><span className="file-time-modified inline-block">10:11</span></td>
																<td>24,555 KB</td>
																<td>file folder</td>
																<td>
																	<span className="files-more-link">
																		<a href="javascript:void(0)"><i className="zmdi zmdi-link"></i></a>
																		<a href="javascript:void(0)"><i className="zmdi zmdi-download"></i></a>
																		<a href="javascript:void(0)"><i className="zmdi zmdi-more"></i></a>
																	</span>	
																</td>
															</tr>
															<tr>
																<td><span className="d-flex align-items-center"><img className="file-preview mr-10" src="dist/img/2image.png" alt="fm-img"></img><span className="file-name">Doodle_templatemonster.jpg</span></span></td>
																<td><span className="mr-10">20/11/2015</span><span className="file-time-modified inline-block">10:11</span></td>
																<td>24,555 KB</td>
																<td>JPG File</td>
																<td>
																	<span className="files-more-link">
																		<a href="javascript:void(0)"><i className="zmdi zmdi-link"></i></a>
																		<a href="javascript:void(0)"><i className="zmdi zmdi-download"></i></a>
																		<a href="javascript:void(0)"><i className="zmdi zmdi-more"></i></a>
																	</span>	
																</td>
															</tr>
															<tr>
																<td><span className="d-flex align-items-center"><img className="file-preview mr-10" src="dist/img/4image.png" alt="fm-img"></img><span className="file-name">5_dark_support.jpg</span></span></td>
																<td><span className="mr-10">20/11/2015</span><span className="file-time-modified inline-block">10:11</span></td>
																<td>24,555 KB</td>
																<td>JPG File</td>
																<td>
																	<span className="files-more-link">
																		<a href="javascript:void(0)"><i className="zmdi zmdi-link"></i></a>
																		<a href="javascript:void(0)"><i className="zmdi zmdi-download"></i></a>
																		<a href="javascript:void(0)"><i className="zmdi zmdi-more"></i></a>
																	</span>	
																</td>
															</tr>
															<tr>
																<td><span className="d-flex align-items-center"><img className="file-preview mr-10" src="dist/img/5psdicon.png" alt="fm-img"></img><span className="file-name">Chart2_recovered.psd</span></span></td>
																<td><span className="mr-10">20/11/2015</span><span className="file-time-modified inline-block">10:11</span></td>
																<td>24,555 KB</td>
																<td>PSD File</td>
																<td>
																	<span className="files-more-link">
																		<a href="javascript:void(0)"><i className="zmdi zmdi-link"></i></a>
																		<a href="javascript:void(0)"><i className="zmdi zmdi-download"></i></a>
																		<a href="javascript:void(0)"><i className="zmdi zmdi-more"></i></a>
																	</span>	
																</td>
															</tr>
															<tr>
																<td><span className="d-flex align-items-center"><img className="file-preview mr-10" src="dist/img/6image.png" alt="fm-img"></img><span className="file-name">Hound-Thumb2-1.png</span></span></td>
																<td><span className="mr-10">10/11/2017</span><span className="file-time-modified inline-block">19:11</span></td>
																<td>24,555 KB</td>
																<td>PNG File</td>
																<td>
																	<span className="files-more-link">
																		<a href="javascript:void(0)"><i className="zmdi zmdi-link"></i></a>
																		<a href="javascript:void(0)"><i className="zmdi zmdi-download"></i></a>
																		<a href="javascript:void(0)"><i className="zmdi zmdi-more"></i></a>
																	</span>	
																</td>
															</tr>
															<tr>
																<td><span className="d-flex align-items-center"><img className="file-preview mr-10" src="dist/img/3videoicon.png" alt="fm-img"></img><span className="file-name">Video.mp4</span></span></td>
																<td><span className="mr-10">21/11/2016</span><span className="file-time-modified inline-block">10:11</span></td>
																<td>24,555 KB</td>
																<td>MP4 File</td>
																<td>
																	<span className="files-more-link">
																		<a href="javascript:void(0)"><i className="zmdi zmdi-link"></i></a>
																		<a href="javascript:void(0)"><i className="zmdi zmdi-download"></i></a>
																		<a href="javascript:void(0)"><i className="zmdi zmdi-more"></i></a>
																	</span>	
																</td>
															</tr>
														</tbody>
													</table>
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
        )
      }
  }
 
export default FileManager;