import React from 'react';
import Button from '../components/ui/Button';

const Settings = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 border-b pb-4 mb-4">Terminal Configuration</h2>
        <div className="space-y-4">
          {/* Terminal Item */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
            <div>
              <p className="font-medium">Main Entrance (TERM_01)</p>
              <p className="text-sm text-gray-500">rtsp://192.168.1.101/stream1</p>
            </div>
            <div className="space-x-2">
              <Button variant="secondary">Edit</Button>
              <Button variant="danger">Remove</Button>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
            <div>
              <p className="font-medium">West Wing (TERM_02)</p>
              <p className="text-sm text-gray-500">rtsp://192.168.1.102/stream1</p>
            </div>
            <div className="space-x-2">
              <Button variant="secondary">Edit</Button>
              <Button variant="danger">Remove</Button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Button>Add New Terminal</Button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 border-b pb-4 mb-6">General Settings</h2>
        <form className="space-y-6 max-w-lg">
          <div>
            <label htmlFor="confidence" className="block text-sm font-medium text-gray-700">
              Recognition Confidence Threshold
            </label>
            <input type="range" id="confidence" min="50" max="100" defaultValue="90" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2" />
            <p className="text-sm text-gray-500 text-center">90%</p>
          </div>

          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="late-notification"
                name="late-notification"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                defaultChecked
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="late-notification" className="font-medium text-gray-900">
                Enable Late Arrival Notifications
              </label>
              <p className="text-gray-500">Send a notification when an employee checks in late.</p>
            </div>
          </div>

          <div>
            <label htmlFor="retention" className="block text-sm font-medium text-gray-700">
              Log Retention Period (Days)
            </label>
            <input
              type="number"
              id="retention"
              defaultValue="90"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="pt-4">
            <Button type="submit">Save Settings</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
