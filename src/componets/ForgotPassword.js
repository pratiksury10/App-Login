import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/set-new-password');
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-container11">
      <header className="header">
        <h1 className="admin">Contact your admin</h1>
      </header>
      <main>
        <div>
          <img src={`${process.env.PUBLIC_URL}/Applogin2.jpg`} alt="Illustration" className="img" />
          <p className="description">
            Password can only be reset by your admin. Contact the admin and request them to reset your password.
          </p>
        </div>
        <div className="admin-instructions">
          <p>For the admins assistance - to reset the password the admin will have to:</p>
          <p>Open Q2Pay → Settings → Users → Select user → Reset password</p>
        </div>
        <p className="password-reset-success">Password reset successfully?</p>
        <button className="login-button" onClick={handleLoginClick}>Log In</button>
      </main>
      </div>
    </div>
  );
};

export default ForgotPassword;
