import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [openSubmenus, setOpenSubmenus] = useState({
    reports: false,
    history: false
  });

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const toggleSubmenu = (submenu) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [submenu]: !prev[submenu]
    }));
  };

  const renderNavItems = () => (
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link
           to="/"
          className={`nav-link text-white ${activeMenu === "dashboard" ? "active" : ""}`}
          onClick={() => handleMenuClick("dashboard")}
        >
          <i className="fas fa-tachometer-alt me-2"></i> แดชบอร์ด
        </Link>
      </li>

      {/* การจัดการชั้นเรียน */}
      <li className="nav-item">
        <Link
          to="/attendance"
          className={`nav-link text-white ${activeMenu === "attendance" ? "active" : ""}`}
          onClick={() => handleMenuClick("attendance")}
        >
          <i className="fas fa-user-check me-2"></i> บันทึกการเข้าเรียน
        </Link>
      </li>

      {/* การจัดการพฤติกรรม */}
      <li className="nav-item">
        <Link
          to="/behavior"
          className={`nav-link text-white ${activeMenu === "behavior" ? "active" : ""}`}
          onClick={() => handleMenuClick("behavior")}
        >
          <i className="fas fa-clipboard-list me-2"></i> บันทึกพฤติกรรม
        </Link>
      </li>

      {/* ผลการเรียน */}
      <li className="nav-item">
        <a
          href="#grades"
          className={`nav-link text-white ${activeMenu === "grades" ? "active" : ""}`}
          onClick={() => handleMenuClick("grades")}
        >
          <i className="fas fa-graduation-cap me-2"></i> บันทึกผลการเรียน
        </a>
      </li>

      {/* รายงาน */}
      <li className="nav-item">
        <a
          href="#!"
          className={`nav-link text-white ${activeMenu === "reports" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            toggleSubmenu('reports');
            handleMenuClick("reports");
          }}
        >
          <i className="fas fa-file-alt me-2"></i> รายงาน
          <i className={`fas fa-chevron-${openSubmenus.reports ? 'up' : 'down'} float-end mt-1`}></i>
        </a>
        <ul className={`nav flex-column ms-3 submenu ${openSubmenus.reports ? 'show' : ''}`}>
          <li className="nav-item">
            <a href="#class-report" className="nav-link text-white">
              <i className="fas fa-users me-2"></i> รายงานชั้นเรียน
            </a>
          </li>
          <li className="nav-item">
            <a href="#student-report" className="nav-link text-white">
              <i className="fas fa-user-graduate me-2"></i> รายงานนักเรียน
            </a>
          </li>
          <li className="nav-item">
            <a href="#attendance-report" className="nav-link text-white">
              <i className="fas fa-calendar-check me-2"></i> รายงานการเข้าเรียน
            </a>
          </li>
          <li className="nav-item">
            <a href="#behavior-report" className="nav-link text-white">
              <i className="fas fa-exclamation-triangle me-2"></i> รายงานพฤติกรรม
            </a>
          </li>
        </ul>
      </li>

      {/* ประวัติ */}
      <li className="nav-item">
        <a
          href="#!"
          className={`nav-link text-white ${activeMenu === "history" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            toggleSubmenu('history');
            handleMenuClick("history");
          }}
        >
          <i className="fas fa-history me-2"></i> ประวัติย้อนหลัง
          <i className={`fas fa-chevron-${openSubmenus.history ? 'up' : 'down'} float-end mt-1`}></i>
        </a>
        <ul className={`nav flex-column ms-3 submenu ${openSubmenus.history ? 'show' : ''}`}>
          <li className="nav-item">
            <a href="#attendance-history" className="nav-link text-white">
              <i className="fas fa-calendar-alt me-2"></i> ประวัติการเข้าเรียน
            </a>
          </li>
          <li className="nav-item">
            <a href="#behavior-history" className="nav-link text-white">
              <i className="fas fa-clipboard me-2"></i> ประวัติพฤติกรรม
            </a>
          </li>
          <li className="nav-item">
            <a href="#grade-history" className="nav-link text-white">
              <i className="fas fa-chart-line me-2"></i> ประวัติผลการเรียน
            </a>
          </li>
        </ul>
      </li>

      {/* ตั้งค่า */}
      <li className="nav-item mt-auto">
        <a
          href="#settings"
          className={`nav-link text-white ${activeMenu === "settings" ? "active" : ""}`}
          onClick={() => handleMenuClick("settings")}
        >
          <i className="fas fa-cog me-2"></i> ตั้งค่าข้อมูลส่วนตัว
        </a>
      </li>

      {/* ออกจากระบบ */}
      <li className="nav-item">
        <a
          href="#logout"
          className={`nav-link text-white ${activeMenu === "logout" ? "active" : ""}`}
          onClick={() => handleMenuClick("logout")}
        >
          <i className="fas fa-sign-out-alt me-2"></i> ออกจากระบบ
        </a>
      </li>
    </ul>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="sidebar d-none d-md-block">
        <div className="p-3">
          {/* Profile Section */}
          <div className="text-center mb-3">
            <img
              src="https://via.placeholder.com/50"
              alt="User"
              className="rounded-circle"
            />
            <p className="mt-2 mb-0">ระบบจัดการข้อมูลนักเรียน</p>
          </div>
          <hr className="text-white" />
          {renderNavItems()}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex="-1"
        id="sidebarOffcanvas"
        aria-labelledby="sidebarOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarOffcanvasLabel">เมนู</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {renderNavItems()}
        </div>
      </div>
    </>
  );
};

export default Sidebar;