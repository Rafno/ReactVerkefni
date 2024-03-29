import React, { Component } from "react";
import Helmet from "react-helmet";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./components/home";
import School from "./components/school";
import Navigation from "./components/navigation";
import NotFound from "./components/not-found";
// Fetch fall sem s�kir g�gnin, h�gir gr��arlega ef g�gn eru mikil en alveg � lagi fyrir �etta verkefni.
import { fetchNavigation, fetchDynamic } from "./utils/data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      navigation: null,
      stats: null
    };
  }
  async componentDidMount() {
    try {
      const data = await fetchNavigation();
      const stats = await fetchDynamic('stats');
      this.setState({ stats, navigation: data, loading: false });
    } catch (e) {
      console.error("Error fetching data", e);
      this.setState({ loading: false });
    }
  }
  render() {
    const { stats, navigation, loading } = this.state;
    if (loading) return <div>loading...</div>;
    return (
      <main className="app">
        <Navigation navigation={navigation} />
        <Helmet>
          <title>Ugla Tests</title>
        </Helmet>
        <Switch>
          <Route exact path='/' render={(props) => (
            <Home {...props} stats={stats} />
          )} />
          {navigation.map(({ name, link, slug }) =>
            <Route path={link} render={(props) => (
              <School {...props} slug={slug} />
            )} />
          )}
          <Route path="/:id" component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default App;