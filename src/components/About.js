import React from "react";
import profileImage from "../assets/profileimage/profileImage.jpg";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about__title heading__primary">About me</h2>
        <div className="about__body">
          <figure className="portfolio__story">
            <img
              className="portfolio__story__img"
              src={profileImage}
              alt="Olufemi Afolabi"
            />
            <div className="portfolio__story__caption">Olufemi Afolabi</div>
          </figure>
          <div className="about__paragraph">
            <p className="paragraph">
              I am a self taught web developer, currently a student at
              <strong className="text-lead">Saint Xavier University</strong>,
              working on my MS in
              <strong className="text-lead">Applied Computer Science</strong>
              (Graduating December, 2019).
            </p>
            <br />
            <p className="paragraph">
              Extensive knowledge of web applications and software development.
              Possessing the ability to learn fast, take initiative, prioritize
              multiple tasks in a fast pace working environment.
            </p>
            <br />
            <p className="paragraph">
              If I'm not working on a computer you can find me relieving stress
              by cooking, watching soccer highlights or playing video
              games(soccer), and most importantly spending time with family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
