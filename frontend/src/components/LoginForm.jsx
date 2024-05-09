import React from 'react';
import './LoginForm.css'
import KUlogo from '../assets/LOGO_KU.png'

const LoginForm = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <div className="login-logo">
                    <img src={KUlogo} alt="KU logo" />
                </div>
                <form>
                    <div className="usr-form">
                        <label>
                            Email
                            <input
                                type="text"
                                placeholder="example@mail.com"
                                required>
                            </input>
                        </label>
                    </div>
                    <div className="pass-form">
                        <label>
                            Password
                            <input
                                type="password"
                                placeholder="123456@abc"
                                required>
                            </input>
                        </label>
                    </div>
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
