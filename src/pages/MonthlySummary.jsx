import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { attendanceReportData } from '../lib/mockData';

const PIE_COLORS = ['#10b981', '#f59e0b', '#ef4444'];

const MonthlySummary = () => {
  const { totalEmployees, totalCheckIns, lateArrivals, absentees, dailyTrends, checkInFrequency, attendanceOverview } = attendanceReportData;

  const summaryCards = [
    { label: 'Total Employees', value: totalEmployees },
    { label: 'Total Check-ins (Month)', value: totalCheckIns },
    { label: 'Late Arrivals (Month)', value: lateArrivals },
    { label: 'Avg. Absentees (Day)', value: absentees },
  ];

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map(card => (
          <div key={card.label} className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200 p-5">
            <dt className="text-sm font-medium text-gray-500 truncate">{card.label}</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{card.value}</dd>
          </div>
        ))}
      </div>

      {/* Daily Check-in Trends Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Daily Check-in Trends (Last 30 Days)</h3>
        <div className="mt-4" style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={dailyTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="date" fontSize={12} tick={{ fill: '#6b7280' }} />
              <YAxis fontSize={12} tick={{ fill: '#6b7280' }} />
              <Tooltip wrapperClassName="rounded-md border bg-white text-sm shadow-sm" />
              <Legend />
              <Line type="monotone" dataKey="checkIns" stroke="#4f46e5" strokeWidth={2} name="Check-ins" />
              <Line type="monotone" dataKey="late" stroke="#f59e0b" strokeWidth={2} name="Late Arrivals" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Employee Check-in Frequency */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Top Employee Check-in Frequency</h3>
          <div className="mt-4" style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={checkInFrequency} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis type="number" fontSize={12} tick={{ fill: '#6b7280' }} />
                <YAxis type="category" dataKey="name" width={120} fontSize={12} tick={{ fill: '#6b7280' }} />
                <Tooltip wrapperClassName="rounded-md border bg-white text-sm shadow-sm" />
                <Bar dataKey="checkIns" fill="#4f46e5" barSize={20} name="Check-ins (Month)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Attendance Overview */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Today's Attendance Overview</h3>
          <div className="mt-4" style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={attendanceOverview}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {attendanceOverview.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip wrapperClassName="rounded-md border bg-white text-sm shadow-sm" />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlySummary;
