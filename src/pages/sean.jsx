import React, { Component } from "react";
import Helmet from "react-helmet";
import Sean from "../components/Sean/Sean";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div className="sean-container">
        <Helmet title={`Sean | ${config.siteTitle}`} />
        <Sean />
      </div>
    );
  }
}

export default SeanPage;
