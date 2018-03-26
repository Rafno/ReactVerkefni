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
        <h2>Tölfræði</h2>
        <b>TODO, laga css/breyta html tögum</b>
        <p>Fjöldi prófa: -> {stats.stats.numTests}</p>
        <p>Fjöldi nemanda í öllum prófum: -> {stats.stats.numStudents}</p>
        <p>Meðalfjöldi nemanda í prófi: -> {stats.stats.averageStudents}</p>
        <p>Minnsti fjöldi nemanda í prófi: -> {stats.stats.min}</p>
        <p>Mesti fjöldi nemanda í prófi: -> {stats.stats.max}</p>

      </div>
    );
  }
}