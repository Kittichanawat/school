import React, { useState } from "react";

const Sidebar = ({ onPageChange }) => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    onPageChange(menu);
  };

  const renderNavItems = () => (
    <ul className="nav flex-column">
      <li className="nav-item">
        <button
          className={`nav-link text-white border-0 bg-transparent w-100 text-start ${
            activeMenu === "dashboard" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("dashboard")}
        >
          <i className="fas fa-home me-2"></i> หน้าหลัก
        </button>
      </li>
      <li className="nav-item">
        <button
          className={`nav-link text-white border-0 bg-transparent w-100 text-start ${
            activeMenu === "subjects" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("subjects")}
        >
          <i className="fas fa-book me-2"></i> รายวิชา
        </button>
      </li>
      <li className="nav-item">
        <button
          className={`nav-link text-white border-0 bg-transparent w-100 text-start ${
            activeMenu === "grades" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("grades")}
        >
          <i className="fas fa-chart-line me-2"></i> ผลการเรียน
        </button>
      </li>
      <li className="nav-item mt-auto">
        <button
          className={`nav-link text-white border-0 bg-transparent w-100 text-start ${
            activeMenu === "logout" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("logout")}
        >
          <i className="fas fa-sign-out-alt me-2"></i> ออกจากระบบ
        </button>
      </li>
    </ul>
  );

  return (
    <div className="sidebar d-flex flex-column vh-100 bg-dark text-white">
      <div className="p-3">
        <div className="profile-section text-center mb-3">
          <img
            src="https://via.placeholder.com/80"
            alt="Student"
            className="rounded-circle mb-3"
          />
          <h6 className="mb-1">ระบบติดตามพฤติกรรมและผลการเรียน</h6>
        </div>
        <hr className="text-white-50" />
        {renderNavItems()}
      </div>
    </div>
  );
};

export default Sidebar;
