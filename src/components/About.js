import React from "react";
import profileImage from "../assets/profileimage/profileImage.jpg";

export default function About() {
	return (
		<section id="about" className="about">
			<div className="container">
				<h2 className="about__title heading__primary" data-scroll>
					About me
				</h2>
				<div className="about__body">
					<figure className="portfolio__story" data-scroll>
						<img
							className="portfolio__story__img"
							src={profileImage}
							alt="Olufemi Afolabi"
						/>
						<div className="portfolio__story__caption">Olufemi Afolabi</div>
					</figure>
					<div className="about__paragraph">
						<p className="paragraph">
							A full stack web developer with an eye for creative design, UI/UX
							development and a strong desire to learn and explore.
							<strong className="text-lead">
								{" "}
								Bachelor of Technology and MS Degree in Applied Computer
								Science.
							</strong>
						</p>
						<br />
						<p className="paragraph">
							Extensive knowledge of web applications and software development.
							Possessing the ability to learn fast, take initiative, prioritize
							multiple tasks in a fast pace working environment.
						</p>
						<br />
						<p className="paragraph">
							If I'm not working on my computer you can find me relieving stress
							by cooking, watching soccer game or playing video games, and most
							importantly{" "}
							<strong className="text-lead">spending time with family.</strong>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
