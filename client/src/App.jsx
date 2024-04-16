import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <>
      {/* <ApolloProvider client={client}> */}
        <Navbar />
        <Outlet />
      {/* </ApolloProvider> */}
    </>
  );
}

export default App;
