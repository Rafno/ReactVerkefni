import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Department.css';

/**
 * Þessi component ætti að vera einfaldur í birtingu en taka fall frá foreldri
 * sem keyrir þegar smellt er á fyrirsögn.
 */

export default class Exams extends Component {
  render() {
    const { onHeaderClick, heading, tests, visible } = this.props;
    const plus = visible ? '- ' : '+ ';
    return (
      <section className="department">
        <h3 onClick={onHeaderClick}>{plus}{heading}</h3>
        {visible && (<table>
          <tr>
            <th>Auðkenni</th>
            <th>Námskeið</th>
            <th>Fjöldi</th>
            <th>Dagsetning</th>
          </tr>
          {tests.map(el => (<tr className="deild">
            <td>{el.course}</td>
            <td>{el.name}</td>
            <td>{el.students}</td>
            <td>{el.date}</td>
          </tr>))}
        </table>
        )}
      </section>
    );
  }
}
