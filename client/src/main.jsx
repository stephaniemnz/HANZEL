import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import 'semantic-ui-css/semantic.min.css'
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Purchase from "./pages/Purchase";
// import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/purchase",
        element: <Purchase />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
