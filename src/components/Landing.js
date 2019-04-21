import React from "react";

//commons
import SocialLinks from "../commons/SocialLinks";

export default function Landing() {
  return (
    <section id="home">
      <div className="container">
        <div className="portfolio">
          <div className="portfolio__info">
            <h1 className="portfolio__info__heading">Hey, I'm Olu.</h1>
            <h3 className="portfolio__info__heading--sub portfolio__info__typewriter">
              <span id="typewriter" /> I'm full stack developer...
            </h3>
            <SocialLinks />
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
