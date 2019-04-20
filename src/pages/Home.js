import React, { Component } from "react";
//scroll
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
  // componentDidMount() {
  //   Events.scrollEvent.register("begin", function(to, element) {
  //     // console.log("begin", arguments);
  //   });
  //   Events.scrollEvent.register("end", function(to, element) {
  //     // console.log("end", arguments);
  //   });
  //   scrollSpy.update();
  // }
  // componentWillUnmount() {
  //   Events.scrollEvent.remove("begin");
  //   Events.scrollEvent.remove("end");
  // }

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
