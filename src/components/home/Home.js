import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './Home.css';

/* hér ætti að sækja forsíðu vefþjónustu til að sækja stats */


export default class Home extends Component {
  state = { data: null, loading: true, error: false }
  async componentDidMount() {
    try {
      const stats = this.props;
      const data = await this.fetchData(stats);
      console.log(data);
      this.setState({ data, loading: false });
    } catch (e) {
      console.error('Error fetching navigation', e);
      this.setState({ error: true, loading: false });
    }
  }

  async fetchData(stats) {
    const response = await fetch(stats);
    const data = await response.json();
    return data;
  }
  render() {
    const { data, loading, error } = this.state;
    if (loading) {
      return (
        <div>
          <p>Sæki gögn...</p>
        </div>
      );
    }
  if(error) {
    return (
      <div>
        <p>Villa við að sækja gögn</p>
      </div>
    );
  }
    console.log(data);
    return (
      <div className="home">
        <p>er</p>
      </div>
    );
  }
}