import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
//
import { ADD_USER } from '../utils/mutations';

function Signup() {
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: ''});
  const [addUser] = useMutation(ADD_USER);
  const location = useLocation();
  const backgroundClass = location.pathname === '/' ? 'home-background' : 'login-background';

useEffect(() => { 
  document.body.className = backgroundClass;
    return () => {
      document.body.className = '';
    };
  }, [backgroundClass]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try{
    const {data} = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = data.addUser.token;
    Auth.login(token);
    }       catch (error) {
      console.error('Signup failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="card" style={{ marginTop: '425px', color: 'white'}}>
      <h2>Join Us</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="text"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="text"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button> 
        </div>
      </form>
      <Link style={{ color: 'white'}} to="/login">Already have an account? Login</Link>
    </div>
  );
}

export default Signup;
