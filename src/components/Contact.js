import React from "react";

//SVG
import codepen from "../assets/SVG/codepen.svg";
import github from "../assets/SVG/github.svg";
import linkedin from "../assets/SVG/linkedin.svg";
import instagram from "../assets/SVG/instagram.svg";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact__title heading__primary">
          <strong>Contact</strong>
        </h2>
        <p className="paragraph--center">
          You can find out more about my personal projects and what i am working
          in my
          <a className="text-lead" href="portfolio.html">
            portfolio
          </a>
          . Please do not hesitate to reach out if you would like to discuss
          your project / job opportunity.
        </p>
        <p className="paragraph--center">
          The best way to
          <a className="text-lead" href="contact.html">
            contact
          </a>{" "}
          me is via my
          <a className="text-lead" href="https://www.instagram.com/olufemiaf/">
            instagram
          </a>
          or by sending me an
          <a className="text-lead" href="mailto:olufemiaf@gmail.com">
            email
          </a>
          .
        </p>
        <br />
        <p className="paragraph--center">
          Interested in a partnership? Want to discuss a freelance opportunity?
          I'd be so happy to speak with you
        </p>

        <div className="portfolio__info__cta">
          <a
            href="mailto:olufemiaf@gmail.com"
            className="portfolio__info__cta__btn"
          >
            Reach Out To Me
          </a>
        </div>
        <p className="text-lead-sub">
          <q>
            The things you're passionate about are not random. <br />
            They are your calling.
          </q>
        </p>
      </div>
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
    </section>
  );
}
