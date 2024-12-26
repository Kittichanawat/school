const ActivityCalendar = () => {
  return (
    <div className="col-md-4">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h6 className="card-title mb-3">
            <i className="fas fa-calendar me-2 text-info"></i>
            กิจกรรมที่กำลังจะมาถึง
          </h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <span className="badge bg-primary me-2">12 เม.ย.</span>
              ประชุมผู้ปกครอง
            </li>
            <li className="mb-2">
              <span className="badge bg-warning me-2">15 เม.ย.</span>
              ส่งผลการเรียนกลางภาค
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}; 