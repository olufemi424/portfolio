import React from "react";

//SVG
import codepen from "../assets/SVG/codepen.svg";
import github from "../assets/SVG/github.svg";
import linkedin from "../assets/SVG/linkedin.svg";
import instagram from "../assets/SVG/instagram.svg";

export default function SocialLinks() {
  return (
    <div className="portfolio__social">
      <a
        href="https://codepen.io/olufemi424/"
        className="portfolio__social--link"
        target="_blank"
        rel="noopener noreferrer"
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
        target="_blank"
        rel="noopener noreferrer"
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
        target="_blank"
        rel="noopener noreferrer"
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
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="portfolio__social--icon github"
          alt="icon"
          src={github}
        />
      </a>
    </div>
  );
}
