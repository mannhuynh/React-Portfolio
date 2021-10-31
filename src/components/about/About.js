import React from "react";
import "./about.css";
import DadDaughter from "../../images/dad-daughter.jpg";
import Award from "../../images/dad-award.jpg";

function About() {
	return (
		<div className="a">
			<div className="a-left">
				<div className="a-card bg"></div>
				<div className="a-card">
					<img src={DadDaughter} alt="" className="a-image" />
				</div>
			</div>
			<div className="a-right">
				<h1 className="a-title">About Me</h1>
				<p className="a-sub">
					It is a long established fact that a reader will be distracted by the
					readable content.
				</p>
				<p className="a-desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
				</p>
				<div className="a-award">
					<img src={Award} alt="" className="a-award-img" />
					<div className="a-award-texts">
						<h4 className="a-award-title">International Dad Awards 2021</h4>
						<p className="a-award-desc">
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
							and fugit.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
