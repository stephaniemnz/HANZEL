import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Purchase from './pages/Purchase';

function App() {
  return (
    <Router>
      <div>
        <switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/purchase">
            <Purchase />
          </Route>
          <Route path="/">
            <Home />
          </Route>  
        </switch>   
      </div>
   </Router>
  );
}

export default App;