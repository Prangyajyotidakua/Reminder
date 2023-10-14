import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EnableReminderPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedReminder, setSelectedReminder] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [smsNo, setSmsNo] = useState('');
  const [recurOptions, setRecurOptions] = useState([]);

  const handleRecurOptionChange = (option) => {
    if (recurOptions.includes(option)) {
      setRecurOptions(recurOptions.filter((item) => item !== option));
    } else {
      setRecurOptions([...recurOptions, option]);
    }
  };

  const handleEnableReminder = () => {
    // Implement your enable reminder logic here
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Enable Reminder</h1>
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
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email Address:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactNo">Contact No:</label>
          <input
            type="text"
            id="contactNo"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            className="w-full border rounded py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="smsNo">SMS No:</label>
          <input
            type="text"
            id="smsNo"
            value={smsNo}
            onChange={(e) => setSmsNo(e.target.value)}
            className="w-full border rounded py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label>Recur for next:</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={recurOptions.includes('7 Days')}
                onChange={() => handleRecurOptionChange('7 Days')}
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2">7 Days</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={recurOptions.includes('5 Days')}
                onChange={() => handleRecurOptionChange('5 Days')}
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2">5 Days</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={recurOptions.includes('3 Days')}
                onChange={() => handleRecurOptionChange('3 Days')}
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2">3 Days</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={recurOptions.includes('2 Days')}
                onChange={() => handleRecurOptionChange('2 Days')}
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2">2 Days</span>
            </label>
          </div>
        </div>
        <button
          type="button"
          onClick={handleEnableReminder}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Enable Reminder
        </button>
      </form>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 mt-4 rounded">
        Log out
      </button>
    </div>
  );
};

export default EnableReminderPage;
