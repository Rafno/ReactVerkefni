import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Navigation.css";


export default class Navigation extends Component {
  render() {
    const { navigation } = this.props;
    console.log(navigation);
    const schoolsList = navigation.map(({ name, link, slug }) => <a href={link}>{name}</a>);
    return (
      <nav className="navigation">
        <div>
          <h1>Próftöflur</h1>
          <style>{`h1 {font-size:50px; text-decoration:underline;  }`}</style>
          <div className="schoolsList">{schoolsList}</div>
          <style
          >{`.schoolsList {display: flex; flex-direction: row; justify-content:space-between; text-decoration:underline;}`}</style>
        </div>
      </nav>
    );
  }
}