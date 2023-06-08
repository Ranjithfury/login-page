import React from 'react';
import '../css/LoginPage.css';
import login from '../img/log.png';
import logo from '../img/logo.png';

const LoginPage = () => {
        const handleLogin = (e) => {
          e.preventDefault();
          // Handle login logic
        };
      
        const handleGoogleLogin = () => {
          // Handle Google login logic
        };
      
        const handleAppleLogin = () => {
          // Handle Apple ID login logic
        };
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
            <h1 className="text3">Login in your Account</h1>
        <form onSubmit={handleLogin}>
            <div className="form-Container">
                <input className="lbl" type="email" name="email" required placeholder="Email"/>
                <br></br>
            <   input className="lbl" type="password" name="password" required placeholder="Password"/>
                <a href='/' className="anchor">Forgot password?</a>
                <button type="submit" className="btn">Login</button>
            </div>
            
        </form>
        <h3 className="text4">OR</h3>
        <div className="form-Container">
            <button onClick={handleGoogleLogin} className="btn2">Login with Google</button>
            <button onClick={handleAppleLogin} className="btn2">Login with Apple ID</button>
            <p className="text4">Don't have an account? <a href ="/">Signup</a></p>
        </div>
        </div>
    </div>
  );
};

export default LoginPage;
