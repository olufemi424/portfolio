import React, { Component } from "react";

// images
import JavaScript from "../assets/stack/JavaScript-logo.png";
import Git from "../assets/stack/git.png";
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

export class TechStack extends Component {
  state = {
    filterStack: [],
    stackArr: [
      {
        href: JavaScript,
        category: "frontend"
      },
      {
        href: Git,
        category: "versioncontrol"
      },
      {
        href: Html5,
        category: "frontend"
      },
      {
        href: Jquery,
        category: "frontend"
      },
      {
        href: Php,
        category: "backend"
      },
      {
        href: Reactpng,
        category: "frontend"
      },
      {
        href: firebase,
        category: "database"
      },
      {
        href: Node,
        category: "backend"
      },
      {
        href: mongodb,
        category: "backend"
      },
      {
        href: BootStrappng,
        category: "frontend"
      },
      {
        href: Googlanalytics,
        category: "backend"
      },
      {
        href: Photoshop,
        category: "frontend"
      },
      {
        href: Sketchpng,
        category: "frontend"
      },
      {
        href: python,
        category: "backend"
      },
      {
        href: angular,
        category: "frontend"
      },
      {
        href: css,
        category: "frontend"
      },
      {
        href: Vscode,
        category: "editor"
      },
      {
        href: Sasspng,
        category: "frontend"
      },
      {
        href: Github,
        category: "versioncontrol"
      },
      {
        href: Aspnet,
        category: "frontend"
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
      return (
        <img
          key={image.href}
          className="stack__img"
          data-toggle="tooltip"
          data-placement="top"
          title="HTML5"
          src={image.href}
          alt="html5"
        />
      );
    });
    return (
      <section className="stack">
        <div className="container">
          <h2 className="stack__title heading__primary">
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
