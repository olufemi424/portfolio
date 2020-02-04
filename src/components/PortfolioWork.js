import React from "react";
import datas from "../assets/data.js";

//SVG
import githubsvg from "../assets/SVG/github.svg";
import eye from "../assets/SVG/eye.svg";

const projects = datas.map(data => {
	//overide icons for each data
	data.icons.githubsvg = githubsvg;
	data.icons.eye = eye;

	return (
		<div className="project" key={data.title}>
			<div className="project__details--box">
				<h2 className="project__details__title">{data.title}</h2>
				<h4 className="project__details__title--sub">{data.subTitle}</h4>
				<p className="project__details__paragraph">{data.desc}</p>

				<ul className="project__details__list paragraph--small">
					{data.tools.map(tool => (
						<li key={tool} className="project__details__list--item">
							{tool}
						</li>
					))}
				</ul>

				<div className="project__actions">
					{data.githubLink && (
						<a
							href={data.githubLink}
							target="_blank"
							rel="noopener noreferrer"
							className="project__button"
						>
							<img
								src={`../${data.icons.githubsvg}`}
								alt="github svg"
								className="project__button__icon"
							/>{" "}
							<span className="project__button--link">Github</span>
						</a>
					)}

					{data.liveHostLink && (
						<a
							href={data.liveHostLink}
							target="_blank"
							rel="noopener noreferrer"
							className="project__button"
						>
							<img
								src={data.icons.eye}
								alt="github svg"
								className="project__button__icon"
							/>{" "}
							<span className="project__button--link">Visit</span>
						</a>
					)}
				</div>
			</div>
			<div className="project__image--box" data-scroll>
				<img src={data.image} alt="twitterLike" className="project__image" />
			</div>
		</div>
	);
});

export default function PortfolioWork() {
	return (
		<section id="portfolio" className="work">
			<div className="container">
				<h2 className="work__title heading__primary" data-scroll>
					<strong>Portfolio</strong>
				</h2>

				<div className="work__header">
					<h3 className="work__header__title--sub">
						<strong>Check Out My Projects.</strong>
					</h3>
					<p className="paragraph--center">
						Here you will find some of my personal projects, and also the ones
						I'm working on. Each of this projects are ideas I have, which I'm
						constantly improving with newly aquired skills.
					</p>
				</div>

				{projects}
			</div>
		</section>
	);
}
