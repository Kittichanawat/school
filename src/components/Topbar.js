import React from "react";

const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="topbar bg-white d-flex align-items-center justify-content-between px-4 shadow-sm">
      <div className="d-flex align-items-center">
        <button
          className="btn btn-light d-md-none me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarOffcanvas"
          aria-controls="sidebarOffcanvas"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="d-flex align-items-center">
          <i className="fas fa-graduation-cap fs-4 text-primary me-2"></i>
          {/* ปรับขนาดตัวอักษรตามขนาดหน้าจอ */}
          <h5 className="mb-0 d-none d-md-block">ระบบจัดการข้อมูลนักเรียน</h5>
          <h6 className="mb-0 d-md-none">ระบบจัดการข้อมูล</h6>
        </div>
      </div>

      <div className="d-flex align-items-center">
        {/* Notifications */}
        <div className="dropdown me-2 me-md-3">
          <button
            className="btn btn-light position-relative"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-bell"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
              <span className="visually-hidden">unread notifications</span>
            </span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><h6 className="dropdown-header">การแจ้งเตือน</h6></li>
            <li><a className="dropdown-item" href="#"><i className="fas fa-info-circle me-2 text-primary"></i>มีการอัปเดตคะแนนสอบ</a></li>
            <li><a className="dropdown-item" href="#"><i className="fas fa-exclamation-circle me-2 text-warning"></i>กำหนดส่งงาน วิชาคณิตศาสตร์</a></li>
            <li><a className="dropdown-item" href="#"><i className="fas fa-calendar-alt me-2 text-success"></i>ตารางสอบกลางภาค</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item text-center" href="#">ดูทั้งหมด</a></li>
          </ul>
        </div>

        {/* User Profile */}
        <div className="dropdown">
          <button
            className="btn btn-light d-flex align-items-center"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://via.placeholder.com/32"
              alt="User"
              className="rounded-circle me-2"
            />
            {/* ซ่อนชื่อบนมือถือ แสดงเฉพาะรูป */}
            <span className="me-2 d-none d-md-inline">นายทดสอบ ระบบ</span>
            <i className="fas fa-chevron-down"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#"><i className="fas fa-user me-2"></i>โปรไฟล์</a></li>
            <li><a className="dropdown-item" href="#"><i className="fas fa-cog me-2"></i>ตั้งค่า</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item text-danger" href="#"><i className="fas fa-sign-out-alt me-2"></i>ออกจากระบบ</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;