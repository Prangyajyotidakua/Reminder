import React from 'react';
import { Link } from 'react-router-dom';

const LoginFailedPage = ({ onRetryClick }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Login Failed</h1>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={onRetryClick}
      >
        Retry
      </button>
    </div>
  );
};

export default LoginFailedPage;
