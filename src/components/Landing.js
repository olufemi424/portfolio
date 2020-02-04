import React from "react";
import { Link as ScrollLink } from "react-scroll";

//commons
import SocialLinks from "../commons/SocialLinks";

export default function Landing() {
	return (
		<section id="home">
			<div className="container">
				<div className="portfolio">
					<div className="portfolio__info">
						<h1 className="portfolio__info__heading">
							Hey, I'm <span className="myName">Olu.</span>
						</h1>
						<h3 className="portfolio__info__heading--sub portfolio__info__typewriter">
							I'm a full stack software developer...
						</h3>
						<SocialLinks />
						<div className="portfolio__info__cta">
							<ScrollLink
								className="portfolio__info__cta__btn"
								to="portfolio"
								spy={true}
								smooth={true}
								duration={500}
							>
								Portfolio
							</ScrollLink>
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
