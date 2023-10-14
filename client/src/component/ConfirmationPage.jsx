import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Thank you</h1>
        <p>Your transaction is confirmed</p>
        <div className="mt-4">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
