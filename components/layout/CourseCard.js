import React from "react";
import { Link } from "react-router-dom";

function CourseCard(props) {
	return (
		<>
			<div
				className="cards__item"
				style={{
					background: `url(${props.src})`,
					width: "85vw",
					height: "55vh",
					borderRadius: "2.5vh",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					objectFit:"fill"
				}}
			>
				<div
					className="cards__item__info container-fluid"
					style={{ marginTop: "3vh" }}
				>
					<p style={{ paddingLeft: "2vh" }}>
						<p
							className="cards__item__text"
							style={{ paddingTop: "3vh", fontWeight: "bold", fontSize: "5vh" }}
						>
							{props.name}
						</p>
						<p style={{ fontWeight: "bold", fontSize: "4vh" }}>
							Start Your Free Intro Now
						</p>
						<p
							className="cards__item__text"
							style={{
								fontWeight: "bold",
								fontWeight: "bold",
								fontSize: "4vh",
							}}
						>
							{props.music}Music
						</p>
						<p
							className="cards__item__text"
							style={{
								fontWeight: "bold",
								fontWeight: "bold",
								fontSize: "4vh",
							}}
						>
							{props.exercise}Exercise
						</p>
					</p>
				</div>
			</div>
		</>
	);
}

export default CourseCard;
