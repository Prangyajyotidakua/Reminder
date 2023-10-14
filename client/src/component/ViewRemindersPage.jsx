import React from 'react';
import { Link } from 'react-router-dom';

const ViewRemindersPage = () => {
  // You can add state and filtering logic here

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-4">View Your Reminders</h1>

      <div className="flex justify-center space-x-4 mb-4">
        <div>
          <label htmlFor="fromDate" className="text-sm">Select From Date:</label>
          <input type="date" id="fromDate" className="border rounded py-2 px-3" />
        </div>

        <div>
          <label htmlFor="toDate" className="text-sm">Select To Date:</label>
          <input type="date" id="toDate" className="border rounded py-2 px-3" />
        </div>

        <div>
          <label htmlFor="subject" className="text-sm">Subject:</label>
          <select id="subject" className="border rounded py-2 px-3">
            <option value="">All Subjects</option>
            <option value="Subject 1">Subject 1</option>
            <option value="Subject 2">Subject 2</option>
            {/* Add more subjects as needed */}
          </select>
        </div>
      </div>

      <table className="min-w-full border rounded">
        <thead>
          <tr>
            <th>Reminder Name</th>
            <th>Reminder Subject</th>
            <th>Reminder Description</th>
            <th>Email Address</th>
            <th>Contact No</th>
            <th>SMS No</th>
            <th>Status</th>
            <th>Recurrence Frequency</th>
            <th>Select a Reminder</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping through reminders and displaying rows */}
        </tbody>
      </table>

      <div className="mt-4">
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ViewRemindersPage;
