import React from 'react';
import '../css/LoginPage.css';
import login from '../img/login.png';
import logo from '../img/logo.png';
import frame from '../img/Frame 124.png';
import Google from '../img/Frame.png';
import apple from '../img/Vector.png';
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
                <img className='img1' src={login} alt="Loding" />
                <img className='img3' src={frame} alt="No.of patents"></img> 
            </div>
            <div className="new-div">
                <img className="img2" src={logo} alt="logo" />
                <h1 className="text">Let's Empower your <strong>cross <br></br> border patent</strong> seamlessly </h1>
                <p className="text2">Blockchain Driven One Stop IP platform to protect your <br></br>Inventions Globally.</p>
            </div>
        </div>
        <div className="right-section">
            <h1 className="text3">Login your Account</h1>
        <form onSubmit={handleLogin}>
            <div className="form-Container">
                <input className="lbl" type="email" name="email" required placeholder="Email"/>
                <br></br>
            <   input className="lbl" type="password" name="password" required placeholder="Password"/>
                <a href='/' className="anchor1">Forgot password?</a>
                <button type="submit" className="btn">Login</button>
            </div>
            
        </form>
        <h3 className="text4">OR</h3>
        <div className="form-Container">
            <button onClick={handleGoogleLogin} className="btn2"><img src={Google} className="logo"></img>Login with Google</button>
            <button onClick={handleAppleLogin} className="btn2"><img src={apple} className="logo"></img>Login with Apple ID</button>
            <p className="text4">Don't have an account? <a href ="/" className="anchor">Signup</a></p>
        </div>
        <p className="text5">2023 Copyrights. All Rights Reserved</p>
        </div>
    </div>
  );
};

export default LoginPage;
