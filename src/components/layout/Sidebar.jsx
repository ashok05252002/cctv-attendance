import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, UserPlus, Video, Book, BarChart2, Settings, UserCheck, X } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Employee Registration', href: '/face-registration', icon: UserPlus },
  { name: 'Live Monitoring', href: '/live-detection', icon: Video },
  { name: 'Attendance Logs', href: '/attendance-logs', icon: Book },
  { name: 'Attendance Report', href: '/monthly-summary', icon: BarChart2 },
  { name: 'Settings', href: '/settings', icon: Settings },
];

const SidebarLink = ({ item }) => (
  <NavLink
    to={item.href}
    className={({ isActive }) =>
      `group flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors duration-150 ${
        isActive
          ? 'bg-gray-200 text-gray-900'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`
    }
  >
    <item.icon className="mr-3 h-5 w-5" aria-hidden="true" />
    <span className="truncate">{item.name}</span>
  </NavLink>
);

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 flex z-40 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" onClick={() => setSidebarOpen(false)}></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <UserCheck className="h-8 w-auto text-indigo-600" />
              <span className="ml-2 text-lg font-bold text-gray-800">Pro Attendance</span>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <SidebarLink key={item.name} item={item} />
              ))}
            </nav>
          </div>
        </div>
        <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <UserCheck className="h-8 w-auto text-indigo-600" />
              <span className="ml-2 text-lg font-bold text-gray-800">Pro Attendance</span>
            </div>
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 space-y-1" aria-label="Sidebar">
                {navigation.map((item) => (
                  <SidebarLink key={item.name} item={item} />
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
