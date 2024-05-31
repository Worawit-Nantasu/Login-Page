import React, { useState } from 'react';
import './LoginForm.css';
import KUlogo from '../assets/LOGO_KU.png';
import { loginUser } from './LoginFormAPI';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage(error);
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-logo">
          <img src={KUlogo} alt="KU logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="usr-form">
            <label>
              Email
              <input
                type="text"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="pass-form">
            <label>
              Password
              <input
                type="password"
                placeholder="123456@abc"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="login-button">
            <button type="submit">Login</button>
          </div>
          <div className="forgot-password">
            <a href="#forgot-password">forgot password</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
