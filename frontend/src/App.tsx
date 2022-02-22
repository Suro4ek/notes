import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/login/Login";
import Notes from "./components/notes/Notes";
import MyNotes from "./components/notes/MyNotes";
import Register from "./components/register/Register";
import MyProfile from "./pages/MyProfile";

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token || ''
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

function App() {
  return (
      <ApolloProvider client={client}>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PrivateRoute>
                        <Home>
                            <MyProfile/>
                        </Home>
                    </PrivateRoute>
                } />
              <Route path="/notes" element={
                  <PrivateRoute>
                      <Home>
                          <Notes/>
                      </Home>
                  </PrivateRoute>
              } />
                <Route path="/login" element={
                    <Login/>
                } />
                <Route path="/register" element={
                    <Register/>
                } />
                <Route path="/mynotes" element={
                    <PrivateRoute>
                        <Home>
                            <MyNotes/>
                        </Home>
                    </PrivateRoute>
                } />
            </Routes>
          </BrowserRouter>
      </ApolloProvider>
  );
}

export default App;
