import React from "react";
import { Link } from "react-router-dom";

function MoodCard(props) {
	return (
		<>
			<div
				className="cards__item"
				value={props.value}
				style={{
					background: `url(${props.src})`,
					width: "400px",
					height: "300px",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					objectFit: "fill",
				}}			
			>
				<div
					className="cards__item__info container-fluid"
					style={{ marginTop: "3vh" }}
				>
				</div>
			</div>
		</>
	);
}

export default MoodCard;
