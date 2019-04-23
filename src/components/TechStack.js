import React, { Component } from "react";

// images
import JavaScript from "../assets/stack/JavaScript-logo.png";
import Git from "../assets/stack/git.png";
import Java from "../assets/stack/java.jpg";
import Html5 from "../assets/stack/html5.png";
import Jquery from "../assets/stack/jquery.png";
import Php from "../assets/stack/php.png";
import Node from "../assets/stack/node.png";
import Reactpng from "../assets/stack/react.png";
import Vscode from "../assets/stack/vscode.png";
import Sasspng from "../assets/stack/sass.png";
import Aspnet from "../assets/stack/aspnetpng.png";
import Github from "../assets/stack/github.png";
import Sketchpng from "../assets/stack/sketch.png";
import Photoshop from "../assets/stack/photoshop.png";
import Googlanalytics from "../assets/stack/googleanalytics.png";
import BootStrappng from "../assets/stack/bootstrap.png";
import mongodb from "../assets/stack/mongodb.png";
import firebase from "../assets/stack/firebase.png";
import python from "../assets/stack/python.jpg";
import angular from "../assets/stack/angular.png";
import css from "../assets/stack/css.png";
import Sql from "../assets/stack/sql.png";

export class TechStack extends Component {
  state = {
    filterStack: [],
    stackArr: [
      {
        href: Html5,
        name: "Html5",
        category: "frontend"
      },
      {
        href: css,
        name: "css",
        category: "frontend"
      },
      {
        href: Sasspng,
        name: "sass",
        category: "frontend"
      },
      {
        href: BootStrappng,
        name: "BootStrap",
        category: "frontend"
      },
      {
        href: JavaScript,
        name: "JavaScript",
        category: "frontend"
      },
      {
        href: Php,
        name: "Php",
        category: "backend"
      },

      {
        href: Jquery,
        name: "Jquery",
        category: "frontend"
      },
      {
        href: Reactpng,
        name: "React Js",
        category: "frontend"
      },
      {
        href: angular,
        name: "angular",
        category: "frontend"
      },
      {
        href: Java,
        name: "Java",
        category: "backend"
      },
      {
        href: python,
        name: "python",
        category: "backend"
      },
      {
        href: Node,
        name: " Node JS",
        category: "backend"
      },
      {
        href: Git,
        name: "Git",
        category: "versioncontrol"
      },
      {
        href: firebase,
        name: "firebase",
        category: "database"
      },
      {
        href: Sql,
        name: "SQL",
        category: "database"
      },
      {
        href: mongodb,
        name: "mongodb",
        category: "backend"
      },

      {
        href: Googlanalytics,
        name: "GoogleAnalytics",
        category: "backend"
      },
      {
        href: Photoshop,
        name: "Photoshop",
        category: "frontend"
      },
      {
        href: Sketchpng,
        name: "Sketch",
        category: "frontend"
      },

      {
        href: Vscode,
        name: "Vscode",
        category: "editor"
      },

      {
        href: Github,
        name: "Github",
        category: "versioncontrol"
      },
      {
        href: Aspnet,
        name: "Asp.net",
        category: "backend"
      }
    ]
  };

  componentDidMount() {
    this.filterAll();
  }

  //filter backend stack image
  filterBackEnd = () => {
    const stateStackArr = [...this.state.stackArr];
    const newStackArr = stateStackArr.filter(
      stack => stack.category === "backend"
    );
    this.setState({
      filterStack: newStackArr
    });
  };

  //   fill front end stack image
  filterFrontEnd = () => {
    const stateStackArr = [...this.state.stackArr];
    const newStackArr = stateStackArr.filter(
      stack => stack.category === "frontend"
    );
    this.setState({
      filterStack: newStackArr
    });
  };

  //filter all image
  filterAll = () => {
    this.setState({
      filterStack: this.state.stackArr
    });
  };

  render() {
    const stateStack = [...this.state.filterStack];
    const newstateStack = stateStack.map(image => {
      const { name, href } = image;
      return (
        <div className="stack__main-card" key={href}>
          <div className="stack__card">
            <div className="stack__card--front">
              <img className="stack__img" src={href} alt="" />
            </div>
            <div className="stack__card--back">
              <h5 className="stack__card--name">{name.toUpperCase()}</h5>
            </div>
          </div>
        </div>
      );
    });
    return (
      <section className="stack">
        <div className="container">
          <h2 className="stack__title heading__primary" data-scroll>
            <strong>Tech Stack, but not limited...</strong>
          </h2>
          <div id="filter" className="stack__filter">
            <h3 className="stack__filter--header">Filter </h3>
            <button
              onClick={this.filterAll}
              className="stack__filter--btn"
              id="all"
            >
              all
            </button>

            <button
              onClick={this.filterFrontEnd}
              className="stack__filter--btn"
              id="frontend"
            >
              frontend
            </button>
            <button
              onClick={this.filterBackEnd}
              className="stack__filter--btn"
              id="backend"
            >
              backend
            </button>
          </div>
          <div id="stack_images" className="stack__images">
            {newstateStack}
          </div>
        </div>
      </section>
    );
  }
}

export default TechStack;
