import React, { Component } from "react";
//scroll-out
import ScrollOut from "scroll-out";
//react-scroll for smooth scrool
import {
  // Link,
  Element
  // Events,
  // animateScroll as scroll,
  // scrollSpy
  // scroller
} from "react-scroll";

import Landing from "../components/Landing";
import About from "../components/About";
import TechStack from "../components/TechStack";
import PortfolioWork from "../components/PortfolioWork";
import Contact from "../components/Contact";

class Home extends Component {
  componentDidMount() {
    // scrollout
    this.so = ScrollOut();
  }
  componentWillUnmount() {
    this.so.teardown();
  }

  render() {
    return (
      <main className="content">
        <Element name="home">
          <Landing />
        </Element>

        <Element name="about">
          <About />
        </Element>

        <Element name="techstack">
          <TechStack />
        </Element>

        <Element name="portfolio">
          <PortfolioWork />
        </Element>

        <Element name="contact">
          <Contact />
        </Element>
      </main>
    );
  }
}

export default Home;
