import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SetNewPassword.css';

const SetNewPassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please try again.');
    } else if (!validatePassword(newPassword)) {
      setErrorMessage('Password must be at least 8 characters long and include a mix of upper and lower case letters, numbers, and special characters.');
    } else {
      setErrorMessage('');
      setShowMessage(true);
      setTimeout(() => {
        navigate('/success-message', { state: { message: 'Allow user to set their own password on first login.' } });
      }, 2000); // Wait for 2 seconds before navigating
    }
  };

  const validatePassword = (password) => {
    const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordCriteria.test(password);
  };

  return (
    <div className="set-new-password-container">
      <span className='log'>
      <span className='line'>
        <p className="mandatory-message11">
          <img src='Loginsuccess.jpg' alt='Login' className='img'/>
          <h1 className='header'>Login successful!</h1>
          It is mandatory for you to set a new password, which is not the same as the password provided by the admin.
        </p>
      </span>
      <form className='login-form2' onSubmit={handlePasswordSubmit}>
        <p className='pass12'>Set New Password !</p>
        <span className='field1'>
          <input 
            type="password" 
            placeholder="Old Password" 
            value={oldPassword} 
            onChange={(e) => setOldPassword(e.target.value)} 
          />
        </span>
        <span className='field2'>
          <input 
            type="password" 
            placeholder="New Password" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} 
          />
        </span>
        <span className='field3'>
          <input 
            type="password" 
            placeholder="Confirm New Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        </span>
        <div className='edit22'>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {showMessage && <p className="success-message">Allow user to set their own password on first login.</p>}
        <button type="submit" className="set-password-button">Set New Password</button>
        </div>
      </form>
      </span>
    </div>
  );
};

export default SetNewPassword;
