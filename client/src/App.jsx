import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Details from './pages/Details'; 
import Purchase from './pages/Purchase'; 
import NotFound from './pages/NotFound';

function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/details/:imageId" component={Details} />
        <Route path="/purchase/:imageId" component={Purchase} />
        <Route component={NotFound} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
