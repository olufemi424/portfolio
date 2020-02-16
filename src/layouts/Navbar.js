import React, { Component } from "react";
import Pulse from "react-reveal/Pulse";
import home from "../assets/SVG/home.svg";

import { Link as ScrollLink } from "react-scroll";

class Header extends Component {
	state = {
		collapsed: true,
		animateBurger: false
	};

	componentDidMount() {
		const el = document.querySelector("nav");
		this.setState({ top: el.offsetTop, height: el.offsetHeight });
		window.addEventListener("scroll", this.handleScroll);
	}

	toggleNav = () => {
		let collapse = !this.state.collapsed;
		let animatedBurger = !this.state.animateBurger;
		this.setState({ collapsed: collapse, animateBurger: animatedBurger });
	};

	handleScroll = () => {
		this.setState({ scroll: window.scrollY });
	};

	render() {
		const sticky = this.state.scroll > this.state.top ? "fixed-nav" : "";
		const collapseNav = this.state.collapsed ? "nav" : "nav open";

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
					<div className="hamburger" onClick={this.toggleNav}>
						<span
							className={
								this.state.animateBurger ? "first-bar change" : "first-bar"
							}
						/>{" "}
						<span
							className={
								this.state.animateBurger ? "second-bar change" : "second-bar"
							}
						/>
						<span
							className={
								this.state.animateBurger ? "third-bar change" : "third-bar"
							}
						/>
					</div>
				</Pulse>
			</header>
		);
	}
}

export default Header;
