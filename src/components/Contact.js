import React from "react";
import { Link } from "react-scroll";

//commons
import SocialLinks from "../commons/SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact__title heading__primary">
          <strong>Contact</strong>
        </h2>
        <p className="paragraph--center">
          You can find out more about my personal projects and what i am working
          in my{" "}
          <Link
            style={{ cursor: "pointer" }}
            className="text-lead"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
          >
            portfolio
          </Link>{" "}
          . Please do not hesitate to reach out if you would like to discuss
          your project / job opportunity.
        </p>
        <p className="paragraph--center">
          The best way to contact me is via my{" "}
          <a className="text-lead" href="https://www.instagram.com/olufemiaf/">
            instagram
          </a>{" "}
          or by sending me an{" "}
          <a className="text-lead" href="mailto:olufemiaf@gmail.com">
            email
          </a>
          .
        </p>
        <br />
        <p className="paragraph--center">
          Interested in a partnership? Want to discuss a freelance opportunity?
          Offering a job opportunity? I'd be so happy to speak with you
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
      <SocialLinks />
    </section>
  );
}
