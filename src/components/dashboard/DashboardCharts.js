import React from 'react';
import {
  BarChart, Bar, PieChart, Pie,
  XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
  Cell, Legend
} from 'recharts';

const DashboardCharts = () => {
  // ข้อมูลสำหรับกราฟแท่ง
  const barData = [
    { date: '25 มี.ค.', มาเรียน: 32, มาสาย: 2, ขาดเรียน: 1, ลา: 1 },
    { date: '26 มี.ค.', มาเรียน: 30, มาสาย: 3, ขาดเรียน: 2, ลา: 0 },
    { date: '27 มี.ค.', มาเรียน: 31, มาสาย: 1, ขาดเรียน: 1, ลา: 1 },
    { date: '28 มี.ค.', มาเรียน: 29, มาสาย: 4, ขาดเรียน: 2, ลา: 0 },
    { date: '29 มี.ค.', มาเรียน: 32, มาสาย: 1, ขาดเรียน: 0, ลา: 1 },
    { date: '1 เม.ย.', มาเรียน: 30, มาสาย: 2, ขาดเรียน: 1, ลา: 0 },
    { date: '2 เม.ย.', มาเรียน: 31, มาสาย: 1, ขาดเรียน: 1, ลา: 1 },
  ];

  // ข้อมูลสำหรับกราฟวงกลม
  const pieData = [
    { name: 'มาสาย', value: 12 },
    { name: 'ไม่ส่งการบ้าน', value: 10 },
    { name: 'หนีเรียน', value: 5 },
    { name: 'ทะเลาะวิวาท', value: 8 },
    { name: 'แต่งกายผิดระเบียบ', value: 15 },
  ];

  const COLORS = ['#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="row g-4 mt-4">
      <div className="col-md-8">
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <h6 className="card-title mb-4">
              <i className="fas fa-chart-bar me-2 text-primary"></i>
              สถิติการเข้าเรียนรายวัน (7 วันล่าสุด)
            </h6>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="มาเรียน" fill="#4e73df" />
                  <Bar dataKey="มาสาย" fill="#f6c23e" />
                  <Bar dataKey="ขาดเรียน" fill="#e74a3b" />
                  <Bar dataKey="ลา" fill="#36b9cc" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <h6 className="card-title mb-4">
              <i className="fas fa-exclamation-triangle me-2 text-warning"></i>
              พฤติกรรมที่พบบ่อย (7 วันล่าสุด)
            </h6>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;