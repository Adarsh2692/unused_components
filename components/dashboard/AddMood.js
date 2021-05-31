import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { addMood } from "../../actions/profile";

const AddMood = ({ setAlert, addMood }) => {
	const [formData, setFormData] = useState({
		mood: "",
		rating: 0,
		moodImage: "",
	});

	const { mood, rating, moodImage } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		addMood({ mood, rating, moodImage });
	};

	return (
		<Fragment>
			<h1>Edit your profile</h1>
			<form className="form" onSubmit={onSubmit}>
				<div className="form-group">
					<div className="form-group">
						<input
							type="text"
							placeholder="Mood"
							name="mood"
							value={mood}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="number"
							placeholder="Mood Rating"
							name="rating"
							value={rating}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							placeholder="moodImage"
							name="moodImage"
							value={moodImage}
							onChange={onChange}
						/>
					</div>
				</div>
				<input type="submit" className="btn btn-primary" value="Update" />
			</form>
		</Fragment>
	);
};

AddMood.propTypes = {
	setAlert: PropTypes.func.isRequired,
	addMood: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, addMood })(AddMood);
