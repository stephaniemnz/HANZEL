import React, { useState } from 'react'; 
import {useMutation, gql} from '@apollo/client'; 
import { Link } from 'react-router-dom';  
import {LOGIN as LOGIN_MUTATION} from '../utils/mutations'; // Renamed the imported LOGIN to LOGIN_MUTATION
import Auth from '../utils/auth';

const LOGIN = gql`
mutation loginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

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
          variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
        console.log('Login Succcessful', data);  
      } catch (error) {
        console.error('Login failed', error);
      }
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
        <div>
          <Link to="/signup" style={{ marginTop: '10px'}} onClick={handleSignUpClick}>
            Sign Up
          </Link>
      </div>
      </div>
    </>
  );
}
