import React from 'react';
import { ACTIVITIES } from '../lib/mockData';

const LiveDetection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main content: Live Feed */}
      <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Live Terminal Feed - Main Entrance</h2>
        <div className="w-full aspect-video bg-black rounded-md flex items-center justify-center text-white">
          <p>Live feed placeholder</p>
        </div>
      </div>

      {/* Right sidebar: Detections */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Live Activity</h3>
        <ul role="list" className="divide-y divide-gray-200 h-[60vh] overflow-y-auto">
          {ACTIVITIES.map((activity) => (
            <li key={activity.id} className="py-3">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={activity.avatar} alt="" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium truncate ${activity.status === 'Unidentified' ? 'text-red-600' : 'text-gray-900'}`}>
                    {activity.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {new Date(activity.timestamp).toLocaleTimeString()}
                  </p>
                </div>
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                  activity.status === 'Checked-in' ? 'bg-green-100 text-green-800' :
                  activity.status === 'Late' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {activity.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LiveDetection;
