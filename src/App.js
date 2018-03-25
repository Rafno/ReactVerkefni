import React, { Component } from "react";
import Helmet from "react-helmet";
import { Route, Link, Switch } from "react-router-dom";

import "./App.css";

import Home from "./components/home";
import School from "./components/school";
import Navigation from "./components/navigation";
import NotFound from "./components/not-found";
import { fetchNavigation, fetchDynamic} from "./utils/data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      navigation: null,
      stats:null
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
        <Switch>
          <Route exact path='/' render={(props) => (
            <Home {...props} stats={stats} />
          )} />
          {navigation.map(({ name, link, slug }) =>
          /*TODO, dynamic parsea link*/ 
            <Route
              exact path={link}
              component={School}
            />
            )}
          <Route exact path="/:id" component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default App;