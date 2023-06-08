import React from 'react';
import '../css/LoginPage.css';
import login from '../img/log.png';
import logo from '../img/logo.png';

const LoginPage = () => {
  return (
    <div className="login-page">
        <div className="left-section">
            <div className="container">
                <img className='img1' src={login} alt="" />
            </div>
            <div className="new-div">
                <img className="img2" src={logo} alt="logo" />
                <h1 className="text">Let's Empower your <strong>cross <br></br> border patent</strong> seamlessly </h1>
                <p className="text2">Blockchain Driven One Stop IP platform to protect your <br></br>Inventions Globally.</p>
            </div>
        </div>
        <div className="right-section">
        {/* Content for the right div */}
        </div>
    </div>
  );
};

export default LoginPage;
