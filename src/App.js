import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardCharts from "./components/dashboard/DashboardCharts";
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
        
        <div className="content flex-grow-1 p-4">
          <div className="dashboard-header mb-4">
            <h4 className="mb-0">
              <i className="fas fa-tachometer-alt me-2 text-primary"></i>
              <span className="text-dark">แดชบอร์ด</span>
            </h4>
            <p className="text-muted mt-2 mb-0">ยินดีต้อนรับสู่ระบบจัดการข้อมูลนักเรียน</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm card-gradient card-primary">
                <div className="card-body position-relative">
                  <h5 className="card-title">ขาดเรียนวันนี้</h5>
                  <p className="card-text h2 mb-2">3</p>
                  <p className="card-text">วันที่ 2 เม.ย. 2567</p>
                  <i className="fas fa-user-times stat-icon"></i>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm card-gradient bg-danger">
                <div className="card-body position-relative">
                  <h5 className="card-title">ขาดเรียนบ่อย</h5>
                  <p className="card-text h2 mb-2">5</p>
                  <p className="card-text">ขาดเรียน > 3 ครั้ง/สัปดาห์</p>
                  <i className="fas fa-user-alt-slash stat-icon"></i>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm card-gradient card-success">
                <div className="card-body position-relative">
                  <h5 className="card-title">มาเรียนวันนี้</h5>
                  <p className="card-text h2 mb-2">30</p>
                  <p className="card-text">จากทั้งหมด 35 คน</p>
                  <i className="fas fa-user-check stat-icon"></i>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm card-gradient card-info">
                <div className="card-body position-relative">
                  <h5 className="card-title">มาสาย</h5>
                  <p className="card-text h2 mb-2">12</p>
                  <p className="card-text">วันที่ 2 เม.ย. 2567</p>
                  <i className="fas fa-user-clock stat-icon"></i>
                </div>
              </div>
            </div>
          </div>

          <DashboardCharts />
        </div>
      </div>
    </div>
  );
}

export default App;