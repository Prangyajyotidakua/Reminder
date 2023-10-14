import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ username }) => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <nav className="bg-green-500 w-full py-4 text-white text-center">
        <h1 className="text-2xl font-bold">Welcome to the Reminder Application</h1>
      </nav>
      <div className="text-center mb-4">
        <p className="text-lg">
          Today is {dateTime.toLocaleDateString(undefined, options)}
        </p>
      </div>
      <div className="flex flex-wrap justify-center space-x-4">
        <Link to="/set-reminder">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Set Reminder
          </button>
        </Link>
        <Link to="/modify-reminder">
          <button className="bg-blue-500 hoverbg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Modify Reminder
          </button>
        </Link>
        <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
          Disable Reminder
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
          Delete Reminder
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
          Enable Reminder
        </button>
        <Link to="/view-reminders">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">
            View your Reminders
          </button>
        </Link>
      </div>
      <div className="mt-8 w-full flex justify-between">
        <button className="bg-black hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded">
          Back
        </button>
        <Link to="/login">
          <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
            Log out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
