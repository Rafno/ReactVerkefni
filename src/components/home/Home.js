import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './Home.css';

/* hér ætti að sækja forsíðu vefþjónustu til að sækja stats */


export default class Home extends Component {

  render() {
    const { stats } = this.props;
    return (
      <div className="home">
        <Helmet>
          <title>Stats</title>
        </Helmet>
        <h2>Tölfræði</h2>
        <div className="line">
          <b>Fjöldi prófa: </b>
          <p>{stats.stats.numTests}</p>
        </div>
        <div className="line">
          <b>Fjöldi nemanda í öllum prófum:</b>
          <p>{stats.stats.numStudents}</p>
        </div>
        <div className="line">
          <b>Meðalfjöldi nemanda í prófi: </b>
          <p>{stats.stats.averageStudents}</p>
        </div>
        <div className="line">
          <b>Minnsti fjöldi nemanda í prófi:</b>
          <p>{stats.stats.min}</p>
        </div>
        <div className="line">
          <b>Mesti fjöldi nemanda í prófi: </b>
          <p>{stats.stats.max}</p>
        </div>
        <style>{`.line{display:flex; justify-content:space-between; width:50%;`}</style>
      </div>
    );
  }
}
Home.propTypes = {
  stats: PropTypes.array.isRequired,
}