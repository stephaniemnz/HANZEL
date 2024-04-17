import React, { useState } from 'react';    

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleLoginSubmit = (event) => {
      event.preventDefault();
      console.log('Login Submitted');
      console.log('Email:', email);
      console.log('Password:', password);
     //logic for authenticating user goes here
    };
  
    const handleSignUpClick = () => {
      console.log('Sign Up button clicked');
    };
    return (    
        <>
      <div className="card">
        <form onSubmit={handleLoginSubmit} style={{ marginTop: '400px' }}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <button onClick={handleSignUpClick} style={{ marginTop: '10px' }}>Sign Up</button>
      </div>
    </>
  );
}