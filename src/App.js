import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Link, Switch } from 'react-router-dom'

import './App.css';

import Home from './components/home';
import School from './components/school';
import Navigation from './components/navigation';
import NotFound from './components/not-found';

class App extends Component {
  render() {
    const url = { slug : 'https://vefforritun2-2018-v4-synilausn.herokuapp.com/'};

    return (
      <main className="app">
        <Navigation slug={url}/>
        <Route exact path="/" component={Home} />
      </main>
    );
  }
}

export default App;