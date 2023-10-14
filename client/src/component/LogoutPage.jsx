import React from 'react';
import { Link } from 'react-router-dom';

const LogoutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">You have been logged out</h1>
        <div className="mt-4">
          <Link to="/login" className="text-blue-500 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
