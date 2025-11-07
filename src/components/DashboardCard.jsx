import React from 'react';

const DashboardCard = ({ title, value, icon: Icon, change, changeType }) => {
  const changeColor = changeType === 'increase' ? 'text-green-600' : 'text-red-600';
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500 truncate">{title}</h3>
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <div className="mt-2">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        {change && (
          <p className={`text-xs ${changeColor}`}>
            {change} vs last month
          </p>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
