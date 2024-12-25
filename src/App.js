import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import './App.css';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="d-flex vh-100">
      {isSidebarVisible && <Sidebar />}
      <div className="flex-grow-1 d-flex flex-column">
        <Topbar toggleSidebar={toggleSidebar} />
        <div className="content flex-grow-1">
          <div className="dashboard-header">
            <h4 className="mb-0">
              <i className="fas fa-tachometer-alt me-2"></i>
              แดชบอร์ด
            </h4>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm card-gradient card-primary">
                <div className="card-body position-relative">
                  <h5 className="card-title">จำนวนรายวิชา</h5>
                  <p className="card-text h2">8</p>
                  <i className="fas fa-book stat-icon"></i>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm card-gradient card-success">
                <div className="card-body position-relative">
                  <h5 className="card-title">เกรดเฉลี่ย</h5>
                  <p className="card-text h2">3.50</p>
                  <i className="fas fa-chart-line stat-icon"></i>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm card-gradient card-info">
                <div className="card-body position-relative">
                  <h5 className="card-title">การเข้าเรียน</h5>
                  <p className="card-text h2">95%</p>
                  <i className="fas fa-user-check stat-icon"></i>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm card-gradient card-warning">
                <div className="card-body position-relative">
                  <h5 className="card-title">กิจกรรม</h5>
                  <p className="card-text h2">12</p>
                  <i className="fas fa-calendar-alt stat-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
