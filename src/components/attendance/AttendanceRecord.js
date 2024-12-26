import React, { useState } from 'react';

const AttendanceRecord = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedTerm, setSelectedTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [students, setStudents] = useState([]);

  // ข้อมูลตัวอย่าง
  const classes = [
    { id: 1, name: 'ม.1/1' },
    { id: 2, name: 'ม.1/2' },
    { id: 3, name: 'ม.2/1' },
    { id: 4, name: 'ม.2/2' }
  ];

  const years = [
    { id: '2566', name: '2566' },
    { id: '2567', name: '2567' }
  ];

  const terms = [
    { id: 1, name: 'ภาคเรียนที่ 1' },
    { id: 2, name: 'ภาคเรียนที่ 2' }
  ];

  const months = [
    { id: '01', name: 'มกราคม' },
    { id: '02', name: 'กุมภาพันธ์' },
    { id: '03', name: 'มีนาคม' },
    { id: '04', name: 'เมษายน' },
    { id: '05', name: 'พฤษภาคม' },
    { id: '06', name: 'มิถุนายน' },
    { id: '07', name: 'กรกฎาคม' },
    { id: '08', name: 'สิงหาคม' },
    { id: '09', name: 'กันยายน' },
    { id: '10', name: 'ตุลาคม' },
    { id: '11', name: 'พฤศจิกายน' },
    { id: '12', name: 'ธันวาคม' }
  ];

  // ตัวอย่างข้อมูลนักเรียน
  const mockStudents = [
    { id: 1, code: '001', name: 'นายสมชาย ใจดี', status: '' },
    { id: 2, code: '002', name: 'นางสาวสมหญิง รักเรียน', status: '' },
    // เพิ่มข้อมูลนักเรียนตามต้องการ
  ];

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    // TODO: เรียก API เพื่อดึงข้อมูลนักเรียนในห้องที่เลือก
    setStudents(mockStudents);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: ส่งข้อมูลไป API
    console.log({
      class: selectedClass,
      year: selectedYear,
      term: selectedTerm,
      month: selectedMonth,
      date: selectedDate,
      students: students
    });
  };

  const handleStatusChange = (studentId, status) => {
    setStudents(students.map(student => 
      student.id === studentId ? { ...student, status } : student
    ));
  };

  return (
    <div className="container-fluid py-4">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-4">
            <i className="fas fa-user-check me-2 text-primary"></i>
            บันทึกการเข้าชั้นเรียน
          </h5>

          <form onSubmit={handleSubmit}>
            <div className="row g-3 mb-4">
              {/* เลือกระดับชั้น */}
              <div className="col-md-3">
                <label className="form-label">ระดับชั้น</label>
                <select 
                  className="form-select"
                  value={selectedClass}
                  onChange={handleClassChange}
                  required
                >
                  <option value="">เลือกระดับชั้น</option>
                  {classes.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              {/* เลือกปีการศึกษา */}
              <div className="col-md-3">
                <label className="form-label">ปีการศึกษา</label>
                <select 
                  className="form-select"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  required
                >
                  <option value="">เลือกปีการศึกษา</option>
                  {years.map(year => (
                    <option key={year.id} value={year.id}>{year.name}</option>
                  ))}
                </select>
              </div>

              {/* เลือกภาคเรียน */}
              <div className="col-md-3">
                <label className="form-label">ภาคเรียน</label>
                <select 
                  className="form-select"
                  value={selectedTerm}
                  onChange={(e) => setSelectedTerm(e.target.value)}
                  required
                >
                  <option value="">เลือกภาคเรียน</option>
                  {terms.map(term => (
                    <option key={term.id} value={term.id}>{term.name}</option>
                  ))}
                </select>
              </div>

              {/* เลือกเดือน */}
              <div className="col-md-3">
                <label className="form-label">เดือน</label>
                <select 
                  className="form-select"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  required
                >
                  <option value="">เลือกเดือน</option>
                  {months.map(month => (
                    <option key={month.id} value={month.id}>{month.name}</option>
                  ))}
                </select>
              </div>

              {/* เลือกวันที่ */}
              <div className="col-md-3">
                <label className="form-label">วันที่</label>
                <input
                  type="date"
                  className="form-control"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* ตารางรายชื่อนักเรียน */}
            {students.length > 0 && (
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="bg-light">
                    <tr>
                      <th>รหัสนักเรียน</th>
                      <th>ชื่อ-นามสกุล</th>
                      <th className="text-center">สถานะ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(student => (
                      <tr key={student.id}>
                        <td>{student.code}</td>
                        <td>{student.name}</td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <button
                              type="button"
                              className={`btn btn-sm ${student.status === 'present' ? 'btn-success' : 'btn-outline-success'}`}
                              onClick={() => handleStatusChange(student.id, 'present')}
                            >
                              <i className="fas fa-check me-1"></i> มา
                            </button>
                            <button
                              type="button"
                              className={`btn btn-sm ${student.status === 'late' ? 'btn-warning' : 'btn-outline-warning'}`}
                              onClick={() => handleStatusChange(student.id, 'late')}
                            >
                              <i className="fas fa-clock me-1"></i> สาย
                            </button>
                            <button
                              type="button"
                              className={`btn btn-sm ${student.status === 'absent' ? 'btn-danger' : 'btn-outline-danger'}`}
                              onClick={() => handleStatusChange(student.id, 'absent')}
                            >
                              <i className="fas fa-times me-1"></i> ขาด
                            </button>
                            <button
                              type="button"
                              className={`btn btn-sm ${student.status === 'leave' ? 'btn-info' : 'btn-outline-info'}`}
                              onClick={() => handleStatusChange(student.id, 'leave')}
                            >
                              <i className="fas fa-envelope me-1"></i> ลา
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* ปุ่มบันทึก */}
            {students.length > 0 && (
              <div className="text-end mt-4">
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-save me-2"></i>
                  บันทึกการเข้าเรียน
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AttendanceRecord; 