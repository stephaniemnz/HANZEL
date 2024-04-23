import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";
// import Signup from "./pages/SignUp";  
// import Details from "./pages/Details";

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route exact path="/" component={App} />
//         <Route path="/home" component={Home} />
//         <Route path="/login" component={Login} />
//         <Route path="/cart" component={Cart} />
//         <Route path="/signup" component={Signup} />
//         <Route path="/details/:title" component={Details} />
//         <Route path="*" component={() => "404 NOT FOUND"} />
//       </Routes>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import { Provider } from 'react-redux';
// import store from './utils/store';
import Navbar from './components/Navbar';
import './index.css';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Navbar />
        <Outlet />
    </ApolloProvider>
  );
}

export default App;