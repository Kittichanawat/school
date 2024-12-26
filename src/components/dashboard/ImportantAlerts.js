const ImportantAlerts = () => {
  return (
    <div className="row mb-4">
      <div className="col-12">
        <div className="card border-0 shadow-sm border-start border-danger border-4">
          <div className="card-body">
            <h6 className="card-title text-danger mb-3">
              <i className="fas fa-bell me-2"></i>
              การแจ้งเตือนสำคัญ
            </h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <i className="fas fa-exclamation-triangle text-warning me-2"></i>
                นักเรียนขาดเรียนติดต่อกัน 3 วัน: ด.ช.สมชาย ใจดี
              </li>
              <li className="mb-2">
                <i className="fas fa-exclamation-circle text-danger me-2"></i>
                นักเรียนมีพฤติกรรมเสี่ยง: ด.ญ.สมหญิง รักเรียน (ขาดเรียนบ่อย)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}; 