import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DisableReminderPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedReminder, setSelectedReminder] = useState('');
  const [description, setDescription] = useState('');

  const handleDisableReminder = () => {
    // Implement your disable reminder logic here
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Disable Reminder</h1>
      <form className="max-w-lg w-full">
        <div className="mb-4">
          <label htmlFor="selectedDate">Select Date:</label>
          <input
            type="date"
            id="selectedDate"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full border rounded py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="selectedSubject">Select Subject:</label>
          <select
            id="selectedSubject"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full border rounded py-2 px-3"
          >
            <option value="">Select a subject</option>
            <option value="Subject 1">Subject 1</option>
            <option value="Subject 2">Subject 2</option>
            {/* Add more subjects as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="selectedReminder">Reminders:</label>
          <select
            id="selectedReminder"
            value={selectedReminder}
            onChange={(e) => setSelectedReminder(e.target.value)}
            className="w-full border rounded py-2 px-3"
          >
            <option value="">Select a reminder</option>
            <option value="Reminder 1">Reminder 1 - Description 1...</option>
            <option value="Reminder 2">Reminder 2 - Description 2...</option>
            {/* Add more reminder options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            readOnly
            className="w-full border rounded py-2 px-3"
          />
        </div>
        <button
          type="button"
          onClick={handleDisableReminder}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
        >
          Disable Reminder
        </button>
      </form>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 mt-4 rounded">
        Log out
      </button>
    </div>
  );
};

export default DisableReminderPage;
