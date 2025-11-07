import React from 'react';
import Button from '../components/ui/Button';
import { EMPLOYEES } from '../lib/mockData';
import { Camera, Trash2 } from 'lucide-react';

const FaceRegistration = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Register New Employee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side: Camera Preview */}
          <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-4 border border-dashed border-gray-300">
            <div className="w-full aspect-video bg-black rounded-md flex items-center justify-center text-white mb-4">
              <Camera className="h-16 w-16 text-gray-500" />
            </div>
            <Button>
              <Camera className="mr-2 h-4 w-4" />
              Capture Photo
            </Button>
          </div>

          {/* Right side: Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <input
                type="text"
                name="department"
                id="department"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Engineering, Marketing, etc."
              />
            </div>
            <div>
              <label htmlFor="assigned-terminal" className="block text-sm font-medium text-gray-700">
                Assigned Terminal
              </label>
              <select
                id="assigned-terminal"
                name="assigned-terminal"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Terminal A - Main Entrance</option>
                <option>Terminal B - West Wing</option>
                <option>Terminal C - Cafeteria</option>
              </select>
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <Button type="button" variant="secondary">Clear Form</Button>
              <Button type="submit">Save Employee</Button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Registered Employees</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Added</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Terminal</th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {EMPLOYEES.map((person) => (
                <tr key={person.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img className="h-10 w-10 rounded-full" src={person.avatar} alt={person.name} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(person.dateAdded).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.terminal}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FaceRegistration;
