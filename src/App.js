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
          <div className="row g-4">
            <div className="col-12">
              <h1 className="h4 mb-4">แดชบอร์ด</h1>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">จำนวนรายวิชา</h5>
                  <p className="card-text h2">8</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">เกรดเฉลี่ย</h5>
                  <p className="card-text h2">3.50</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">การเข้าเรียน</h5>
                  <p className="card-text h2">95%</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">กิจกรรม</h5>
                  <p className="card-text h2">12</p>
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
