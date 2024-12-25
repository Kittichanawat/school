import React, { useState } from "react";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const renderNavItems = () => (
    <ul className="nav flex-column">
      <li className="nav-item">
        <a
          href="#home"
          className={`nav-link text-white ${activeMenu === "home" ? "active" : ""}`}
          onClick={() => handleMenuClick("home")}
        >
          <i className="fas fa-home me-2"></i> หน้าหลัก
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#subjects"
          className={`nav-link text-white ${activeMenu === "subjects" ? "active" : ""}`}
          onClick={() => handleMenuClick("subjects")}
        >
          <i className="fas fa-book me-2"></i> รายวิชา
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#results"
          className={`nav-link text-white ${activeMenu === "results" ? "active" : ""}`}
          onClick={() => handleMenuClick("results")}
        >
          <i className="fas fa-chart-bar me-2"></i> ผลการเรียน
        </a>
      </li>
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

  const renderProfileSection = () => (
    <div className="text-center mb-3">
      <img
        src="https://via.placeholder.com/50"
        alt="User"
        className="rounded-circle"
      />
      <p className="mt-2 mb-0">ระบบติดตามพฤติกรรมและผลการเรียน</p>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className="d-none d-md-flex flex-column vh-100 bg-dark text-white"
        style={{ width: "300px", maxWidth: "350px" }}
      >
        <div className="p-3">
          {renderProfileSection()}
          <hr className="text-white" />
          {renderNavItems()}
        </div>
      </div>

      {/* Mobile Offcanvas Sidebar */}
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
          {renderProfileSection()}
          <hr className="text-white" />
          {renderNavItems()}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
