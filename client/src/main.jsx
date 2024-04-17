import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Purchase from './pages/Purchase';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/purchase',
      element: <Purchase />,
    },
  ],
  { initialPath: window.location.pathname }

);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />
);
