import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Navigation.css';

class Fetch extends Component {

  state = { data: null, loading: true, error: false }

  async componentDidMount() {
    try {
      const data = await this.fetchData();
      this.setState({ data, loading: false });
    } catch (e) {
      console.error('Error fetching navigation', e);
      this.setState({ error: true, loading: false });
    }
  }

  async fetchData() {
    const response = await fetch('https://vefforritun2-2018-v4-synilausn.herokuapp.com/');
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

    if (error) {
      return (
        <div>
          <p>Villa við að sækja gögn</p>
        </div>
      );
    }
    const schools = data.schools[0].name;
    return (
      <div>
        <p>{schools}</p>
      </div>
    );
  }
}
export default class Navigation extends Component {

  render() {

    return (
      <nav className="navigation">
        <Fetch />
      </nav>
    );
  }
}
