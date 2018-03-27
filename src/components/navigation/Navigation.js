import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Navigation.css";


export default class Navigation extends Component {
  render() {
    const { navigation } = this.props;
    const schoolsList = navigation.map(({ name, link, slug }) => <a href={link}>{name}</a>);
    return (
      <nav className="navigation">
        <div>
          <h1>Próftöflur</h1>
          <div className="schoolsList">{schoolsList}</div>
        </div>
      </nav>
    );
  }
}