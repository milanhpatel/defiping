import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import logo from './logo.png';

import Launches from './components/Launches';
import Pools from './components/Pools';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/dhedge/dhedge',
})

function App() {
    return (
      <ApolloProvider client={client}>
         <Router>
          <div className="container">
            <img
              src={logo}
              alt="SpaceX"
              style={{ width: 300, display: 'block', margin: 'auto' }}
            />
            <Route exact path="/" component={Pools} />
            {/*<Route exact path="/launch/:id" component={Launch} />*/}
          </div>
        </Router>
      </ApolloProvider>
    );
}

export default App;
