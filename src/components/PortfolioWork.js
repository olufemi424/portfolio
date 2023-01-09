import React from "react";
import datas from "../assets/data.js";
import niniwise1 from "../assets/project-img/niniwise-1.png";
import niniwise2 from "../assets/project-img/niniwise-2.png";
import niniwise3 from "../assets/project-img/niniwise-promo.png";

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

				<div className="project">
					<div className="project__details--box">
						<h2 className="project__details__title">Niniwise.com</h2>
						<h4 className="project__details__title--sub">Full Stack Application</h4>
						<p className="project__details__paragraph">
							I am currently working on a full stack application, a trading journal, with node backend and a vue frontend. The idea of this project is to be able to help new trader identify their behavior patterns in the financial market, giving them the ability to map what is working for them and what is not. A platform that will provide an intense engagement with their trading behavior to help them become a better trader and be profitable in the long term.
						</p>
						<p className="project__details__paragraph">
							For now, this app doesnt support any integration with any brokerage/trading platform. All trades are created manually. Also, i plan on integrating live chart of instruments traded. This app is still in development phase and only few users are allowed at the moment.
						</p>

						<div className="project__details-more">
							<h4 className="project__details-more__header">
								The node backend currently supports a few endpoints:
							</h4>
							<ul className="project__details-more__list">
								<li><code>/trades</code> : returns a list of all trades. Allows filters, <code>wins</code>, <code>losses</code>, <code>date-range</code>, <code>specific trade</code></li>
								<li><code>/setups</code> : returns a list of all setups.  Allows filters, <code>Long</code>, <code>Short</code></li>
							</ul>

							<h4 className="project__details-more__header">
								The client pages are as follows:
							</h4>
							<ul className="project__details-more__list">
								<li><code>/overview</code>: View a monthly calendar, with some analysis of performance for the month such as, average win rate, average lossing rate, win to loss ratio, all time max loss, all time max win</li>
								<li><code>/daily-journal</code>: View the current trading day, also accepts a param to view a particular day from the past where some trades are placed</li>
								<li><code>/trades</code>: View all trades, Also allows for sorting, i.e winning trades, losing trading, date range </li>
								<li><code>/setups</code>: View all Setups, Also suggesting the last 5 winning trades, to give the trader more context on what has been working recently </li>
								<li><code>/story-book</code>: View different instruments (SPY, QQQ, AAPL) that are on watch with associated thesis and technical levels on watch images </li>
							</ul>
						</div>


						<ul className="project__details__list paragraph--small">
							<li className="project__details__list--item">
								HTML
							</li>
							<li className="project__details__list--item">
								CSS
							</li>
							<li className="project__details__list--item">
								Javascript
							</li>
							<li className="project__details__list--item">
								Vue (VueSSR, Vuex)
							</li>
							<li className="project__details__list--item">
								React (hooks, redux)
							</li>
							<li className="project__details__list--item">
								Node
							</li>
							<li className="project__details__list--item">
								Express
							</li>
							<li className="project__details__list--item">
								Jwt
							</li>
							<li className="project__details__list--item">
								Bash Scripting
							</li>
							<li className="project__details__list--item">
								mongoDB (Atlas)
							</li>
						</ul>

						<div className="project__actions">
							<a
								href="http://www.niniwise.com"
								target="_blank"
								rel="noopener noreferrer"
								className="project__button"
							>
								<img
									src={eye}
									alt="github svg"
									className="project__button__icon"
								/>{" "}
								<span className="project__button--link">Visit</span>
							</a>
						</div>
					</div>
					<div className="project__image--box" data-scroll>
						<img src={niniwise3} alt="Niniwise trading journal" className="project__image" />
						<img src={niniwise2} alt="Niniwise trading journal" className="project__image" />
						<img src={niniwise1} alt="Niniwise trading journal" className="project__image" />
					</div>
				</div>

				{projects}
			</div>
		</section>
	);
}
