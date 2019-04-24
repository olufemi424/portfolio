import React from "react";
// images
import friendConnect from "../assets/project-img/friendconnet.png";
import lyrica from "../assets/project-img/lyrica.png";
import moviedb from "../assets/project-img/moviedb.png";
import shopwiseinc from "../assets/project-img/shopwiseinc.png";
import piggame from "../assets/project-img/pig-game.png";

//SVG
import githubsvg from "../assets/SVG/github.svg";
import eye from "../assets/SVG/eye.svg";

export default function PortfolioWork() {
  return (
    <section id="portfolio" className="work">
      <div className="container">
        <h2 className="work__title heading__primary" data-scroll>
          <strong>Portfolio</strong>
        </h2>

        <div className="work__header">
          <h3 className="work__header__title--sub">
            <strong>Check Out My Projects.</strong>
          </h3>
          <p className="paragraph--center">
            Here you will find some of my personal projects, and also the ones
            I'm working on. Each of this projects are ideas I have, which I'm
            constantly improving with newly aquired skills.
          </p>
        </div>

        {/* <!-- ITEM ZERO --> */}
        <div className="project">
          <div className="project__image--box" data-scroll>
            <img
              src={friendConnect}
              alt="Friend Connect"
              className="project__image"
            />
          </div>
          <div className="project__details--box">
            <h2 className="project__details__title">DevFConnect</h2>
            <h4 className="project__details__title--sub">
              MERN Stack Application
            </h4>
            <p className="project__details__paragraph">
              Currently working on DevFConnect, which is a social media
              application, where developers can create an account, and connect
              with other developers. The idea of this app is to provide a
              platform where developers can make friends with other developers.
            </p>

            <ul className="project__details__list paragraph--small">
              <li className="project__details__list--item">HTML</li>
              <li className="project__details__list--item">CSS</li>
              <li className="project__details__list--item">SASS</li>
              <li className="project__details__list--item">Javascript</li>
              <li className="project__details__list--item">React</li>
              <li className="project__details__list--item">React Redux</li>
              <li className="project__details__list--item">Passport</li>
              <li className="project__details__list--item">JWT Token</li>
              <li className="project__details__list--item">MongoDb</li>
              <li className="project__details__list--item">Mongoose</li>
            </ul>

            <a
              href="https://github.com/olufemi424/friendConnect"
              target="_blank"
              rel="noopener noreferrer"
              className="project__button"
            >
              <img
                src={githubsvg}
                alt="github svg"
                className="project__button__icon"
              />{" "}
              <span className="project__button--link">Github</span>
            </a>
          </div>
        </div>

        {/* <!-- ITEM ONE --> */}
        <div className="project">
          <div className="project__details--box">
            <h2 className="project__details__title">Moviedb</h2>
            <h4 className="project__details__title--sub">
              Moviedb API React App
            </h4>
            <p className="project__details__paragraph">
              The idea of Moviedb app, is to create a platform where the app
              users can check recent movies or shows and also, see what is
              trending with regards to movies or shows. Users can see details
              about each movie/show and also search for their movie of choice.
              New features will be added such as movie thrillers and movie
              suggestions based on what movie you are checking its details.
            </p>

            <ul className="project__details__list paragraph--small">
              <li className="project__details__list--item">HTML</li>
              <li className="project__details__list--item">CSS</li>
              <li className="project__details__list--item">SASS</li>
              <li className="project__details__list--item">Javascript</li>
              <li className="project__details__list--item">React</li>
              <li className="project__details__list--item">React Redux</li>
              <li className="project__details__list--item">JSX</li>
              <li className="project__details__list--item">
                React-Styled-Component
              </li>
            </ul>
            <a
              href="https://github.com/olufemi424/movie-database"
              target="_blank"
              rel="noopener noreferrer"
              className="project__button"
            >
              <img
                src={githubsvg}
                alt="github svg"
                className="project__button__icon"
              />{" "}
              <span className="project__button--link">Github</span>
            </a>
            <a
              href="https://olufemi-moviedb.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project__button"
            >
              <img
                src={eye}
                alt="github svg"
                className="project__button__icon"
              />{" "}
              <span className="project__button--link">Visit</span>
            </a>
          </div>
          <div className="project__image--box" data-scroll>
            <img src={moviedb} alt="Movie DB" className="project__image" />
          </div>
        </div>

        {/* <!-- ITEM TWO --> */}
        <div className="project">
          <div className="project__image--box" data-scroll>
            <img src={lyrica} alt="Lyrica App" className="project__image" />
          </div>
          <div className="project__details--box data-scroll data-scroll">
            <h2 className="project__details__title">Lyrica lyrics App</h2>
            <h4 className="project__details__title--sub">
              Lyrics finder app with Firebase-Auth, React. This little project
              shows firebase login and pulling data from a third API.
            </h4>

            <ul className="project__details__list paragraph--small">
              <li className="project__details__list--item">HTML</li>
              <li className="project__details__list--item">CSS</li>
              <li className="project__details__list--item">Javascript</li>
              <li className="project__details__list--item">React</li>
              <li className="project__details__list--item">React Redux</li>
              <li className="project__details__list--item">JSX</li>
              <li className="project__details__list--item">Firebase</li>
              <li className="project__details__list--item">Firestore</li>
              <li className="project__details__list--item">
                React-Styled-Component
              </li>
            </ul>

            <a
              href="https://github.com/olufemi424/lyricsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="project__button"
            >
              <img
                src={githubsvg}
                alt="github svg"
                className="project__button__icon"
              />{" "}
              <span className="project__button--link">Github</span>
            </a>
            <a
              href="https://lyricsappfirebaseauth.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project__button"
            >
              <img
                src={eye}
                alt="github svg"
                className="project__button__icon"
              />{" "}
              <span className="project__button--link">Visit</span>
            </a>
          </div>
        </div>

        {/* <!-- ITEM THREE --> */}
        <div className="project">
          <div className="project__details--box">
            <h2 className="project__details__title">Shopwise Inc Theme</h2>
            <h4 className="project__details__title--sub">Bootstrap Theme</h4>

            <ul className="project__details__list paragraph--small">
              <li className="project__details__list--item">HTML</li>
              <li className="project__details__list--item">Bootstrap</li>
            </ul>
            <a
              href="https://github.com/olufemi424/car-sale-template"
              target="_blank"
              rel="noopener noreferrer"
              className="project__button"
            >
              <img
                src={githubsvg}
                alt="github svg"
                className="project__button__icon"
              />{" "}
              <span className="project__button--link">Github</span>
            </a>
            <a
              href="https://olufemi424.github.io/car-sale-template/"
              target="_blank"
              rel="noopener noreferrer"
              className="project__button"
            >
              <img
                src={eye}
                alt="github svg"
                className="project__button__icon"
              />{" "}
              <span className="project__button--link">Visit</span>
            </a>
          </div>
          <div className="project__image--box" data-scroll>
            <img
              src={shopwiseinc}
              alt="ShopWise Inc"
              className="project__image"
            />
          </div>
        </div>

        {/* <!-- ITEM THREE --> */}
        <div className="project">
          <div className="project__image--box" data-scroll>
            <img src={piggame} alt="Pig_game" className="project__image" />
          </div>
          <div className="project__details--box">
            <h2 className="project__details__title">Pig Game</h2>
            <h4 className="project__details__title--sub">
              Pure Javascript game
            </h4>

            <ul className="project__details__list paragraph--small">
              <li className="project__details__list--item">HTML</li>
              <li className="project__details__list--item">CSS</li>
              <li className="project__details__list--item">Javascript</li>
            </ul>
            <a
              href="https://github.com/olufemi424/dice-game"
              target="_blank"
              rel="noopener noreferrer"
              className="project__button"
            >
              <img
                src={githubsvg}
                alt="github svg"
                className="project__button__icon"
              />{" "}
              <span className="project__button--link">Github</span>
            </a>
            <a
              href="https://olufemi424.github.io/dice-game/"
              target="_blank"
              rel="noopener noreferrer"
              className="project__button"
            >
              <img
                src={eye}
                alt="github svg"
                className="project__button__icon"
              />{" "}
              <span className="project__button--link">Visit</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
