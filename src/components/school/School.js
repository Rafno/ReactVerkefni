import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Department from '../department';
import './School.css';

/**
 * Í þessum component ætti að vera mest um að vera og séð um að:
 * - Sækja gögn fyrir svið og birta
 * - Opna/loka deildum
 */

export default class School extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      visibleSchool: null,
      slug: null,
    };
  }

  onHeaderClick = (heading) => {
    return (e) => {
      const visibleSchool = this.state.visibleSchool === heading ? null : heading;
      this.setState({ visibleSchool });
    }
  }

  render() {
    const { slug } = this.props;
    return (
      <section className="school">
        <h2>{slug.heading}</h2>
        <div className="schools">
          {slug.departments.map(({ heading, tests }) =>
            <div>
              <Department
                heading={heading}
                tests={tests}
                visible={this.state.visibleSchool === heading}
                onHeaderClick={(this.onHeaderClick(heading))}
              />
            </div>
          )}
        </div>
        <a href="/">Heim</a>
      </section>
    );
  }
}
School.propTypes = {
  slug: PropTypes.object.isRequired,
}