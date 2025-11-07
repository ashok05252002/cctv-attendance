import React from 'react';
import DashboardCard from '../components/DashboardCard';
import { Users, LogIn, UserX, Terminal } from 'lucide-react';
import { EMPLOYEES, ACTIVITIES } from '../lib/mockData';

const DashboardOverview = () => {
  const stats = [
    { name: 'Total Employees', value: EMPLOYEES.length, icon: Users, change: '+2 this month', changeType: 'increase' },
    { name: 'Check-ins Today', value: ACTIVITIES.filter(a => a.status !== 'Unidentified').length, icon: LogIn, change: '+12%', changeType: 'increase' },
    { name: 'Active Terminals', value: '3', icon: Terminal, change: 'All online', changeType: 'increase' },
    { name: 'Absentees Today', value: '4', icon: UserX, change: '-3 vs yesterday', changeType: 'decrease' },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <DashboardCard key={item.name} title={item.name} value={item.value} icon={item.icon} change={item.change} changeType={item.changeType} />
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Activity</h3>
        <div className="mt-4 flow-root">
          <ul role="list" className="-my-5 divide-y divide-gray-200">
            {ACTIVITIES.slice(0, 5).map((activity) => (
              <li key={activity.id} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="h-8 w-8 rounded-full" src={activity.avatar} alt="" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{activity.name}</p>
                    <p className="text-sm text-gray-500 truncate">
                      {new Date(activity.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      activity.status === 'Checked-in' ? 'bg-green-100 text-green-800' :
                      activity.status === 'Late' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
