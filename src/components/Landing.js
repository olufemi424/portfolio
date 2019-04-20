import React from "react";

//SVG
import codepen from "../assets/SVG/codepen.svg";
import github from "../assets/SVG/github.svg";
import linkedin from "../assets/SVG/linkedin.svg";
import instagram from "../assets/SVG/instagram.svg";

export default function Landing() {
  return (
    <section id="home">
      <div className="container">
        <div className="portfolio">
          <div className="portfolio__info">
            <h1 className="portfolio__info__heading">Hey, I'm Olu.</h1>
            <h3 className="portfolio__info__heading--sub portfolio__info__typewriter">
              <span id="typewriter" /> I'm a Web Developer, Programmer,
              Designer, 'n Entrepreneur....
            </h3>

            <div className="portfolio__social">
              <a
                href="https://codepen.io/olufemi424/"
                className="portfolio__social--link"
              >
                <img
                  className="portfolio__social--icon codepen"
                  alt="icon"
                  src={codepen}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/olufemiafolabi91"
                className="portfolio__social--link"
              >
                <img
                  className="portfolio__social--icon linkedin"
                  alt="icon"
                  src={linkedin}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/olufemiafolabi91"
                className="portfolio__social--link"
              >
                <img
                  className="portfolio__social--icon instagram"
                  alt="icon"
                  src={instagram}
                />
              </a>

              <a
                href="https://github.com/olufemi424"
                className="portfolio__social--icon"
              >
                <img
                  className="portfolio__social--icon github"
                  alt="icon"
                  src={github}
                />
              </a>
            </div>

            <div className="portfolio__info__cta">
              <a href="#portfolio" className="portfolio__info__cta__btn">
                Portfolio
              </a>
            </div>

            <div className="landing__mouse">
              <div className="mouse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
