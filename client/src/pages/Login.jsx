import React, { useState } from 'react'; 
import { useMutation, gql } from '@apollo/client'; 
import { Link } from 'react-router-dom';  
import {LOGIN} from '../utils/mutations'; // Renamed the imported LOGIN to LOGIN_MUTATION
import Auth from '../utils/auth';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login] = useMutation(LOGIN);
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleLoginSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await login({
          variables: { email, password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token); // Assuming this method exists and properly handles the token
      } catch (error) {
        console.error('Login failed', error);
      }
    }; 
  

    return (    
    <>
      <div className="card" style={{ marginTop: '475px', color: 'white'}} >
        <form onSubmit={handleLoginSubmit}>
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
        <Link style={{ color: 'white'}} to="/signup">Sign Up</Link>
      </div>
    </>
  );
}
