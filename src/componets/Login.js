import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    navigate('/set-new-password');
  };

  return (
    <div className="login-container">
      <div className="illustration">
        <img src={`${process.env.PUBLIC_URL}/Applogin1.jpg`} alt="Image" />
      </div>
      <div className="login-form">
        <div className="input-field07">
        {/* <input type="text" placeholder="User ID"  className='inputfield08'/> */}
        </div>
        <input type="text" placeholder="User ID"  className='inputfield80'/>
        <div className="password-wrapper">
          <input 
            type={passwordVisible ? "text" : "password"} 
            placeholder="Password" 
            className="input-field" 
          />
          <span className="password-toggle" onClick={togglePasswordVisibility}>
            {passwordVisible ? '🙈' : '👁️'}
          </span>
        </div>
        <a href="#" className="forgot-password" onClick={() => navigate('/forgot-password')}>
          Forgot your password?
        </a>
        <button className="login-button12">Log In</button>
      </div>
    </div>
  );
};

export default Login;
