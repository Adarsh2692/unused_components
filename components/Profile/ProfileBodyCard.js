import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ProfileBodyCard.css";

/* Displays an individual profile detail in a structured way
 */
const ProfileBodyCard = (props) => {
	const category = props.category;
	const card = props.card;

	return (
		<div label={category} className="profile-card">
			<div className="card-header">Happy</div>
			{card.dateRange && (
				// Only create an element for the date range if the value is provided
				<div className="card-dates">12 december</div>
			)}
			<div className="card-description">You were happy at this time</div>
		</div>
	);
};

ProfileBodyCard.propTypes = {
	card: PropTypes.object.isRequired,
	category: PropTypes.string.isRequired,
};

export default ProfileBodyCard;
