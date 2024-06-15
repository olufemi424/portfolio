import React, { useState, useEffect } from "react";
import Pulse from "react-reveal/Pulse";
import home from "../assets/SVG/home.svg";

import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [collapsed, setcollapsed] = useState(true);
  const [animateBurger, setanimateBurger] = useState(false);
  const [scroll, setscroll] = useState(null);
  const [top, setTop] = useState(null);

  useEffect(() => {
    const el = document.querySelector("nav");
    setTop(el.offsetTop);
    window.addEventListener("scroll", handleScroll);
  }, []);

  function toggleNav() {
    setanimateBurger(!animateBurger);
    setcollapsed(!collapsed);
  }

  const handleScroll = () => {
    setscroll(window.scrollY);
  };

  const sticky = scroll > top ? "fixed-nav" : "";
  const collapseNav = collapsed ? "nav" : "nav open";

  return (
    <header className="header">
      <Pulse>
        <nav className={`${collapseNav} ${sticky}`}>
          <div className="nav__items">
            <div className="logo">
              <a href="http://olufemiaf.com/" className="logo__icon">
                <img className="" alt="icon" src={home} />
              </a>
            </div>

            <ul className="menu">
              <li className="menu__item">
                <ScrollLink
                  className="menu__item--link menu__item--link--active"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </ScrollLink>
              </li>

              <li className="menu__item">
                <ScrollLink
                  className="menu__item--link menu__item--link"
                  activeClass="active"
                  to="techstack"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Tech
                </ScrollLink>
              </li>

              <li className="menu__item">
                <ScrollLink
                  className="menu__item--link menu__item--link"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </ScrollLink>
              </li>

              <li className="menu__item">
                <ScrollLink
                  className="menu__item--link menu__item--link"
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Portfolio
                </ScrollLink>
              </li>

              <li className="menu__item">
                <ScrollLink
                  className="menu__item--link menu__item--link"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="hamburger" onClick={toggleNav}>
          <span className={animateBurger ? "first-bar change" : "first-bar"} />{" "}
          <span
            className={animateBurger ? "second-bar change" : "second-bar"}
          />
          <span className={animateBurger ? "third-bar change" : "third-bar"} />
        </div>
      </Pulse>
    </header>
  );
};

export default Header;
