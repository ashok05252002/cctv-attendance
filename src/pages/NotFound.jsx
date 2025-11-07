import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Page Not Found</h2>
      <p className="mt-4 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className="mt-6">
        <Link to="/dashboard">
          <Button>Go back home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
