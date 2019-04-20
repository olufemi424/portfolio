import React from "react";
import resume from "../assets/download/olufemiafolabi.docx";

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footer__button">
        <a
          href={resume}
          className="footer__button--link"
          download="Olufemi Afolabi Resume"
        >
          <svg className="footer__button--icon github">
            <use href="img/sprite.svg#icon-github" />
          </svg>
          Download Resume
        </a>
      </div>
      <div className="footer__text">
        Copyright &copy; Olufemi Afolabi{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        All rights reserved.
        <span id="year" />
      </div>
    </footer>
  );
};

export default Footer;
