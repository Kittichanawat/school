import React from 'react';
import {
  LineChart, Line, PieChart, Pie,
  XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
  Cell, Legend
} from 'recharts';

const DashboardCharts = () => {
  // ข้อมูลสำหรับกราฟเส้น
  const lineData = [
    { month: 'มิ.ย.', grade: 3.2 },
    { month: 'ก.ค.', grade: 3.4 },
    { month: 'ส.ค.', grade: 3.3 },
    { month: 'ก.ย.', grade: 3.5 },
    { month: 'ต.ค.', grade: 3.6 },
    { month: 'พ.ย.', grade: 3.5 },
  ];

  // ข้อมูลสำหรับกราฟวงกลม
  const pieData = [
    { name: 'คณิตศาสตร์', value: 4 },
    { name: 'วิทยาศาสตร์', value: 3 },
    { name: 'ภาษาไทย', value: 3 },
    { name: 'ภาษาอังกฤษ', value: 2 },
    { name: 'สังคมศึกษา', value: 3 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="row g-4 mt-4">
      <div className="col-md-8">
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <h6 className="card-title mb-4">
              <i className="fas fa-chart-line me-2 text-primary"></i>
              แนวโน้มเกรดเฉลี่ย
            </h6>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 4]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="grade" 
                    stroke="#4e73df" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6, fill: '#4e73df' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <h6 className="card-title mb-4">
              <i className="fas fa-chart-pie me-2 text-primary"></i>
              สัดส่วนรายวิชา
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
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                  />
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