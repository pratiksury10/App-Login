import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componets/Login';
import ForgotPassword from './componets/ForgotPassword';
import SetNewPassword from './componets/SetNewPassword';
import SuccessMessage from './componets/SuccessMessage';
import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/set-new-password" element={<SetNewPassword />} />
        <Route path="/success-message" element={<SuccessMessage />} />
      </Routes>
    </Router>
  );
}

export default App;
