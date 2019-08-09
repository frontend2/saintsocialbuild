import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
      return(
        <div className="hk-pg-wrapper pb-0 px-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12 pa-0">
                <div className="fmapp-wrap fmapp-sidebar-toggle">
                  <div className="fm-box">
                    <div className="fmapp-main fmapp-view-switch">
                      <header>
                        <div className="fm-options-wrap mx-auto">
                          <span>DASHBOARD COMPONENT</span>
                        </div>
                      </header>
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
export default Dashboard;
