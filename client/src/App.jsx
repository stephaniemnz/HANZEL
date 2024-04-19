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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/details/:imageId" element={<Details />} />
          <Route path="/purchase/:imageId" element={<Purchase />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;