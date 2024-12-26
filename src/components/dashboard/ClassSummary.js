const ClassSummary = () => {
  return (
    <div className="row mb-4">
      <div className="col-12">
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <h6 className="card-title mb-3">
              <i className="fas fa-users me-2 text-success"></i>
              สรุปข้อมูลรายห้อง
            </h6>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>ห้อง</th>
                    <th>จำนวนนักเรียน</th>
                    <th>มาเรียน</th>
                    <th>ขาด/สาย</th>
                    <th>พฤติกรรมที่ต้องดูแล</th>
                    <th>การบ้านค้าง</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ม.1/1</td>
                    <td>35</td>
                    <td className="text-success">32 (91%)</td>
                    <td className="text-warning">3</td>
                    <td>2</td>
                    <td>5</td>
                  </tr>
                  {/* เพิ่มข้อมูลห้องอื่นๆ */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 