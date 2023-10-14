import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ModifyReminderPage = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your reminder modification logic here
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Modify Reminder</h1>
      <form className="max-w-lg w-full p-4 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="selectedDate" className="text-sm">Select Date:</label>
          <input
            type="date"
            id="selectedDate"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full border rounded py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="selectedSubject" className="text-sm">Select Subject:</label>
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
          <label htmlFor="selectedReminder" className="text-sm">Reminders:</label>
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
          <label htmlFor="description" className="text-sm">Add description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-sm">Email Address:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactNo" className="text-sm">Contact No:</label>
          <input
            type="text"
            id="contactNo"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            className="w-full border rounded py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="smsNo" className="text-sm">SMS No:</label>
          <input
            type="text"
            id="smsNo"
            value={smsNo}
            onChange={(e) => setSmsNo(e.target.value)}
            className="w-full border rounded py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm">Recur for next:</label>
          <div>
            <label className="inline-flex items-center text-sm">
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
            <label className="inline-flex items-center text-sm">
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
            <label className="inline-flex items-center text-sm">
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
            <label className="inline-flex items-center text-sm">
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
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Modify Reminder
        </button>
      </form>
      <Link to="/home">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 mt-4 rounded">
          Back
        </button>
      </Link>
      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 mt-4 rounded">
        Log out
      </button>
    </div>
  );
};

export default ModifyReminderPage;
