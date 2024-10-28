import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SuccessMessage.css';

const SuccessMessage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { message } = location.state || { message: '' };

  const handleLoginClick = () => {
    navigate('/'); 
  };

  return (
    <div className="success-message-container">
      <div className="login-success-section">
        <img src="LoginSuccess.jpg" alt="Login Success" className="success-img" />
        <h1>Login successful!</h1>
        <p className='para'>
          It is mandatory for you to set a new password, which is not the same as the password provided by the admin.
        </p>
      </div>
      <div className="password-reset-section">
        <div className="reset-icon">✔️</div>
        <h1>Password reset successfully!</h1>
        <p>Your password has been successfully reset. Click below to log in with your new credentials.</p>
        <button className="login-button" onClick={handleLoginClick}>Log In</button>
      </div>
    </div>
  );
};

export default SuccessMessage;
