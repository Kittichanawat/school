import React, { useState } from 'react';

const BehaviorRecord = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedBehavior, setSelectedBehavior] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [note, setNote] = useState('');

  // ข้อมูลตัวอย่าง
  const behaviorTypes = [
    { id: 'good', name: 'พฤติกรรมที่ดี', color: 'success' },
    { id: 'bad', name: 'พฤติกรรมที่ไม่ดี', color: 'danger' }
  ];

  const behaviors = {
    good: [
      { id: 1, name: 'ช่วยเหลืองานครู', point: 5 },
      { id: 2, name: 'จิตอาสา', point: 3 },
      { id: 3, name: 'เก็บของได้นำส่งครู', point: 2 }
    ],
    bad: [
      { id: 4, name: 'ไม่เข้าชั้นเรียน', point: -5 },
      { id: 5, name: 'ทะเลาะวิวาท', point: -10 },
      { id: 6, name: 'แต่งกายผิดระเบียบ', point: -3 }
    ]
  };

  const students = [
    { id: 1, code: '001', name: 'นายสมชาย ใจดี' },
    { id: 2, code: '002', name: 'นางสาวสมหญิง รักเรียน' },
    // เพิ่มรายชื่อนักเรียนตามต้องการ
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // ส่งข้อมูลไป API
    console.log({
      type: selectedType,
      behavior: selectedBehavior,
      students: selectedStudents,
      note,
      date: new Date().toISOString()
    });
  };

  return (
    <div className="container-fluid py-4">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-4">
            <i className="fas fa-clipboard-list me-2 text-primary"></i>
            บันทึกพฤติกรรมนักเรียน
          </h5>

          <form onSubmit={handleSubmit}>
            {/* ประเภทพฤติกรรม */}
            <div className="row mb-4">
              <div className="col-md-12">
                <label className="form-label">ประเภทพฤติกรรม</label>
                <div className="d-flex gap-2">
                  {behaviorTypes.map(type => (
                    <button
                      key={type.id}
                      type="button"
                      className={`btn ${selectedType === type.id 
                        ? `btn-${type.color}` 
                        : `btn-outline-${type.color}`} flex-grow-1`}
                      onClick={() => {
                        setSelectedType(type.id);
                        setSelectedBehavior('');
                      }}
                    >
                      <i className={`fas fa-${type.id === 'good' ? 'smile' : 'frown'} me-2`}></i>
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* รายละเอียดพฤติกรรม */}
            {selectedType && (
              <div className="row mb-4">
                <div className="col-md-12">
                  <label className="form-label">รายละเอียดพฤติกรรม</label>
                  <select 
                    className="form-select"
                    value={selectedBehavior}
                    onChange={(e) => setSelectedBehavior(e.target.value)}
                    required
                  >
                    <option value="">เลือกพฤติกรรม</option>
                    {behaviors[selectedType].map(behavior => (
                      <option key={behavior.id} value={behavior.id}>
                        {behavior.name} ({behavior.point > 0 ? '+' : ''}{behavior.point} คะแนน)
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* เลือกนักเรียน */}
            <div className="row mb-4">
              <div className="col-md-12">
                <label className="form-label">เลือกนักเรียน</label>
                <div className="card">
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead className="bg-light">
                          <tr>
                            <th width="50">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedStudents(students.map(s => s.id));
                                  } else {
                                    setSelectedStudents([]);
                                  }
                                }}
                                checked={selectedStudents.length === students.length}
                              />
                            </th>
                            <th width="100">รหัส</th>
                            <th>ชื่อ-นามสกุล</th>
                          </tr>
                        </thead>
                        <tbody>
                          {students.map(student => (
                            <tr key={student.id}>
                              <td>
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  checked={selectedStudents.includes(student.id)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setSelectedStudents([...selectedStudents, student.id]);
                                    } else {
                                      setSelectedStudents(selectedStudents.filter(id => id !== student.id));
                                    }
                                  }}
                                />
                              </td>
                              <td>{student.code}</td>
                              <td>{student.name}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* หมายเหตุ */}
            <div className="row mb-4">
              <div className="col-md-12">
                <label className="form-label">หมายเหตุ (ถ้ามี)</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="ระบุรายละเอียดเพิ่มเติม..."
                ></textarea>
              </div>
            </div>

            {/* ปุ่มบันทึก */}
            <div className="row">
              <div className="col-md-12">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!selectedType || !selectedBehavior || selectedStudents.length === 0}
                >
                  <i className="fas fa-save me-2"></i>
                  บันทึกพฤติกรรม
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BehaviorRecord; 