import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './component/login';
import LoginFailedPage from './component/LoginFailed';
import HomePage from './component/Home';
import SetReminderPage from './component/SetReminderPage';
import ModifyReminderPage from './component/ModifyReminderPage';
import ViewRemindersPage from './component/ViewRemindersPage';
import EnableReminderPage from './component/EnableReminderPage';
import DisableReminderPage from './component/DisableReminderPage';
import DeleteReminderPage from './component/DeleteReminderPage';
import LogoutPage from './component/LogoutPage';
import ConfirmationPage from './component/ConfirmationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login-failed" element={<LoginFailedPage />} />
        <Route path="/set-reminder" element={<SetReminderPage />} />
        <Route path="/modify-reminder" element={<ModifyReminderPage />} />
        <Route path="/view-reminder" element={<ViewRemindersPage />} />
        <Route path="/enable-reminder" element={<EnableReminderPage />} />
        <Route path="/disable-reminder" element={<DisableReminderPage />} />
        <Route path="/delete-reminder" element={<DeleteReminderPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
