const QuickActions = () => {
  return (
    <div className="row mb-4">
      <div className="col-12">
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <h6 className="card-title mb-3">
              <i className="fas fa-clock me-2 text-primary"></i>
              การดำเนินการด่วน
            </h6>
            <div className="d-flex gap-2 flex-wrap">
              <button className="btn btn-primary">
                <i className="fas fa-user-check me-2"></i>
                เช็คชื่อเข้าเรียน
              </button>
              <button className="btn btn-warning">
                <i className="fas fa-exclamation-circle me-2"></i>
                บันทึกพฤติกรรม
              </button>
              <button className="btn btn-info">
                <i className="fas fa-file-alt me-2"></i>
                ออกรายงาน
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 