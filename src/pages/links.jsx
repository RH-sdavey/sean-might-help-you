import React, { Component } from "react";
import Helmet from "react-helmet";
import Links from "../components/Links/Links";
import config from "../../data/SiteConfig";

class LinksPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`Links | ${config.siteTitle}`} />
        <About />
      </div>
    );
  }
}

export default LinksPage;
